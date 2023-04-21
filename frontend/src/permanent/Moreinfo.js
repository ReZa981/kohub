import DefaultLayout from '../layout/DefaultLayout';
import './permanent/moreinfo.css';

function Moreinfo() {
  return (
    <DefaultLayout>
        <div>
          <img src={`${process.env.PUBLIC_URL}/duck.gif`} alt="duck1" className="duckfloat1" />
            Placeholder (Put about section here)
        </div>
    </DefaultLayout>
  );
}

export default Moreinfo;