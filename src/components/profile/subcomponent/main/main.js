import './main.css';
import { FaGraduationCap } from 'react-icons/fa';
import { AiFillHome, AiOutlineInstagram, AiFillGithub } from 'react-icons/ai';
import { TiLocation } from 'react-icons/ti';
import { BiTimeFive } from 'react-icons/bi';
function Main() {
    return (
        <div className="main-wraper">
            <div className="profile-main-infomation-container">
                <div className="infomation-container">
                    <span className="infomation-header-title">Giới thiệu</span>
                    <span className="infomation-bio">nvdhangg</span>
                    <button className="edit-bio__button">Chỉnh sửa tiểu sử</button>
                    <div className="infomation-item">
                        <FaGraduationCap style={{ fontSize: '22px', color: '#8c939d' }} />
                        <span>Học Công Nghệ Thông Tin tại Trường Đại Học Quốc Tế - Đại học Quốc gia TP. HCM</span>
                    </div>
                    <div className="infomation-item">
                        <FaGraduationCap style={{ fontSize: '22px', color: '#8c939d' }} />
                        <span>Đã học tại THPT chuyên Hùng Vương, Thủ Dầu Một, Bình Dương</span>
                    </div>
                    <div className="infomation-item">
                        <AiFillHome style={{ fontSize: '22px', color: '#8c939d' }} />
                        <span>Sống tại Dĩ An</span>
                    </div>
                    <div className="infomation-item">
                        <TiLocation style={{ fontSize: '22px', color: '#8c939d' }} />
                        <span>Đến từ Ninh Bình</span>
                    </div>
                    <div className="infomation-item">
                        <BiTimeFive style={{ fontSize: '22px', color: '#8c939d' }} />

                        <span>Tham gia vào Tháng 10 năm 2015</span>
                    </div>
                    <div className="infomation-item">
                        <AiOutlineInstagram style={{ fontSize: '22px', color: '#8c939d' }} />
                        <a href="https://www.instagram.com/trungnghiemtuc/">trungnghiemtuc</a>
                    </div>
                    <div className="infomation-item">
                        <AiFillGithub style={{ fontSize: '22px', color: '#8c939d' }} />
                        <a href="https://github.com/trungnguyen29775">trungnguyen29775</a>
                    </div>
                    <button className="profile-edit-detail__button">Chỉnh sửa chi tiết</button>
                    <button className="profile-edit-detail__button">Thêm sở thích</button>
                    <div className="profile-feature-container">
                        <div className="profile-feature-item">
                            <div className="profile-feature">
                                <img
                                    src="/assets/image/avt-user-login.jpg"
                                    className="profile-feature__img"
                                    alt="profile feature"
                                />
                                <span className="profile-feature-num">+11</span>
                            </div>
                            <span>Age: 20</span>
                        </div>

                        <div className="profile-feature-item">
                            <div className="profile-feature">
                                <img
                                    src="/assets/image/avt-user-login.jpg"
                                    className="profile-feature__img"
                                    alt="profile feature"
                                />
                                <span className="profile-feature-num">+11</span>
                            </div>
                            <span>Age: 20</span>
                        </div>

                        <div className="profile-feature-item">
                            <div className="profile-feature">
                                <img
                                    src="/assets/image/avt-user-login.jpg"
                                    className="profile-feature__img"
                                    alt="profile feature"
                                />
                                <span className="profile-feature-num">+11</span>
                            </div>
                            <span>Age: 20</span>
                        </div>
                    </div>
                    <button className="profile-edit-detail__button">Chỉnh sửa đáng chú ý</button>
                </div>

                {/* Profile detail image */}

                <div className="profile-photos-container">
                    <div className="profile-photos-title-container">
                        <span className="photo-title">Hình ảnh</span>
                        <span>Xem tất cả</span>
                    </div>
                    <div className="profile-photos-preview-container">
                        <img src="/assets/image/avt-user-login.jpg" className="profile-photos__img" />
                        <img src="/assets/image/avt-user-login.jpg" className="profile-photos__img" />
                        <img src="/assets/image/avt-user-login.jpg" className="profile-photos__img" />
                        <img src="/assets/image/avt-user-login.jpg" className="profile-photos__img" />
                        <img src="/assets/image/avt-user-login.jpg" className="profile-photos__img" />
                        <img src="/assets/image/avt-user-login.jpg" className="profile-photos__img" />
                        <img src="/assets/image/avt-user-login.jpg" className="profile-photos__img" />
                        <img src="/assets/image/avt-user-login.jpg" className="profile-photos__img" />
                        <img src="/assets/image/avt-user-login.jpg" className="profile-photos__img" />
                    </div>
                </div>

                {/* Profile friend */}
                <div>
                    <div>
                        <span>Bạn bè</span>
                        <span>Xem tất cả</span>
                    </div>
                    <span>180 bạn bè</span>
                    <div>
                        <div>
                            <img src="/assets/image/avt-user-login.jpg" className="profile-photos__img" />
                            <span>Hằng Đoan</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="profile-main-post-container"></div>
        </div>
    );
}
export default Main;
