import DefaultLayout from '../layout/DefaultLayout';
import './index.css';

function About() {
  return (
    <DefaultLayout>
        <div className="aboutus">
          <div className="introduceteam">
            <h1 className="whoarewe">WHO ARE WE ?</h1>
            <p className="teamdesc">We are developer team of Yellow Duck production.</p>
          </div>
          <div className="membercard">
            <div class="card" >
                <img src={`${process.env.PUBLIC_URL}/chertam.png`} className="memberpic" />
                <p class="nickname">Chertam</p>
                <p class="name">Chanayacha Suriyasoonthorn</p>
                <p class="role">UI/UX Designer</p>
            </div>
            <div class="card" >
                <img src={`${process.env.PUBLIC_URL}/fahsai.png`} className="memberpic" />
                <p class="nickname">Fahsai</p>
                <p class="name">Kanyanut Sompong</p>
                <p class="role">Front-End Developer</p>
            </div>
            <div class="card" >
                <img src={`${process.env.PUBLIC_URL}/fluke.png`} className="memberpic" />
                <p class="nickname">Fluke</p>
                <p class="name">Pattanun Worakitsitthisatorn</p>
                <p class="role">Back-End Developer</p>
            </div>
            <div class="card" >
                <img src={`${process.env.PUBLIC_URL}/satang.png`} className="memberpic" />
                <p class="nickname">Satang</p>
                <p class="name">Pawita Pongpaew</p>
                <p class="role">Back-End Developer</p>
            </div>
            <div class="card" >
                <img src={`${process.env.PUBLIC_URL}/net.png`} className="memberpic" />                
                <p class="nickname">Net</p>
                <p class="name">Poramee Apiradeewajeeset</p>
                <p class="role">Database Developer</p>
            </div>
          </div>
        </div>
    </DefaultLayout>
  );
}

export default About;