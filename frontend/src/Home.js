import './Home.css';
import Navbar from './Navbar';
import DefaultLayout from './layout/DefaultLayout';

function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home-display">
        <div className="homeinfo">
          <p className="kohubname">KOHUB</p>
        </div>
        {/* <img src={`${process.env.PUBLIC_URL}/kohub.png`} className="duckfloat" /> */}
      </div>
   </div>
  );
}

export default Home;
