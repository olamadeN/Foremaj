import './home.css'
import ofada from '../images/homepage/heritage1.jpg'
import card1 from '../images/homepage/card1.png'
import card2 from '../images/homepage/card2.png'
import card3 from '../images/homepage/card3.png'
import prod1 from '../images/homepage/Ellipse 1.jpg'
import prod2 from '../images/homepage/Ellipse2.jpg'
import prod3 from '../images/homepage/Ellipse3.jpg'
const Homepage = () => {
    return ( 
        <>
            <div className="banner">
                <div className="section bannerTxt">
                    <p className='subHeading' >Welcome to FOREMAJ Nigeria Limited (rc: 1878081)</p>
                    <h1 id='homeH1'>Your Gateway to Authentic <br /> Nigerian Food Products</h1>
                    <p className="lead" id='homeLead'>We are your trusted partner in exporting high-quality Nigerian <br /> food products worldwide.</p>
                    
                    <button className='btnPrimary' >Get in touch with us today!</button>
                </div>
            </div>
            <section className='homeSection1'>
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
                            <img src={card1} alt="" className="cardImg" />
                            <div className="cardTxt">
                                <h1 className='cardH1'>The very best products!</h1>
                                <p className="body">
                                    With our extensive expertise and commitment to excellence, we ensure that you receive the finest products that Nigeria has to offer.
                                </p>
                            </div>
                        </div>
                        <div className="heritageCard">
                            <img src={card2} alt="" className="cardImg" />
                            <div className="cardTxt">
                                <h1 className='cardH1'>Farm-fresh, high quality!</h1>
                                <p className="body">
                                    Each product is sourced from trusted farmers and suppliers, ensuring freshness, quality, and adherence to strict international standards.
                                </p>
                            </div>
                        </div>
                        <div className="heritageCard">
                            <img src={card3} alt="" className="cardImg" />
                            <div className="cardTxt">
                                <h1 className='cardH1'>Fast and efficient shipping!</h1>
                                <p className="body">
                                    We offer competitive pricing, efficient shipping options, and personalized customer service to guarantee a seamless experience. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="homeSection2">
                <div className="section2">
                    <p className="subHeading sectMargin">our PRODUCT CATEGORIES</p>
                    <h2 className='sect2H2' style={{color:"#0F2A13"}}>Access the best quality Nigerian food products and local spices . . . </h2>
                    <div className="productCards">
                        <div className="pCard">
                            <img src={prod1} alt="" className="pCardImg" />
                            <p className="cardTittle ">
                                <p className="cardSubHead">Spices and Herbs</p>
                                <p className="cardTxt body">Discover a tantalizing array of spices and herbs that form the foundation of Nigerian cuisine. 
                                From aromatic ginger and turmeric to flavorful scent leaves and hibiscus, our carefully sourced products will elevate your culinary creations.</p>
                            </p>
                        </div>
                        <div className="pCard">
                            <img src={prod2} alt="" className="pCardImg" />
                            <p className="cardTittle ">
                                <p className="cardSubHead">Vegetables</p>
                                <p className="cardTxt body">
                                    Experience the freshness and nutritional benefits of Nigerian vegetables. From the versatile ugwu and ewedu to the vibrant moimoi leaves and peppers, our vegetables are meticulously selected and packed to enhance your meals.
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
                <button id='homeSect2btn' className='btnPrimary' >Browse product categories</button>
            </section>
            <section className="homeSection3">
                <div className="section">
                    <form className='homesect3Form' action="">
                        <h2 className='formTitle' >Contact FOREMAJ today!</h2>
                        <p className="formTxt body">
                            We look forward to building long and lasting <br /> partnerships and sharing the vibrant tastes <br /> of Nigeria with you. Send us a message!
                        </p>
                        <input type="email" placeholder='Your email' />
                        <textarea name="" id="" cols="52" rows="7" placeholder='Your Message'>
                            
                        </textarea>
                        <button id='formSend' className='btnPrimary'>send</button>
                    </form>
                </div>

            </section>

            
        </>
    );
}
 
export default Homepage;