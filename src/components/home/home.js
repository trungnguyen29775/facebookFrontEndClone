import './home.css'
import React from 'react'
import { BsSearch,BsMessenger,BsCameraVideoFill,BsPencilSquare } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { AiOutlineDown } from "react-icons/ai";
import { FiX } from "react-icons/fi";
import { IoIosMore } from "react-icons/io";
import { BiExpand } from "react-icons/bi";
import { useEffect } from 'react';
class  Home extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            messType:"personal"
        }
        this.handleHideNotifiDropTab = this.handleHideNotifiDropTab.bind(this)
        this.activeNotifiDropTab = this.activeNotifiDropTab.bind(this)
        this.handleHideMessDropTab = this.handleHideMessDropTab.bind(this)
        this.activeMessDropTab = this.activeMessDropTab.bind(this)
        this.hideInputTab = this.hideInputTab.bind(this)
        this.handleClickInput = this.handleClickInput.bind(this)
    }
    componentDidMount()
    {
        
       
        if(!this.props.isLogged)
            <this.props.navigation replace to="/"/>
    }
    activeNotifiDropTab(event)
    {
        event.preventDefault()
        event.stopPropagation()
        const notifiIcon  = document.querySelector('.nav-icon--padding.notification')
        const notifiDropTab = document.querySelector('.notifi-droptab-container')
        if(notifiDropTab.classList[1] =="active")
        {
            notifiDropTab.classList.remove('active')
            notifiIcon.classList.remove('active')
        }
        else 
        {
            notifiDropTab.classList.add('active')
            notifiIcon.classList.add('active')
        }
    }
    handleHideNotifiDropTab(event)
    {
        event.preventDefault()
        event.stopPropagation()
        document.addEventListener('click',(event)=>
        {
            event.preventDefault()
            const notifiIcon  = document.querySelector('.nav-icon--padding.notification')

            const notifiDropTab = document.querySelector('.notifi-droptab-container')
            notifiDropTab.classList.remove('active')
            notifiIcon.classList.remove('active')

        })
    }
    handleHideMessDropTab(event)
    {
        event.preventDefault()
        event.stopPropagation()
        document.addEventListener('click',(event)=>
        {
            event.preventDefault()
            const messIcon  = document.querySelector('.nav-icon--padding.mess')

            const messDropTab = document.querySelector('.mess-droptab-container')
            messDropTab.classList.remove('active')
            messIcon.classList.remove('active')

        })
    }

    handleClickInput(event)
    {
        event.stopPropagation()
        const droptab = document.querySelector('.nav-search-tab-container')
        droptab.classList.add('active')
        

    }
    hideInputTab(event)
    {
        event.stopPropagation()
        event.preventDefault()
        const droptab = document.querySelector('.nav-search-tab-container')
            document.addEventListener("click", function(event) {
                event.stopPropagation()
                event.preventDefault()
                droptab.classList.remove('active')
              });
    }
    activeMessDropTab(event)
    {
        event.preventDefault()
        event.stopPropagation()
        const messIcon  = document.querySelector('.nav-icon--padding.mess')
        const messDropTab = document.querySelector('.mess-droptab-container')
        if(messDropTab.classList[1] =="active")
        {
            messDropTab.classList.remove('active')
            messIcon.classList.remove('active')
        }
        else 
        {
            messDropTab.classList.add('active')
            messIcon.classList.add('active')
        }
    }
    render()
    {
        
        return(
            <div className='home-container'>
                <nav className='nav'>
                    <a className='nav-logo__a' href='/home'>facebook</a>
                    <div className='nav-search-container'>
                        <BsSearch/>
                        <input type='search' onMouseLeave={this.hideInputTab} onClick={this.handleClickInput} className='home-search__input' placeholder='Tìm kiếm trên Facebook'/>

                        {/* Search  tab */}
                        <div className='nav-search-tab-container'>
                            <div className='search-title-container'>
                                <span className='search-title__span'>Gần đây</span>
                                <a href='#' className='search-title__a'>Chỉnh sửa</a>
                            </div>
                            <div className='search-target-container'>
                                <img src='assets/image/avt-user-login.jpg' className='home-avt__img smaller'/>
                                <div className='search-target-detail'>
                                    <span >Nguyễn Trần Minh Trung</span>
                                    <span className='search-target-role'>Bạn bè</span>
                                </div>
                                <FiX  style={{fontSize:"15px",color:"rgb(176, 179, 184)"}}/>
                            </div>
                        </div>
                    </div>
                    <div className='home-icon-container'>
                    <div className='nav-img-icon-container'>
                            <img className='home-avt__img' src='assets/image/avt-user-login.jpg' alt="avatar user"/>
                            <AiOutlineDown style={{position:"absolute",height:"12px",width:"12px",borderRadius:"6px",backgroundColor:"#3A3B3C",bottom:0,right:0,padding:"auto"}}/>
                        </div>
                       
                        <div  className='nav-icon--padding notification' onClick={this.activeNotifiDropTab} onMouseLeave={this.handleHideNotifiDropTab}>
                        <IoNotifications style={{margin:"auto"}}/>
                        <div className='notifi-droptab-container'>
                            <div className='home-notifi-header-container'>
                            <h1>Thông báo</h1>
                            <div className='notifi-icon-mode-container'>
                                <div className='notifi-icon-mode'>
                                    <IoIosMore style={{margin:"auto"}}/>
                                </div>
                            </div>
                            </div>
                           
                        <div className='notifi-type-container'>
                            <button className='notifi-type active'>Tất cả</button>
                            <button className='notifi-type'>Chưa đọc</button>

                        </div>
                        <div className='notifi-container'>
                            <div className='notifi-zone-container'>
                                    <div className='zone-header-container'>
                                    <span>Lời mời kết bạn</span>
                                    <a className='drop-tab-see-all' href='#'>Xem tất cả</a>
                                    </div>
                                    
                                    <div className='zone-item-container'>
                                    <img className='notifi-avt-user' src='assets/image/avt-user-login.jpg' alt='avt-user'/>
                                    <div className='notifi-item-detail'>
                                    <span className='notifi-item-content'><strong className='notifi-name-taget'>
                                    Minh Trung
                                        </strong> đã gửi cho bạn lời mời kết bạn</span>
                                    <span className='notifi-item-time'>18 phút</span>
                                    <div className='zone-button-container'>
                                        <button className='active'>Xác nhận</button>
                                        <button>Xóa</button>
                                    </div>
                                    </div>
                                    </div>
                                
                                <div>
                                </div>
                            </div>
                            <div className='notifi-zone-container'>
                                    <div className='zone-header-container'>
                                    <span>Trước đó</span>
                                    <a className='drop-tab-see-all' href='#'>Xem tất cả</a>
                                    </div>
                                    
                                    <div className='zone-item-container'>
                                    <img className='notifi-avt-user' src='assets/image/avt-user-login.jpg' alt='avt-user'/>
                                    <div className='notifi-item-detail'>
                                    <span className='notifi-item-content'><strong className='notifi-name-taget'>
                                    Minh Trung
                                        </strong> đã nhắc đến bạn ở một bình luận trong <strong className='notifi-name-target'>Tôi yêu coding</strong></span>
                                    <span className='notifi-item-time'>18 phút</span>
                                    
                                    </div>
                                    </div>
                                    <div className='zone-item-container'>
                                    <img className='notifi-avt-user' src='assets/image/avt-user-login.jpg' alt='avt-user'/>
                                    <div className='notifi-item-detail'>
                                    <span className='notifi-item-content'><strong className='notifi-name-taget'>
                                    Minh Trung
                                        </strong> đã nhắc đến bạn ở một bình luận trong <strong className='notifi-name-target'>Tôi yêu coding</strong></span>
                                    <span className='notifi-item-time'>18 phút</span>
                                    
                                    </div>
                                    </div>
                                    <div className='zone-item-container'>
                                    <img className='notifi-avt-user' src='assets/image/avt-user-login.jpg' alt='avt-user'/>
                                    <div className='notifi-item-detail'>
                                    <span className='notifi-item-content'><strong className='notifi-name-taget'>
                                    Minh Trung
                                        </strong> đã nhắc đến bạn ở một bình luận trong <strong className='notifi-name-target'>Tôi yêu coding</strong></span>
                                    <span className='notifi-item-time'>18 phút</span>
                                    
                                    </div>
                                    </div>
                                    <div className='zone-item-container'>
                                    <img className='notifi-avt-user' src='assets/image/avt-user-login.jpg' alt='avt-user'/>
                                    <div className='notifi-item-detail'>
                                    <span className='notifi-item-content'><strong className='notifi-name-taget'>
                                    Minh Trung
                                        </strong> đã nhắc đến bạn ở một bình luận trong <strong className='notifi-name-target'>Tôi yêu coding</strong></span>
                                    <span className='notifi-item-time'>18 phút</span>
                                    
                                    </div>
                                    </div>
                                    <div className='zone-item-container'>
                                    <img className='notifi-avt-user' src='assets/image/avt-user-login.jpg' alt='avt-user'/>
                                    <div className='notifi-item-detail'>
                                    <span className='notifi-item-content'><strong className='notifi-name-taget'>
                                    Minh Trung
                                        </strong> đã nhắc đến bạn ở một bình luận trong <strong className='notifi-name-target'>Tôi yêu coding</strong></span>
                                    <span className='notifi-item-time'>18 phút</span>
                                    
                                    </div>
                                    </div>
                                    <div className='zone-item-container'>
                                    <img className='notifi-avt-user' src='assets/image/avt-user-login.jpg' alt='avt-user'/>
                                    <div className='notifi-item-detail'>
                                    <span className='notifi-item-content'><strong className='notifi-name-taget'>
                                    Minh Trung
                                        </strong> đã nhắc đến bạn ở một bình luận trong <strong className='notifi-name-target'>Tôi yêu coding</strong></span>
                                    <span className='notifi-item-time'>18 phút</span>
                                    
                                    </div>
                                    </div>
                                    <div className='zone-item-container'>
                                    <img className='notifi-avt-user' src='assets/image/avt-user-login.jpg' alt='avt-user'/>
                                    <div className='notifi-item-detail'>
                                    <span className='notifi-item-content'><strong className='notifi-name-taget'>
                                    Minh Trung
                                        </strong> đã nhắc đến bạn ở một bình luận trong <strong className='notifi-name-target'>Tôi yêu coding</strong></span>
                                    <span className='notifi-item-time'>18 phút</span>
                                    
                                    </div>
                                    </div>
                                
                                <div>
                                </div>
                            </div>
                            
                            
                        </div>
                        </div>
                        </div>
                        <div className='nav-icon--padding mess' onClick={this.activeMessDropTab} onMouseLeave={this.handleHideMessDropTab}>
                        <BsMessenger style={{margin:"auto"}} />
                        <div className='mess-droptab-container'>
                            <div className='home-mess-header-container'>
                            <h1>Chat</h1>
                            <div className='mess-icon-mode-container'>
                                <div className='mess-icon-mode'>
                                    <IoIosMore style={{margin:"auto"}}/>
                                </div>
                                <div  className='mess-icon-mode'>
                                    <BiExpand style={{margin:"auto"}}/>
                                </div>
                                <div className='mess-icon-mode'>
                                    <BsCameraVideoFill style={{margin:"auto"}}/>
                                </div>
                                <div className='mess-icon-mode'>
                                    <BsPencilSquare style={{margin:"auto"}}/>
                                </div>
                            </div>
                            </div>
                           
                            <div className='mess-search-container'>
                        <BsSearch/>
                        <input type='search' className='mess-search__input' placeholder='Tìm kiếm trên Messenger'/>
                        </div>
                        <div className='mess-type-container'>
                            <button className='mess-type active'>Hộp thư</button>
                            <button className='mess-type'>Cộng đồng</button>

                        </div>
                        <div className='mess-container'>
                            <div className='mess-item-container'>
                                <img className='mess-avt-user' src='assets/image/avt-user-login.jpg' alt='avt-user'/>
                                <div className='mess-item-detail'>
                                    <span className='mess-item-name'>LT - Sao chổi Tournament</span>
                                    <span className='mess-item-message'>Bạn: Chay tron sao choi . <span className='mess-item-time'>18 phút</span></span>
                                </div>
                                <img className='mess-avt-user smaller' src='assets/image/avt-user-login.jpg' alt='avt-user'/>
                                <div className='mess-item-more'>
                                    <IoIosMore style={{margin:"auto"}}/>
                                </div>
                            </div>
                            
                            
                        </div>
                        <div className='mess-footer'>
                            <a href='#'>Xem tất cả trong Messenger</a>
                        </div>
                        </div>

                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Home