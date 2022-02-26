import useWidth from '../hooks/useWidth';

const Neon = () => {
  const width = useWidth();
  return (
    <div
      style={
        width === 'P'
          ? {
              position: 'absolute',
              top: '10%',
              left: '68%',
              textAlign: 'center',
              fontSize: '4vw',
            }
          : { textAlign: 'center', fontSize: '2.2rem', marginTop: '2.5rem' }
      }
    >
      <div className="neon">Beer</div>
      <div className="neon">Cocktail</div>
      <div className="neon">Bottle</div>
    </div>
  );
};
export default Neon;
