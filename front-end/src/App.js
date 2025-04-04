import React from "react";
import VerificationPage from "./pages/verificationPage/verificationPage";  // وارد کردن کامپوننت صفحه تأیید شماره تلفن
import { Route, Routes, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserSignUpPage from "./pages/UserSignUp/UserSignUp.jsx";
import PasswordRecovery from "./pages/PasswordRecovery/PasswordRecovery";
import LoginPage from "./pages/LoginPage/LoginPage.jsx"
import TourLeaderSignUp from "./pages/TourLeaderSignUp/TourleaderSignUp.jsx";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route exact path="/" element={ <LoginPage/> }></Route> */}
      <Route exact path="/" element={ <UserSignUpPage/> }></Route>
      {/* <Route exact path="/" element={ <PasswordRecovery/> }></Route> */}
      {/* <Route exact path="/" element={ <VerificationPage /> }/> */}
      {/* <Route exact path="/" element={ <TourLeaderSignUp/> }></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
