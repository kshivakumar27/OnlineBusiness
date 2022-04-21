import React, {useState, useEffect} from 'react';
import Styles from './cta.module.css'
import {submitEndpoint, emailRegex, serverError, successMsg, validationError, referral_link} from '../Strings';

function Cta() {

    const {REACT_APP_API_KEY} = process.env;
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [style, setStyle] = useState(Styles.emptyMsg);

    const updateMessage = (style, info, clear='') => {
        setStyle(style);
        setMessage(info)
        setEmail(clear);
    }

    useEffect( () =>{
        setInterval(() => {
            if(message !== ''){
                setMessage('');
            }
        }, 3000);
    }, [message])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(emailRegex.test(email)){
            const response = await fetch(submitEndpoint , {
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'api_key': REACT_APP_API_KEY,
                    'email': email,
                    'referral_link': referral_link
                })
            })
            if(response.status === 200){
                updateMessage(Styles.success, successMsg)
            }
            else{
                updateMessage(Styles.error, serverError)
            }
        }
        else{
            updateMessage(Styles.error, validationError)
        }

    }

    return (
        <div className={Styles.formContainer}>
            <h2 className={Styles.head}>
                Whatever your business maybe, we got you covered.
            </h2>            
            <div className={Styles.form}>
                <h2 className={Styles.formHead}>
                    Subscribe to get notified of product launch
                </h2>
                <div className={Styles.formElements}>
                    <input 
                        className={Styles.emailField} 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email}
                        placeholder="Enter your best email"
                        onChange={({target:{value}}) => setEmail(value)}/>
                    <button 
                        onClick = {(e) => handleSubmit(e)}
                        className={Styles.ctaBtn}> 
                            Subscribe Now 
                    </button>
                </div>
                <p className={style}>{message}</p>
            </div>
        </div>
    )
}

export default Cta
