import { Star } from 'lucide-react';
// import '../styles/TestimonialCard.css';

const TestimonialCard = ({ name, position, text, avatar, rating }) => {
  return (
    <div className="card testimonial-card card-custom border-0 h-100">
      <div className="card-body p-4">
        <div className="rating mb-3">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={16}
              fill={index < rating ? 'var(--warning)' : 'none'}
              color={index < rating ? 'var(--warning)' : 'var(--gray)'}
            />
          ))}
        </div>
        <p className="card-text mb-4">"{text}"</p>
        <div className="d-flex align-items-center">
          <div className="avatar-container me-3">
            <img src={avatar} alt={name} className="avatar" />
          </div>
          <div>
            <h6 className="card-title mb-0">{name}</h6>
            <small className="text-muted">{position}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
