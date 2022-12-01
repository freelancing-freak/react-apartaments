import React, {useEffect, useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './styles.css';
import ImageGallery from 'react-image-gallery';
import {
    ArrowLeft,
    OfferDetailsBackBtn, OfferDetailsBackLink,
    OfferDetailsContainer,
    OfferDetailsContent,
    OfferDetailsDate,
    OfferDetailsLocationWrapper,
    OfferDetailsPrice,
    OfferDetailsShowMoreButton,
    OfferDetailsTag,
    OfferDetailsTagWrapper,
    OfferDetailsTextHeader
} from "./OfferDetailsElements";
import axios from "axios";
import {CircularProgress} from "@mui/material";
import {useForm} from "react-hook-form";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OfferDetails = ({apartment}) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm();

    const onSubmit = async (data) => {
        const {apartmentId, name, phoneNumber, subject, message} = data;
        try {
            setDisabled(true);
            const notification = {
                apartmentId,
                name,
                subject,
                phoneNumber,
                message
            };
            axios.post('https://apartments-prod.herokuapp.com/api/notifications', notification)
                .then(() => {
                    toast.success('Wysłano wiadomość!', {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                })
            reset();
            setDisabled(false);
        } catch (e) {
            toast.error('Coś poszło nie tak!', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setDisabled(false);
        }
    };

    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [fetchedApartment, setFetchedApartment] = useState(apartment);
    const [showMore, setShowMore] = useState(false);
    const [matches, setMatches] = useState(window.matchMedia("(min-width: 768px)").matches)
    useEffect(() => {
        window.matchMedia("(min-width: 768px)").addEventListener('change', e => setMatches(e.matches));
    }, []);

    if (fetchedApartment === undefined && !loading) {
        setLoading(true);
        let url = window.location.href;
        let apartmentId = url.substring(url.lastIndexOf('/') + 1);
        axios.get('https://apartments-prod.herokuapp.com/api/apartments/' + apartmentId).then(res => {
            setFetchedApartment(res.data);
            setLoading(false);
        }).catch(() => {
            setFetchedApartment('error');
            setLoading(false);
        })
    }

    if (fetchedApartment === 'error') {
        return (
            <>
                <OfferDetailsContainer id='wrapper'>
                    <OfferDetailsContent>
                        <OfferDetailsBackLink to='/'>
                            <OfferDetailsTextHeader><ArrowLeft/> Powrót</OfferDetailsTextHeader>
                        </OfferDetailsBackLink>
                        <OfferDetailsTextHeader>Nie znaleziono apartamentu</OfferDetailsTextHeader>
                    </OfferDetailsContent>
                </OfferDetailsContainer>
            </>
        );
    }

    if (fetchedApartment === undefined || loading) {
        return <div style={{display: 'flex', justifyContent: 'center', margin: '150px 0 100px 0'}}>
            <CircularProgress color="success"/>
        </div>
    }

    apartment = fetchedApartment;

    const images = insertImages(apartment);
    const text = apartment.description;

    return (
        <>
            <OfferDetailsContainer id='wrapper'>
                <OfferDetailsContent>
                    <OfferDetailsBackBtn onClick={() => window.history.back()}>
                        <OfferDetailsTextHeader><ArrowLeft/> Powrót</OfferDetailsTextHeader>
                    </OfferDetailsBackBtn>
                    {matches && <ImageGallery items={images}
                                              lazyload={true}
                                              showPlayButton={false}
                                              autoPlay={true}
                                              thumbnailPosition={'right'}/>}
                    {!matches && <ImageGallery items={images}
                                               lazyload={true}
                                               showPlayButton={false}
                                               autoPlay={true}
                                               thumbnailPosition={'bottom'}/>}
                    <OfferDetailsDate>Dodane {apartment.createdDate}</OfferDetailsDate>
                    <OfferDetailsPrice>{apartment.price} €</OfferDetailsPrice>
                    <OfferDetailsTextHeader>{apartment.name}</OfferDetailsTextHeader>
                    <OfferDetailsLocationWrapper>
                        <i className="fa fa-map-marker"/>
                        <span>&nbsp;{apartment.location}</span>
                    </OfferDetailsLocationWrapper>
                    <OfferDetailsTagWrapper>
                        <OfferDetailsTag>{apartment.measurement} M<sup>2</sup></OfferDetailsTag>
                        <OfferDetailsTag><p>{apartment.numberOfRooms} pokoje</p></OfferDetailsTag>
                    </OfferDetailsTagWrapper>
                    <br/>
                    <OfferDetailsTextHeader>Opis</OfferDetailsTextHeader>
                    <hr/>
                    {
                        text.length <= 250 ?
                            <h6>
                                {text}
                            </h6> :
                            <h6>
                                {showMore ? text : `${text.substring(0, 400)} ...`}
                                <br/>
                                <br/>
                                <OfferDetailsShowMoreButton onClick={() => {
                                    setShowMore(!showMore);
                                }}>
                                    {showMore ? 'Skróć opis' : 'Zobacz więcej'}
                                </OfferDetailsShowMoreButton>
                            </h6>
                    }
                    <br/>
                    <OfferDetailsTextHeader>Lokalizacja</OfferDetailsTextHeader>
                    <hr/>
                    <iframe src={apartment.locationSrc}
                            width="100%"
                            height="500px"
                            frameBorder="0"
                            style={{border: '0'}} allowFullScreen/>
                </OfferDetailsContent>
                <aside className="form-contact">
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <h2>Skontaktuj się</h2>
                        <hr/>
                        <input hidden={true} name='apartmentId'
                               defaultValue={apartment.id} {...register('apartmentId', {
                            required: true
                        })}/>
                        <input hidden={true} name='subject'
                               defaultValue={'WYBRANE OGŁOSZENIE'} {...register('subject', {
                            required: true
                        })}/>
                        <input type='text' name='name'
                               {...register('name', {
                                   required: {
                                       value: true,
                                       message: 'Proszę wprowadzić swoję imię'
                                   },
                                   maxLength: {
                                       value: 30,
                                       message: 'Maksymalny rozmiar pola wynosi 30 znaków'
                                   }
                               })} className='field' placeholder='Imię'
                        />
                        {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                        <input type='tel' name='phoneNumber'
                               {...register('phoneNumber', {
                                   required: true,
                                   pattern: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
                               })} className='field' placeholder='Numer telefonu'
                        />
                        {errors.phoneNumber && (
                            <span
                                className='errorMessage'>Proszę wprowadzić poprawny numer telefonu</span>
                        )}
                        <textarea rows={3} name='message'
                                  {...register('message', {
                                      required: true
                                  })} className='field' placeholder='Wiadomość'
                                  defaultValue='Dzień dobry, zainteresowała mnie ta oferta.'/>
                        {errors.message && <span className='errorMessage'>Proszę wprowadzić wiadomość</span>}
                        <button className='btn' disabled={disabled} type='submit'>
                            Wyślij wiadomość
                        </button>
                        <ToastContainer/>
                    </form>
                </aside>
            </OfferDetailsContainer>
        </>
    );
}

function insertImages(apartment) {
    if (apartment === undefined) {
        return;
    }
    let images = [{
        original: apartment.mainImage,
        thumbnail: apartment.mainImage
    }];
    let tempImages = new Set([]);
    for (let i = 0; i < apartment.images.length; i++) {
        if (!tempImages.has(apartment.images[i])) {
            tempImages.add(apartment.images[i]);
            images.push({
                original: apartment.images[i],
                thumbnail: apartment.images[i]
            });
        }
    }
    return images;
}

export default OfferDetails;
