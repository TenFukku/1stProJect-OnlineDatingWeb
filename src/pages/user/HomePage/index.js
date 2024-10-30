import { memo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
    return (
        <section className="main-sec">
            <div className="middle-article">
                <div className="left-text">
                    <div className="h1">
                        <p className="brown-h1">GẶP GỠ</p>
                        <p className="brown-h1">LÀM QUEN</p>
                        <p className="brown-h1">TRÒ CHUYỆN</p>
                        <p className="pink-h1">THÀNH ĐÔI</p>
                    </div>
                    <div className="subtitle">
                        <p>Love&Link - Kết nối tình yêu, bất kể bạn là ai.</p>
                        <p>Ai cũng xứng đáng có một người để yêu thương và sẻ chia.</p>
                        <p>Đừng ngần ngại, hãy tìm kiếm nửa kia của bạn ngay hôm nay!</p>
                    </div>
                    <button className="next-button">
                        <span className="white-Roboto">Tìm kiếm ngay</span>
                        <FontAwesomeIcon icon={faRightLong} />
                    </button>
                </div>
                <img className="HomePage-img" src={`${process.env.PUBLIC_URL}/images/HomePage/ck 3.png`}/>
            </div>
        </section>
    )
}

export default memo(HomePage);