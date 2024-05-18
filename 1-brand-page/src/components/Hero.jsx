import flipkart from "../images/flipkart.png"
import amazon from "../images/amazon.png"
import shoeImg from "../images/hero-image.png"

export default function Hero(){
    return(
        <section id="hero-section">
            <div className="col">
                <h2>Your feet deserve the best</h2>
                <p>Your feet deserve the best and we're here to help you with our shoes. You feet deserve the best and we're here to help you with our shoes.</p>
                <div className="btn-box">
                    <button id="shop-now">Shop Now</button>
                    <button>Category</button>
                </div>
                <div className="avail-box">
                        <p>Also available on </p>
                        
                    <div className="row">
                        <img src={flipkart} alt="" />
                        <img src={amazon} alt="" />
                    </div>
                </div>
            </div>
            <div className="col">
                <img src={shoeImg} alt="" />
            </div>
        </section>
    );
}