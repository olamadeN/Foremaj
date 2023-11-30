import "./footer.css"
import flogo from "../../images/footer/flogo.png";
import phone from "../../images/footer/phone.png";
import mail from "../../images/footer/mail.png";
import gram from "../../images/footer/gram.png";
import twitter from "../../images/footer/twitter.png";
import fb from "../../images/footer/fb.png";

const Footer = () => {
    return ( 
        <>
            <section className="footer">
                <div className="section2">
                    <div className="container">
                        <div className="footGrid">
                            <div className="part1">
                                <img src={flogo} alt="" className="footLogo" />
                                <p className="p1Txt">
                                    We are your trusted partner in exporting high-quality Nigerian food products. We specialize in sourcing and delivering a wide range of authentic Nigerian delicacies to customers worldwide. With our extensive expertise and commitment to excellence, we ensure that you receive the finest products that Nigeria has to offer.
                                </p>
                            </div>
                            <div className="part2">
                                <div className="footSocials">
                                    <span className="fsSpan">
                                        <img src={phone} alt="" className="phone" />
                                        <p>+234 818 961 8000</p>
                                    </span>
                                    <span className="fsSpan">
                                        <img src={mail} alt="" className="phone" />
                                        <p>foremajforemaj@gmail.com</p>
                                    </span>
                                </div>
                                <div className="subscribe">                                    
                                    <form action="">
                                        <p>Subscribe to get updates</p>
                                        <input type="email" placeholder="Enter email" />
                                        <button id='footSubscribe' className='btnPrimary'>Subscribe</button>
                                    </form>
                                </div>
                            </div>
                            <div className="part3">
                                <div className="mainSocials">
                                    <img src={gram} alt="" className="mainImg" />
                                    <img src={twitter} alt="" className="mainImg" />
                                    <img src={fb} id="fb" alt="" className="mainImg" />
                                </div>

                            </div>
                        </div>
                        <hr />
                        <div className="copy">
                            <p className="copyRight">Copyright (C) 2024. FOREMAJ Nigeria Limited. All Rights Reserved.</p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Footer;