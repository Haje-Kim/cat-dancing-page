import catSvg from '../assets/images/cat.svg';
import '../styles/animations.css';

const catStyle = {
  dancing: {
    container: {
      width: '200px',
      height: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
      filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2))',
    },
  },
};

export default function DancingCat({ animation = 'dance' }) {
  const getAnimationClass = () => {
    switch (animation) {
      case 'dance':
        return 'dance-animation';
      case 'wiggle':
        return 'wiggle-animation';
      case 'jump':
        return 'jump-animation';
      case 'spin':
        return 'spin-animation';
      case 'bounce':
        return 'bounce-animation';
      default:
        return 'dance-animation';
    }
  };

  return (
    <div style={catStyle.dancing.container}>
      <img
        src={catSvg}
        alt="Dancing Cat"
        className={getAnimationClass()}
        style={catStyle.dancing.image}
      />
    </div>
  );
}
