import DefaultLayout from "../layout/DefaultLayout";
import './index.css'
import { Link } from "react-router-dom";

function Subscription(){
    return(
        <DefaultLayout>
            <img
                src={`${process.env.PUBLIC_URL}/wave.png`}
                alt="wave4"
                className="wave4"
            />
            <div className="homeinfo">
                <div className="introduceteam">
                    <h1 className="exduck">What is  EXCLUSIVE DUCK ?</h1>
                    <p className="exdesc">  Exclusive ducks are privileges that are enhanced for more 
                        convenient use.  more fast  and access to good deals more than
                        anyone else  Whether it's a noble duck member who will give more 
                        specials than a normal duck member  Or even better with a royal duck
                        that is like the king of ducks!</p>
                </div>
            <div className="interaction">

            </div>
      </div>
        </DefaultLayout>
    )
}
export default Subscription;
