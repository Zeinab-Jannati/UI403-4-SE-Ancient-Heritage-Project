import styles from './user-sign-up-right-panel.module.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import FormButton from '../FormButton/FormButton';
import globalStyles from '../../styles/base.module.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  


const UserSignUpRightPanel = () => {
const [username, setUsername] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [errorMessage, setErrorMessage] = useState('');
const navigate = useNavigate();


const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
        username,
        phone_number: phoneNumber,
        email,
        password
    };

    try {
        const response = await fetch('http://localhost:8000/api/userregister/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            const errorMessages = Object.values(errorData).flat();
            setErrorMessage(errorMessages.join(' '));
            return;
        }

        const data = await response.json();
        alert('کد تأیید برای شما ارسال شد. لطفاً آن را وارد کنید.');
        console.log(data); 
        navigate('/verify-otp');

    } catch (error) {
        setErrorMessage('خطایی رخ داده است. لطفاً دوباره تلاش کنید.');
    }
};




return (
    <div className={styles.userSignUpRightPanel}>
        <h1 className={styles.userFormTitle}>ثبت‌نام کاربر</h1>
        <Form onSubmit={handleSubmit}>
            <FloatingLabel controlId="floatingUsername" label="نام کاربری" className={`${styles.userFloatingLabel} mb-3`}>
                <Form.Control
                    type="text"
                    placeholder="نام کاربری"
                    size="lg"
                    className={styles.formControl}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPhoneNumber" label="شماره موبایل" className={`${styles.userFloatingLabel} mb-3`}>
                <Form.Control
                    type="tel"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    placeholder="شماره موبایل"
                    className={styles.formControl}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </FloatingLabel>

            <FloatingLabel controlId="floatingEmail" label="ایمیل" className={`${styles.userFloatingLabel} mb-3`}>
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    className={styles.formControl}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="رمز عبور" className={`${styles.userFloatingLabel} mb-3`}>
                <Form.Control
                    type="password"
                    placeholder="رمز عبور"
                    className={styles.formControl}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Text className="text-muted">
                    رمز عبور باید شامل 8 کارکتر و شامل حروف، اعداد و نماها باشد.
                </Form.Text>
            </FloatingLabel>

            {errorMessage && <p className="text-danger">{errorMessage}</p>}


            <button></button>
        </Form>
    
            {/* <script>{
                document.getElementById("phone").addEventListener("input", function (event) {
                    this.value = this.value.replace(/\D/g, "")
                });}
            </script> */}
        </div>
    );
}
 
export default UserSignUpRightPanel;