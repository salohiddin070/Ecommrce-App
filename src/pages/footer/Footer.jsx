import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <img className='qwerty' src="https://static.vecteezy.com/system/resources/previews/016/471/452/non_2x/abstract-modern-ecommerce-logo-ecommerce-logo-design-shop-logo-design-template-creative-ecommerce-logo-vector.jpg" alt="" />
                        <a id='aaa' className="navbar-brand" href="#">
                            Ecommers App
                        </a>
                    </div>
                    <div className="col-2">
                        <b>Store's</b> <hr />
                        <p id='ppp'>Uzum</p> 
                        <p id='ppp'>Alibaba</p>
                        <p id='ppp'>Radi</p>
                    </div>
                    <div className="col-2">
                        <b>Shop Matcha</b> <hr />
                        <p id='ppp'>Just the Matcha</p>
                        <p id='ppp'>Teawere</p>
                        <p id='ppp'>The Trial Kit</p>
                    </div>
                    <div className="col-2">
                        <b>Us</b> <hr />
                        <p id='ppp'>About Us</p> 
                        <p id='ppp'>Contact Us</p> 
                        <p id='ppp'>Services Us</p>
                    </div>
                    <div className="col-3">
                        <b>Follow</b> <hr />
                        <a href="https://t.me/salokh_070" target='blank'>
                        <i class="fa-brands fa-telegram"></i>
                        </a>
                        <a href="https://www.instagram.com/salokh_070?igsh=MWNjNTUxZTNnYg==" target='blank'>
                        <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://www.tiktok.com/@salokhiddin_2008?_r=1&_d=e6214g23bl42gh&sec_uid=MS4wLjABAAAA7H6R7VgCrOMIx3Dw3fBcI76PwfSamt-x3hlljORAj6Y2YThuILrOQKrtnWRzjzDF&share_author_id=6817340206346732550&sharer_language=ru&source=h5_m&u_code=dc1mfa46bk910c&timestamp=1709579457&user_id=6817340206346732550&sec_user_id=MS4wLjABAAAA7H6R7VgCrOMIx3Dw3fBcI76PwfSamt-x3hlljORAj6Y2YThuILrOQKrtnWRzjzDF&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7341962607593359105&share_link_id=a8084579-42dc-4811-bcae-d5e5a3c24d9a&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb0229&social_share_type=5&enable_checksum=1" target='blank'>
                        <i class="fa-brands fa-tiktok"></i>
                        </a>
                    </div>
                </div> <hr />

                <div className="row pb-3">
               <b> © salokh.WWW in_UZBEKISTAN</b> 
                </div>
            </div>
        </footer>
    )
}

export default Footer








