import {useState} from 'react';
import {useForm} from 'react-hook-form';
import './index.css';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm();
    const [disabled, setDisabled] = useState(false);

    const onSubmit = async (data) => {
        const {name, phoneNumber, subject, message} = data;
        try {
            setDisabled(true);
            const templateParams = {
                name,
                phoneNumber,
                subject,
                message
            };
            // TODO SEND EMAIL
            reset();
            // TODO Display success toast
            setDisabled(false);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <div className='ContactForm'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <div className='contactForm'>
                                <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                                    <div className='row formRow'>
                                        <div className='col-6'>
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
                                                   })} className='form-control formInput' placeholder='Imię'
                                            />
                                            {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                                        </div>
                                        <div className='col-6'>
                                            <input type='tel' name='phoneNumber'
                                                   {...register('phoneNumber', {
                                                       required: true,
                                                       pattern: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
                                                   })} className='form-control formInput' placeholder='Numer telefonu'
                                            />
                                            {errors.phoneNumber && (
                                                <span className='errorMessage'>Proszę wprowadzić poprawny numer telefonu</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className='row formRow'>
                                        <div className='col'>
                                            <input type='text' name='subject'
                                                   {...register('subject', {
                                                       required: {
                                                           value: true,
                                                           message: 'Proszę wprowadzić temat wiadomości'
                                                       },
                                                       maxLength: {
                                                           value: 75,
                                                           message: 'Maksymalny rozmiar pola wynosi 75 znaków'
                                                       }
                                                   })} className='form-control formInput' placeholder='Temat'
                                            />
                                            {errors.subject && (
                                                <span className='errorMessage'>{errors.subject.message}</span>)}
                                        </div>
                                    </div>
                                    <div className='row formRow'>
                                        <div className='col'>
                                        <textarea rows={3} name='message'
                                                  {...register('message', {
                                                      required: true
                                                  })} className='form-control formInput' placeholder='Wiadomość'/>
                                            {errors.message && <span className='errorMessage'>Proszę wprowadzić wiadomość</span>}
                                        </div>
                                    </div>

                                    <button className='submit-btn' disabled={disabled} type='submit'>
                                        Wyślij wiadomość
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactForm;
