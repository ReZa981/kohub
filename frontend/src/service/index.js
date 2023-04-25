import DefaultLayout from "../layout/DefaultLayout";
import './index.css'
import { Link } from "react-router-dom";

const hotdeal = (promotion) =>{
    return (
        <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="hotplace"
                    style={
                        {backgroundImage: `url(${process.env.PUBLIC_URL}/miku.jpeg)`,
                        backgroundSize: 'cover'}}
                >
                    <p className="promodesc">{promotion}</p>
            </div>
            <p className="hotname">Co-working space's name</p>
        </Link>

    );
}

function Service(){
    return(
        <DefaultLayout>
            <img
                src={`${process.env.PUBLIC_URL}/wave2.png`}
                alt="wave2"
                className="wave3"
            />
            <div className="service">
                <div className="recommend">
                    <h3>Recommended</h3>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div className="autorec"
                            style={
                            {backgroundImage: `url(${process.env.PUBLIC_URL}/miku.jpeg)`,
                            backgroundSize: 'cover'}}>
                            <p className="recname">Co-working space's name</p>
                        </div>
                    </Link>
                </div>
                <div className="deal">
                    <div className="hotdeal">
                        <h3>HOT DEAL</h3>
                        <div className="coworkdeal">
                            {hotdeal("50 BAHT DISCOUNT")}
                            {hotdeal("30 % OFF FOR DRINK")}
                            {hotdeal("3 HOURS FREE 1 HOUR")}
                        </div>
                    </div>
                    <div className="onlykohub">
                        <h3>ONLY AT KOHUB</h3>
                        <div className="exclusive">
                            <div className="coupon">
                                <img src={`${process.env.PUBLIC_URL}/exclusiveduck.png`} alt="deal" className="exdeal" />
                            </div>
                            <div className="coupon">
                                <img src={`${process.env.PUBLIC_URL}/duckvoucher.png`} alt="deal" className="exdeal" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}
export default Service;