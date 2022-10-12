import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import axios from 'axios';

const ApartmentForm = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm();
    const [disabled, setDisabled] = useState(false);

    const onSubmit = async (data) => {
        const {name, description, location, locationSrc, measurement, numberOfRooms, price, mainImage} = data;
        try {
            setDisabled(true);
            let images = [mainImage];
            const apartment = {
                name,
                description,
                location,
                locationSrc,
                measurement,
                numberOfRooms,
                price,
                mainImage,
                images
            };
            axios.post('http://localhost:8080/api/apartments', apartment)
                .then(res => {
                    console.log('res: ' + res);
                    reset();
                    setDisabled(false);
                })
        } catch (e) {
            console.log(e);
            setDisabled(false);
        }
    };

    return (
        <>
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <div>
                                <form id='apartment-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                                    <div className='col-12'>
                                        <input type='text' name='name'
                                               {...register('name', {
                                                   required: {
                                                       value: true,
                                                       message: 'Proszę wprowadzić nazwę apartamentu'
                                                   },
                                                   maxLength: {
                                                       value: 60,
                                                       message: 'Maksymalny rozmiar pola wynosi 60 znaków'
                                                   }
                                               })} className='form-control formInput' placeholder='Nazwa'
                                        />
                                        {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                                    </div>
                                    <br/>
                                    <div className='col-12'>
                                        <div className='col'>
                                        <textarea rows={10} name='description'
                                                  {...register('description', {
                                                      required: true
                                                  })} className='form-control formInput' placeholder='Opis'/>
                                            {errors.message &&
                                                <span className='errorMessage'>Proszę wprowadzić opis</span>}
                                        </div>
                                    </div>
                                    <br/>
                                    <div className='col-12'>
                                        <input type='text' name='location'
                                               {...register('location', {
                                                   required: {
                                                       value: true,
                                                       message: 'Proszę wprowadzić lokalizację (miejscowość etc.)'
                                                   },
                                                   maxLength: {
                                                       value: 60,
                                                       message: 'Maksymalny rozmiar pola wynosi 60 znaków'
                                                   }
                                               })} className='form-control formInput' placeholder='Lokalizacja'
                                        />
                                        {errors.location &&
                                            <span className='errorMessage'>{errors.location.message}</span>}
                                    </div>
                                    <br/>
                                    <div className='col-12'>
                                        <input type='text' name='locationSrc'
                                               {...register('locationSrc', {
                                                   required: {
                                                       value: true,
                                                       message: 'Proszę wprowadzić link do google maps'
                                                   }
                                               })} className='form-control formInput' placeholder='Link do google maps'
                                        />
                                        {errors.locationSrc &&
                                            <span className='errorMessage'>{errors.locationSrc.message}</span>}
                                    </div>
                                    <br/>
                                    <div className='row '>
                                        <div className='col-6'>
                                            <input type='number' name='measurement' max='999' min='0'
                                                   {...register('measurement', {
                                                       required: {
                                                           value: true,
                                                           message: 'Proszę wprowadzić metraż'
                                                       }, max: {
                                                           value: 999,
                                                           message: 'Maksymalna wartość to 999'
                                                       }, min: {
                                                           value: 1,
                                                           message: 'Minimalna wartość to 1'
                                                       }
                                                   })} className='form-control formInput' placeholder='Metraż'
                                            />
                                            {errors.measurement &&
                                                <span className='errorMessage'>{errors.measurement.message}</span>}
                                        </div>
                                        <div className='col-6'>
                                            <input type='number' name='numberOfRooms' max='999' min='0'
                                                   {...register('numberOfRooms', {
                                                       required: {
                                                           value: true,
                                                           message: 'Proszę wprowadzić liczbę pokoi'
                                                       }, max: {
                                                           value: 999,
                                                           message: 'Maksymalna wartość to 999'
                                                       }, min: {
                                                           value: 1,
                                                           message: 'Minimalna wartość to 1'
                                                       }
                                                   })} className='form-control formInput' placeholder='Liczba pokoi'
                                            />
                                            {errors.numberOfRooms &&
                                                <span className='errorMessage'>{errors.numberOfRooms.message}</span>}
                                        </div>
                                    </div>
                                    <br/>
                                    <div className='col-12'>
                                        <input type='text' name='price'
                                               {...register('price', {
                                                   required: {
                                                       value: true,
                                                       message: 'Proszę wprowadzić cenę'
                                                   }
                                               })} className='form-control formInput' placeholder='Cena'
                                        />
                                        {errors.price && <span className='errorMessage'>{errors.price.message}</span>}
                                    </div>
                                    <br/>
                                    <div className='col-12'>
                                        <input type='text' name='mainImage'
                                               {...register('mainImage', {
                                                   required: {
                                                       value: true,
                                                       message: 'Proszę wprowadzić nazwę głównego zdjęcia'
                                                   }
                                               })} className='form-control formInput'
                                               placeholder='Nazwa głównego zdjęcia'
                                        />
                                        {errors.mainImage &&
                                            <span className='errorMessage'>{errors.mainImage.message}</span>}
                                    </div>
                                    <br/>
                                    <button className='submit-btn' disabled={disabled} type='submit'>
                                        Dodaj apartament
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ApartmentForm;
