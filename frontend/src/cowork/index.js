import DefaultLayout from '../layout/DefaultLayout';
import './index.css';

const co_detail = (ID) => {

}

function Cowork() {

  return (
    <DefaultLayout>
    <div className="cowork">
        <div className="coworkimg">
            <img src={`${process.env.PUBLIC_URL}/miku.jpeg`} alt="sample" className="duckrating" />
        </div>
        <div className="coworkinfo">
            <div className="coworkname">
                <h1>TrueSpace Salaya</h1>
            </div>
            <div class="coworkdesc">
                <p className="info">True Space Salaya is located in the area of Mahidol University, Salaya. The price is good and worth it. And friendly with both students and working people, Freelance, Start-Up, etc. There are facilities Whether it is a TrueCoffee coffee shop, high-speed Wi-Fi internet, printer, power socket and USB Hub, TV, projector, whiteboard, snack bar corner, conference room, telephone room, personal storage locker Including the sofa zone. </p>
            </div>
            <div className="coworkfacility">
                
                <div className='facilitycheck'>
                    <div className='facility'>
                        <img src={`${process.env.PUBLIC_URL}/yes.png`} alt="check"  />
                        <p>Parking</p>
                    </div>
                    <div className='facility'>
                        <img src={`${process.env.PUBLIC_URL}/yes.png`} alt="check"  />
                        <p>Food</p>
                    </div>
                    <div className='facility'>
                        <img src={`${process.env.PUBLIC_URL}/yes.png`} alt="check"  />
                        <p>Meeting room</p>
                    </div>
                </div>

                <div className='facilitycheck'>
                    <div className='facility'>
                        <img src={`${process.env.PUBLIC_URL}/yes.png`} alt="check"  />
                        <p>Free WIFI</p>
                    </div>
                    <div className='facility'>
                        <img src={`${process.env.PUBLIC_URL}/yes.png`} alt="check"  />
                        <p>Bakery</p>
                    </div>
                    <div className='facility'>
                        <img src={`${process.env.PUBLIC_URL}/yes.png`} alt="check"  />
                        <p>Quiet zone</p>
                    </div>
                </div>

                <div className='facilitycheck'>
                    <div className='facility'>
                        <img src={`${process.env.PUBLIC_URL}/yes.png`} alt="check"  />
                        <p>Charging</p>
                    </div>
                    <div className='facility'>
                        <img src={`${process.env.PUBLIC_URL}/yes.png`} alt="check"  />
                        <p>Drink</p>
                    </div>
                    <div className='facility'>
                        <img src={`${process.env.PUBLIC_URL}/yes.png`} alt="check"  />
                        <p>Smoke zone</p>
                    </div>
                </div>
            </div>
            <div class="coworkfunction">
                <div class="coworklocation">
                    <img src={`${process.env.PUBLIC_URL}/miku.jpeg`} alt="sample"  />
                </div>
                <div class="coworkrating">
                    <div class="rating-gr">
                    <img src={`${process.env.PUBLIC_URL}/fullduck.png`} alt="star" className="duckrating" />
                    <img src={`${process.env.PUBLIC_URL}/fullduck.png`} alt="star" className="duckrating" />
                    <img src={`${process.env.PUBLIC_URL}/fullduck.png`} alt="star" className="duckrating" />
                    <img src={`${process.env.PUBLIC_URL}/emptyduck.png`} alt="star" className="duckrating" />
                    <img src={`${process.env.PUBLIC_URL}/emptyduck.png`} alt="star" className="duckrating" />
                    </div>
                        <h5>3/5 from review</h5>
                </div>
                <div class="coworkseat">
                    <h3>15</h3>
                    <h4>Available seat</h4>
                </div>
        </div>
        </div>
    </div>
    </DefaultLayout>
  );
}

export default Cowork;
