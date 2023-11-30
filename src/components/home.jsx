import './home.css';
import Navbar from "./nav/navbar";
import ofada from '../images/homepage/heritage1.png'
import card1 from '../images/homepage/card1.png'
import card2 from '../images/homepage/card2.png'
import card3 from '../images/homepage/card3.png'
import prod1 from '../images/homepage/Ellipse2.png'
import prod2 from '../images/homepage/Ellipse 1.png'
import prod3 from '../images/homepage/Ellipse3.png'
import Footer from "./footer/footer";
import { HashLink } from 'react-router-hash-link';
import { Helmet } from 'react-helmet-async';
const Homepage = () => {
    return ( 
        <>
            <Helmet>
                <title>FOREMAJ Nigeria Limited</title>
                <meta name="description" content="Your Gateway to Authentic Nigerian Food Products"/>
            </Helmet>
            <Navbar/>
            <div className="banner">
                <div className="container">
                    <div className="section bannerTxt">
                        <p className='subHeading' >Welcome to FOREMAJ Nigeria Limited (rc: 1878081)</p>
                        <h1 id='homeH1'>Your Gateway to Authentic <br /> Nigerian Food Products</h1>
                        <p className="lead" id='homeLead'>We are your trusted partner in exporting high-quality Nigerian <br /> food products worldwide.</p>
                        <HashLink to="/contact#top">
                            <button className='btnPrimary' >Get in touch with us today!</button>
                        </HashLink>
                        
                    </div>
                </div>
                
            </div>
            <section className='homeSection1'>
                <div className="container">
                    <div className="section heritage">
                        <div className="right" style={{color:"#ffffff"}}>
                            <h2>Experience Nigeria's <br /> Culinary Heritage . . . </h2>
                            <p className="body rightTxt">
                                Immerse yourself in the vibrant flavors and rich cultural heritage of Nigeria with our authentic food products. Each item in our collection is sourced from trusted local farmers and suppliers, ensuring freshness, quality, and adherence to strict international standards.
                                <br /><br />
                                At FOREMAJ Nigeria Limited, we are committed to delivering excellence in every aspect of our business. Our team meticulously selects and inspects each product to guarantee the highest standards of quality. We understand the importance of timely delivery and offer efficient shipping options to ensure your orders arrive promptly.
                            </p>
                            <img src={ofada} alt="ofada rice" className="rightImg" />
                        </div>
                        <div className="left">
                            <div className="heritageCard">
                                <img src={card1} alt="" id='cardImg1' className="cardImg" />
                                <div className="hCardTxt">
                                    <h1 className='cardH1'>The very best products!</h1>
                                    <p className="body">
                                        With our extensive expertise and commitment to excellence, we ensure that you receive the finest products that Nigeria has to offer.
                                    </p>
                                </div>
                            </div>
                            <div className="heritageCard">
                                <img src={card2} alt="" id='cardImg2' className="cardImg" />
                                <div className="hCardTxt">
                                    <h1 className='cardH1'>Farm-fresh, high quality!</h1>
                                    <p className="body">
                                        Each product is sourced from trusted farmers and suppliers, ensuring freshness, quality, and adherence to strict international standards.
                                    </p>
                                </div>
                            </div>
                            <div className="heritageCard">
                                <img src={card3} alt="" id='cardImg3' className="cardImg" />
                                <div className="hCardTxt">
                                    <h1 className='cardH1'>Fast and efficient shipping!</h1>
                                    <p className="body">
                                        We offer competitive pricing, efficient shipping options, and personalized customer service to guarantee a seamless experience. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
            <section className="homeSection2">
                <div className="container">
                    <div data-aos="fade-up" className="section2">
                        <p className="subHeading sectMargin">our PRODUCT CATEGORIES</p>
                        <h2 className='sect2H2' style={{color:"#0F2A13"}}>Access the best quality Nigerian food products and local spices . . . </h2>
                        <div className="productCards">
                            <div className="pCard">
                                <img src={prod1} alt="" className="pCardImg" />
                                <p className="cardTittle ">
                                    <p className="cardSubHead">Palm Oil</p>
                                    <p className="cardTxt body">Palm Oil is an edible vegetable oil that comes from the fruit of oil palm trees, the scientific name is Elaeis guineensis. It is an extremely versatile oil that has many different properties and functions that makes it so useful and so widely used.</p>
                                </p>
                            </div>
                            <div className="pCard">
                                <img src={prod2} alt="" className="pCardImg" />
                                <p className="cardTittle ">
                                    <p className="cardSubHead">Peppers and Spices</p>
                                    <p className="cardTxt body">
                                        Grounded Chilli pepper is a spice that is made up of ground dried whole peppers (seeds and all). It is Packed with heat and adds lots of flavour to any dish.
                                        Enjoy Nigeria’s rich culinary spices beyond borders!
                                    </p>
                                </p>
                            </div>
                            <div className="pCard">
                                <img src={prod3} alt="" className="pCardImg" />
                                <p className="cardTittle ">
                                    <p className="cardSubHead">Snails</p>
                                    <p className="cardTxt body">
                                    Indulge in the unique and delectable taste of Nigerian snails. Whether you prefer them live, oven-dried, or frozen, our snails are a delicacy sought after for their tender texture and rich flavor.
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                    <HashLink to="/products#top"><button id='homeSect2btn' className='btnPrimary' >Browse product categories</button></HashLink> 
                </div>
                
            </section>
            <section className="homeSection3">
                <div className="container">
                    <div className="section" data-aos="fade-up">
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
 
export default Homepage;