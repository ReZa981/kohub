import './Home.css';
import Navbar from './Navbar';
import DefaultLayout from './layout/DefaultLayout';

function Home() {
  return (
    <DefaultLayout>
      <div className="home">
        <div className="home-display">
          <div className="homeinfo">
            <p className="kohubname">KOHUB</p>
          </div>
          {/* <img src={`${process.env.PUBLIC_URL}/kohub.png`} className="duckfloat" /> */}
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Home;
