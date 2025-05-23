import React, { useState } from "react";
import styles from '../../../pages/verificationPage/code.module.css';
import CodeInput from "./CodeInput";
import FormButton from "../../FormButton/FormButton";

const RightPanel = () => {
  const [code, setCode] = useState(Array(6).fill(""));

  const handleCodeChange = (index, value) => {
    let newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const isCodeComplete = code.every((digit) => digit !== "");

  const handleSubmit = async () => {
    const phoneNumber = localStorage.getItem("pendingPhoneNumber");
  
    // بررسی وجود شماره تلفن
    if (!phoneNumber) {
      alert("شماره تلفن یافت نشد.");
      console.log("Phone Number not found in localStorage.");
      return;
    }
    console.log("Phone Number:", phoneNumber); // برای بررسی
    
    if (!isCodeComplete) return;
    
    const fullCode = code.join(""); // تبدیل آرایه به رشته مثل "123456"
    console.log("OTP Code:", fullCode); // برای بررسی
  
    try {
      const response = await fetch("http://localhost:8000/api/verify-otp/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone_number: phoneNumber,
          otp_code: fullCode,
        }),
      });
  
      if (!response.ok) {
        const data = await response.json();
        alert(data.detail || "کد اشتباه است");
        return;
      }
  
      // اگر همه‌چیز خوب بود
      alert("ثبت‌نام با موفقیت انجام شد!");
      window.location.href = "/"; // یا مثلاً "/dashboard"
    } catch (error) {
      console.error(error);
      alert("خطایی رخ داده. دوباره تلاش کنید.");
    }
  };
  
  

  return (
    <div className={styles.rightPanel}>
      <h2 className={styles.header}>تأیید شماره تلفن</h2>
      <p className={styles.instruction}>لطفاً کدی که به شماره شما ارسال شده را وارد کنید.</p>
      <CodeInput code={code} onCodeChange={handleCodeChange} />
      {/* <button className={styles.confirmBtn} onClick={handleSubmit} disabled={!isCodeComplete}> */}
      <button
  className={styles.confirmBtn}
  onClick={handleSubmit}
  disabled={!isCodeComplete}
>
  تأیید
</button>

        {/* تأیید
      </button> */}
      <a href="https://www.google.com" className={styles.editNumber}>ویرایش شماره موبایل</a>
      <a href="https://www.google.com" className={styles.resendCode}>ارسال مجدد کد</a>
    </div>
  );
};

export default RightPanel;
