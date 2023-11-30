import "./products.css";
import Navbar from "./nav/navbar";
import prod1 from '../images/products/spice1.png';
import prod2 from '../images/products/spice2.png';
import prod3 from '../images/products/spice3.png';

import veg1 from '../images/products/veg1.png';
import veg2 from '../images/products/veg2.png';
import veg3 from '../images/products/veg3.png';
import veg4 from '../images/products/veg4.png';
import veg5 from '../images/products/veg5.png';
import veg6 from '../images/products/veg6.png';

import snail1 from '../images/products/snail1.png';
import snail2 from '../images/products/snail2.png';
import snail3 from '../images/products/snail3.png';

import oil1 from '../images/products/oil1.png';
import oil2 from '../images/products/oil2.png';
import oil3 from '../images/products/oil3.png';

import pep1 from '../images/products/pep1.png';
import pep2 from '../images/products/pep2.png';
import pep3 from '../images/products/pep3.png';

import elubo1 from '../images/products/elubo1.png';
import elubo2 from '../images/products/elubo2.png';
import elubo3 from '../images/products/elubo3.png';

import garri1 from '../images/products/garri1.png';
import garri2 from '../images/products/garri2.png';
import garri3 from '../images/products/garri3.png';

import ygarri1 from '../images/products/ygarri1.png';
import ygarri2 from '../images/products/ygarri2.png';
import ygarri3 from '../images/products/ygarri3.png';

