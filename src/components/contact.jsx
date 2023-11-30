import "./contact.css";
import c1 from "../images/contact/c1.png";
import c2 from "../images/contact/c2.png";
import c3 from "../images/contact/c3.png";
import Navbar from "./nav/navbar";
import Footer from "./footer/footer";
import { Helmet } from 'react-helmet-async';
const ContactUs = () => {
    return ( 
        <>
            <Helmet>
                <title>Contact us at FOREMAJ Nigeria Limited</title>
                <meta name="description" content="Get in touch with us today!"/>
            </Helmet>
            <Navbar/>
            <div className="prodBanner contBanner">
                <div className="container">
                    <div className="pBannerTxt">
                        <div className="bannerPack">
                           <p className='subHeading' >CONTACT US</p>
                            <h1 id='homeH1'>Get in touch with us today!</h1>
                            <p className="lead" id='homeLead'>We value your interest in FOREMAJ Nigeria Limited and look forward to addressing any inquiries, taking your orders and providing further information about our products and services. Feel free to contact us using the details below, and our dedicated team will be delighted to assist you.</p> 
                        </div> 
                    </div>
                </div>
            </div>
            <section id="C01" data-aos="fade-up">
                <div className="white contWhite">
       
                </div>
                <div className="green">
                    <div className="section2">
                        <div className="container">
                            <div className="prodCards contCards">
                                <div className="prodCard contCard">
                                    <img src={c1} alt="" id="c1" className="contCardImg " />
                                    <p className="cardSubHead">Talk to us</p>
                                    <p className="cardTittle contCardTittle">                                        
                                        <p className="cardTxt body">Interested in placing an order or learning more about our product offering, or looking forward to partnering with us, kindly reach out to us through the contact lines below.</p>
                                        <div className="others">
                                            <p>+234 818 961 8000</p>
                                            <p>+234 803 360 0398</p>
                                        </div>
                                    </p>
                                </div>
                                <div className="prodCard contCard">
                                    <img src={c2} alt="" className="contCardImg " />
                                    <p className="cardSubHead">Send us an email</p>
                                    <p className="cardTittle  contCardTittle">                                        
                                        <p className="cardTxt body">Alternatively, you can send us an email on any of the email addresses below. We look forward to an exciting, partnership with you!</p>
                                        <div className="others">
                                            <p>foremajforemaj@gmail.com</p>
                                            <p>tommysolo63@yahoo.com</p>
                                        </div>
                                    </p>
                                </div>
                                <div className="prodCard contCard">
                                    <img src={c3} alt="" className="contCardImg " />
                                    <p className="cardSubHead">Visit our office</p>
                                    <p className="cardTittle contCardTittle">                                        
                                        <p className="cardTxt body">You can pay us a visit at our office and let us help you with all your enquiries and order processing needs <br /><br /> Head Office:</p>
                                        <div className="others">
                                            <p id="address">No 5, Ologede Street, <br /> New Garage, Ibadan, <br />  Oyo State, <br /> Nigeria.</p>
                                            
                                        </div>
                                    </p>
                                </div>
                                
                            </div>                            
                        </div>
                    </div>
                </div>
            </section>
            <section className="homeSection3">
                <div className="container">
                    <div className="section">
                        <form className='homesect3Form' action="">
                            <h2 className='formTitle' >Contact FOREMAJ today!</h2>
                            <p className="formTxt body">
                                We look forward to building long and lasting <br /> partnerships and sharing the vibrant tastes <br /> of Nigeria with you. Send us a message!
                            </p>
                            <input type="email" placeholder='Your email' />
                            <textarea name="" id="" cols="52" rows="7" placeholder='Your Message'>
                                
                            </textarea>
                            <button id='formSend' className='btnPrimary'>Send</button>
                        </form>
                    </div>
                </div>           

            </section>
            <Footer/>
        </>
     );
}
 
export default ContactUs;