import { memo } from "react";

const Header = () => {
    return(
        <header className="nav-bar">
            isLoggedIn ? (
            <div className="nav-1">
                <img  className="logo-img" src={`${process.env.PUBLIC_URL}/images/header/Love&Link.png`} alt="Love&Link" />
            </div>
            <div className="nav-2">
                <div className="nav-list">
                    <ul>
                        <li>TRANG CHỦ</li>
                        <li>GIỚI THIỆU</li>
                        <li>DIỄN ĐÀN</li>
                        <li>HẸN HÒ</li>
                        <li>CẨM NANG</li>
                    </ul>
                </div>
                <div className="nav-search">
                    <input alt="Tìm kiếm" placeholder="Tìm kiếm" />
                </div>
            </div>
            <div className="nav-3">
                <img className="avatar-img" src={`${process.env.PUBLIC_URL}/images/header/avatar.jpg`}/>
            </div>
            ) : (
                <div className="nav-1">
                    <img  className="logo-img" src={`${process.env.PUBLIC_URL}/images/header/Love&Link.png`} alt="Love&Link" />
                </div>
            );
        </header>
    )
}

export default memo(Header);