import flour1 from '../images/products/pflour1.png';
import flour2 from '../images/products/pflour2.png';
import flour3 from '../images/products/pflour3.png';
import Footer from "./footer/footer";
import { HashLink } from 'react-router-hash-link';
import { Helmet } from 'react-helmet-async';
const Products = () => {
    return ( 
        <>
            <Helmet>
                <title>Our Product Offering</title>
                <meta name="description" content="Discover Our Authentic Nigerian Food Products"/>
            </Helmet>
            <Navbar/>
            <div className="prodBanner">
                <div className="container">
                    <div className="pBannerTxt">
                        <div className="bannerPack">
                           <p className='subHeading' >our product offering</p>
                            <h1 id='homeH1'>Discover Our Authentic <br /> Nigerian Food Products</h1>
                            <p className="lead" id='homeLead'>We export a wide range of Nigerian food products worldwide, including fresh and dried spices (garlic, ginger, turmeric, etc.), vegetables (ugwu leaves, ewedu, moi-moi leaves, etc.), and snails (oven dried, live, and frozen). Weekly deliveries are available to the US and UK.</p> 
                        </div> 
                    </div>
                </div>
            </div>
            <section className="01" data-aos="fade-up">
                    <div className="white">
                        <div className="section2">
                            <div className="container ">
                                <div className="prodDetails">
                                    <span className="number">01</span>
                                    <div className="product">
                                        <h3 className="type">Spices</h3>
                                        <p>Discover a tantalizing array of spices and herbs that form the foundation of Nigerian cuisine. From aromatic ginger and turmeric to flavorful scent leaves and hibiscus, our carefully sourced products will elevate your culinary creations.</p>
                                    </div>                            
                                </div>                            
                            </div>
                        </div>
                    </div>
                    <div className="green">
                        <div className="section2">
                            <div className="container">
                                <div className="prodCards">
                                    <div className="prodCard">
                                        <img src={prod1} id="adjustSpice" alt="" className="prodCardImg" />
                                        <p className="cardTittle prodCardTittle  ">
                                            <p className="cardSubHead">Ginger</p>
                                            <p className="cardTxt body">Our  ginger is sourced from the finest ginger farms in Nigeria. It is meticulously dried and processed to retain its aromatic flavor and nutritional benefits. It is used in various culinary applications and is renowned for its medicinal properties.</p>
                                        </p>
                                    </div>
                                    <div className="prodCard">
                                        <img src={prod2} alt="" className="prodCardImg" />
                                        <p className="cardTittle prodCardTittle ">
                                            <p className="cardSubHead">Garlic</p>
                                            <p className="cardTxt body">
                                                Cultivated in the fertile lands of Nigeria, garlic lends a unique depth and complexity to a wide range of culinary delights. With its remarkable taste and numerous health benefits, it serves as a great meal  addition anytime, anyplace!
                                            </p>
                                        </p>
                                    </div>
                                    <div className="prodCard">
                                        <img src={prod3} alt="" className="prodCardImg" />
                                        <p className="cardTittle prodCardTittle ">
                                            <p className="cardSubHead">Hibiscus Scent Leaf</p>
                                            <p className="cardTxt body">
                                                Derived from the hibiscus plant, this aromatic leaf adds a delightful twist to culinary creations. With its distinctively fresh and invigorating scent, it  infuses dishes with a unique vibrancy, awakening the senses and tantalizing the taste buds.
                                            </p>
                                        </p>
                                    </div>
                                </div> 
                                <HashLink to="/contact#top"><button className='btnPrimary prodBtn' >Contact us to place an order today!</button></HashLink>                           
                            </div>
                            
                        </div>
                         
                    </div>
                    
            </section>


            <section className="02" data-aos="fade-up">
                    <div className="white">
                        <div className="section2">
                            <div className="container ">
                                <div className="prodDetails">
                                    <span className="number">02</span>
                                    <div className="product">
                                        <h3 className="type">Vegetables</h3>
                                        <p>Experience the freshness and nutritional benefits of Nigerian vegetables. From the versatile ugwu and ewedu to the vibrant moimoi leaves and peppers, our vegetables are meticulously selected and packed to enhance your meals.</p>
                                    </div>                            
                                </div>                            
                            </div>
                        </div>
                    </div>
                    <div className="green" id="green2">
                        <div className="section2">
                            <div className="container">
                                <div className="prodCards">
                                    <div className="prodCard">
                                        <img src={veg1} alt="" className="prodCardImg" />
                                        <p className="cardTittle prodCardTittle  ">
                                            <p className="cardSubHead">Ugwu leaves</p>
                                            <p className="cardTxt body">Packed with vitamins and minerals, Nigerian Ugwu leaves offer both nutritional value and tantalizing taste. Whether added to soups or stews,these versatile leaves elevate the flavors, infusing each bite with a touch of authenticity.</p>
                                        </p>
                                    </div>
                                    <div className="prodCard">
                                        <img src={veg2} alt="" className="prodCardImg" />
                                        <p className="cardTittle prodCardTittle ">
                                            <p className="cardSubHead">Peppers</p>
                                            <p className="cardTxt body">
                                                Prepare for a fiery culinary experience with Nigerian peppers, renowned for their intense heat and exceptional flavor. Bursting with vibrant colors and bold spiciness, these peppers add a thrilling kick to a wide range of dishes.
                                            </p>
                                        </p>
                                    </div>
                                    <div className="prodCard">
                                        <img src={veg3} alt="" className="prodCardImg" />
                                        <p className="cardTittle prodCardTittle ">
                                            <p className="cardSubHead">Ewedu leaves</p>
                                            <p className="cardTxt body">
                                                With their smooth texture and subtle flavor, Nigerian Ewedu leaves offer a delightful contrast to bolder ingredients, creating a harmonious balance of tastes and textures. 
                                            </p>
                                        </p>
                                    </div>
                                </div> 
                                                           
                            </div>
                        </div>
                    </div>
                    <div className="double">
                        <div className="section2">
                            <div className="container">
                                <div className="prodCards">
                                    <div className="prodCard">
                                        <img src={veg4} alt="" className="prodCardImg" />
                                        <p className="cardTittle prodCardTittle  ">
                                            <p className="cardSubHead">Moi-Moi leaf</p>
                                            <p className="cardTxt body">With their unique texture and mild flavor, Moi-Moi leaves contribute to the delightful softness and authentic taste of bean pudding. As the leaves infuse their essence into the dish, they lend a subtle earthiness that complements the richness of the beans and spices used.</p>
                                        </p>
                                    </div>
                                    <div className="prodCard">
                                        <img src={veg5} alt="" className="prodCardImg" />
                                        <p className="cardTittle prodCardTittle ">
                                            <p className="cardSubHead">Uziza leaves</p>
                                            <p className="cardTxt body">
                                            Uziza leaves boast a distinctively bold and peppery taste, enhancing the depth and complexity of soups, stews, and sauces. Known for their unique spiciness, they awaken the palate with their zesty notes, creating a memorable dining experience.
                                            </p>
                                        </p>
                                    </div>
                                    <div className="prodCard">
                                        <img src={veg6} alt="" className="prodCardImg" />
                                        <p className="cardTittle prodCardTittle ">
                                            <p className="cardSubHead">Tete leaves</p>
                                            <p className="cardTxt body">
                                            Derived from the Tete plant, and known for their nutrient-rich composition, Tete leaves contribute to both the taste and health benefits of dishes while adding a refreshing element and a vibrant green color to your culinary creations.
                                            </p>
                                        </p>
                                    </div>
                                </div>   
                                <HashLink to="/contact#top"><button className='btnPrimary prodBtn' >Contact us to place an order today!</button></HashLink>                         
                            </div>
                        </div>
                    </div>
            </section>


            <section className="03" data-aos="fade-up">
                    <div className="white">
                        <div className="section2">
                            <div className="container ">
                                <div className="prodDetails">
                                    <span className="number">03</span>
                                    <div className="product">
                                        <h3 className="type">Snails</h3>
                                        <p>Indulge in the unique and delectable taste of Nigerian snails. Whether you prefer them live, oven-dried, or frozen, our snails are a delicacy sought after for their tender texture and rich flavor.</p>
                                    </div>                            
                                </div>                            
                            </div>
                        </div>
                    </div>
                    <div className="green">
                        <div className="section2">
                            <div className="container">
                                <div className="prodCards">
                                    <div className="prodCard snail">
                                        <img src={snail1}  alt="" className="prodCardImg" />
                                        <p className="cardTittle prodCardTittle  ">
                                            <p className="cardSubHead">Live snails</p>
                                            <p className="cardTxt body">Sourced fresh and alive, these snails captivate with their intriguing flavors and tender texture. With their natural sweetness and subtle earthiness, live snails offer a taste that is both delicate and distinct.</p>
                                        </p>
                                    </div>
                                    <div className="prodCard snail">
                                        <img src={snail2} alt="" className="prodCardImg" />
                                        <p className="cardTittle prodCardTittle ">
                                            <p className="cardSubHead">Oven-dried snails</p>
                                            <p className="cardTxt body">
                                            Oven-dried to perfection, these snails retain their rich flavors while giving a delightful texture that is both tender and slightly chewy. With their intense taste and extended shelf life, oven-dried snails offer a versatile ingredient for a variety of dishes.
                                            </p>
                                        </p>
                                    </div>
                                    <div className="prodCard snail">
                                        <img src={snail3} alt="" className="prodCardImg" />
                                        <p className="cardTittle prodCardTittle ">
                                            <p className="cardSubHead">Frozen snails</p>
                                            <p className="cardTxt body">
                                            With their natural succulence and unique taste, frozen snails offer a versatile ingredient that can be effortlessly incorporated into a myriad of dishes. From hearty stews to sizzling stir-fries, the versatility of frozen snails knows no bounds.
                                            </p>
                                        </p>
                                    </div>
                                    
                                </div> 
                                <HashLink to="/contact#top"><button className='btnPrimary prodBtn' >Contact us to place an order today!</button></HashLink>                          
                            </div>
                            
                        </div>
                        
                    </div>
                    
            </section>

            
            <section className="s04" data-aos="fade-up">
                    <div className="white">
                        <div className="section2">
                            <div className="container ">
                                <div className="prodDetails">
                                    <span className="number">04</span>
                                    <div className="product">
                                        <h3 className="type">Palm Oil</h3>
                                        <p>Palm Oil is an edible vegetable oil that comes from the fruit of oil palm trees, the scientific name is Elaeis guineensis. It is an extremely versatile oil that has many different properties and functions that makes it so useful and so widely used.</p>
                                    </div>                            
                                </div>                            
                            </div>
                        </div>
                    </div>
                    <div className="green" id="greenOil">
                        <div className="section2">
                            <div className="container">
                                <div className="prodCards" id="prodImgOnly">
                                    <div className="prodCard imgOnly">
                                        <img src={oil1}  alt="" className="prodCardImg oil" />
                                    </div>
                                    <div className="prodCard imgOnly">
                                        <img src={oil2} alt="" className="prodCardImg oil" />
                                    </div>
                                    <div className="prodCard imgOnly">
                                        <img src={oil3} alt="" className="prodCardImg oil" />
                                    </div>
                                </div>  
                                <HashLink to="/contact#top"><button id="imgOnlyBtn" className='btnPrimary prodBtn' >Contact us to place an order today!</button></HashLink>                          
                            </div>
                        </div>
                    </div>
            </section>


            <section className="s05" data-aos="fade-up">
                    <div className="white">
                        <div className="section2">
                            <div className="container ">
                                <div className="prodDetails">
                                    <span className="number">05</span>
                                    <div className="product">
                                        <h3 className="type">Grounded Chilli Pepper</h3>
                                        <p>Grounded Chilli pepper is a spice that is made up of ground dried whole peppers (seeds and all). Packed with heat and adds lots of flavour to any dish.</p>
                                    </div>                            
                                </div>                            
                            </div>
                        </div>
                    </div>
                    <div className="green" id="greenOil">
                        <div className="section2">
                            <div className="container">
                                <div className="prodCards" id="prodImgOnly">
                                    <div className="prodCard imgOnly">
                                        <img src={pep1}  alt="" className="prodCardImg oil" />
                                    </div>
                                    <div className="prodCard imgOnly">
                                        <img src={pep2} alt="" className="prodCardImg oil" />
                                    </div>
                                    <div className="prodCard imgOnly">
                                        <img src={pep3} alt="" className="prodCardImg oil" />
                                    </div>
                                </div>   
                                <HashLink to="/contact#top"><button id="imgOnlyBtn" className='btnPrimary prodBtn' >Contact us to place an order today!</button></HashLink>                         
                            </div>
                        </div>
                    </div>
            </section>


            <section className="s06" data-aos="fade-up">
                    <div className="white">
                        <div className="section2">
                            <div className="container ">
                                <div className="prodDetails">
                                    <span className="number">06</span>
                                    <div className="product">
                                        <h3 className="type">Yam Flour (Elubo Isu)</h3>
                                        <p>The flour used is derived from yam. Yam, a common name for species in the genus Dioscorea, is grown in Africa, Asia, Caribbean, Oceania and Latin America. 95% of yam is cultivated and harvested in West Africa. It is made with yam flour that has been dried; this gives it a black/brownish colour when added to boiling hot water. Amala is high in carbohydrates and packs a lot of calories.</p>
                                    </div>                            
                                </div>                            
                            </div>
                        </div>
                    </div>
                    <div className="green" id="greenOil">
                        <div className="section2">
                            <div className="container">
                                <div className="prodCards" id="prodImgOnly">
                                    <div className="prodCard imgOnly">
                                        <img src={elubo1}  alt="" className="prodCardImg oil" />
                                    </div>
                                    <div className="prodCard imgOnly">
                                        <img src={elubo2} alt="" className="prodCardImg oil" />
                                    </div>
                                    <div className="prodCard imgOnly">
                                        <img src={elubo3} alt="" className="prodCardImg oil" />
                                    </div>
                                </div> 
                                <HashLink to="/contact#top"><button id="imgOnlyBtn" className='btnPrimary prodBtn' >Contact us to place an order today!</button></HashLink>                           
                            </div>
                        </div>
                    </div>
            </section>


            <section className="s07" data-aos="fade-up">
                    <div className="white">
                        <div className="section2">
                            <div className="container ">
                                <div className="prodDetails">
                                    <span className="number">07</span>
                                    <div className="product">
                                        <h3 className="type">Ijebu Garri</h3>
                                        <p>This cassava cereal is made by Ijebu farmers who have made the artisanal creation of garri renowned by locals and foreigners alike. Our garri is carefully processed to perfection without any synthetic chemicals to produce the finest grains ever.</p>
                                    </div>                            
                                </div>                            
                            </div>
                        </div>
                    </div>
                    <div className="green" id="greenOil">
                        <div className="section2">
                            <div className="container">
                                <div className="prodCards" id="prodImgOnly">
                                    <div className="prodCard imgOnly">
                                        <img src={garri1}  alt="" className="prodCardImg oil" />
                                    </div>
                                    <div className="prodCard imgOnly">
                                        <img src={garri2} alt="" className="prodCardImg oil" />
                                    </div>
                                    <div className="prodCard imgOnly">
                                        <img src={garri3} alt="" className="prodCardImg oil" />
                                    </div>
                                </div> 
                                <HashLink to="/contact#top"><button id="imgOnlyBtn" className='btnPrimary prodBtn' >Contact us to place an order today!</button></HashLink>                           
                            </div>
                        </div>
                    </div>
            </section>


            <section className="s08" data-aos="fade-up">
                    <div className="white">
                        <div className="section2">
                            <div className="container ">
                                <div className="prodDetails">
                                    <span className="number">08</span>
                                    <div className="product">
                                        <h3 className="type">Yellow Garri</h3>
                                        <p>Yellow garri is prepared by adding palm oil just before the fermenting stage of the cassava mash. Alternatively, it can be made using the yellow-fleshed breed of cassava.</p>
                                    </div>                            
                                </div>                            
                            </div>
                        </div>
                    </div>
                    <div className="green" id="greenOil">
                        <div className="section2">
                            <div className="container">
                                <div className="prodCards" id="prodImgOnly">
                                    <div className="prodCard imgOnly">
                                        <img src={ygarri1}  alt="" className="prodCardImg oil" />
                                    </div>
                                    <div className="prodCard imgOnly">
                                        <img src={ygarri2} alt="" className="prodCardImg oil" />
                                    </div>
                                    <div className="prodCard imgOnly">
                                        <img src={ygarri3} alt="" className="prodCardImg oil" />
                                    </div>
                                    
                                </div>  
                                <HashLink to="/contact#top"><button id="imgOnlyBtn" className='btnPrimary prodBtn' >Contact us to place an order today!</button></HashLink>                         
                            </div>
                        </div>
                    </div>
            </section>
            

            <section className="s09" data-aos="fade-up">
                    <div className="white">
                        <div className="section2">
                            <div className="container ">
                                <div className="prodDetails">
                                    <span className="number">09</span>
                                    <div className="product">
                                        <h3 className="type">Plantain Flour</h3>
                                        <p>Yellow garri is prepared by adding palm oil just before the fermenting stage of the cassava mash. Alternatively, it can be made using the yellow-fleshed breed of cassava.</p>
                                    </div>                            
                                </div>                            
                            </div>
                        </div>
                    </div>
                    <div className="green" id="greenOil">
                        <div className="section2">
                            <div className="container">
                                <div className="prodCards" id="prodImgOnly">
                                    <div className="prodCard imgOnly">
                                        <img src={flour1}  alt="" className="prodCardImg oil" />
                                    </div>
                                    <div className="prodCard imgOnly">
                                        <img src={flour2} alt="" className="prodCardImg oil" />
                                    </div>
                                    <div className="prodCard imgOnly">
                                        <img src={flour3} alt="" className="prodCardImg oil" />
                                    </div>
                                </div> 
                                <HashLink to="/contact#top"><button id="imgOnlyBtn" className='btnPrimary prodBtn' >Contact us to place an order today!</button></HashLink>                           
                            </div>
                        </div>
                    </div>
            </section>


            <section className="homeSection3" data-aos="fade-up">
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
 
export default Products;