import { Link } from 'react-router-dom';
import './scss/style.css';

function ClinicCard({ title, image, services, link, id }) {
  return (
    <div className='clinic-card-wrap'>
      <img className='clinic-img' src={image} alt={`${title} image`} />
      <h1 className='clinic-title'>{title}</h1>
      <div className='clinic-services'>
        <h1>SERVICES</h1>
        {services.map((service, index) => (
          <h5 key={index}>{service}</h5>
        ))}
      </div>
      <button className='book-btn'>
        <Link to={link} className='book-btn-link' id={id}>
          BOOK NOW
        </Link>
      </button>
    </div>
  );
}

export default ClinicCard;
