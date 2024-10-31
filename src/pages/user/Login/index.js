import {memo} from "react";

const Login = ({isOpen, onClose}) =>{
    if(!isOpen) return null;

    return(
        <div className="login-form-overlay">
            <div className="login-form">
                <div className="close-button-div"><img src={`${process.env.PUBLIC_URL}/images/Login/Close Window.png`} alt="" /></div>
                <div className="header">ĐĂNG NHẬP</div>
                <div className="sign-in-input">
                    <label for="username">Email</label>
                    <input type="text" placeholder="example@gmail.com" id="username"/>
                    <label for="password">Mật khẩu</label>
                    <input type="password" placeholder="*************" id="password"/>
                    <p>Bạn quên mật khẩu?</p>
                </div>
                <button className="sign-in-button">ĐĂNG NHẬP</button>
                <div className="or-div">Hoặc đăng nhập với</div>
                <div className="another-sign-in-div">
                    <img src={`${process.env.PUBLIC_URL}/images/Login/Facebook F.png`} alt="facebook" />
                    <img src={`${process.env.PUBLIC_URL}/images/Login/google logo.png`} alt="facebook" />
                    <img src={`${process.env.PUBLIC_URL}/images/Login/GitHub.png`} alt="facebook" />
                </div>
            </div>
        </div>
    )
}

export default memo(Login);