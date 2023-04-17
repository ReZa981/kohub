import './Home.css';
import DefaultLayout from './layout/DefaultLayout';

function Home() {
  return (
    <DefaultLayout>
    <div className="home">
      <div className="home-display">
        <img src={`${process.env.PUBLIC_URL}/duck.gif`} alt="duck1" className="duckfloat1" />
        < img src={`${process.env.PUBLIC_URL}/duck.gif`} alt="duck2" className="duckfloat2" />
      </div>
      <div className="homeinfo">
            <p className="kohubname">KOHUB</p>
      </div>
      
   </div>
   </DefaultLayout>
  );
}

export default Home;

