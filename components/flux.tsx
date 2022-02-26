import useWidth from '../hooks/useWidth';

const Flux = () => {
  const width = useWidth();
  return (
    <div
      style={
        width === 'P'
          ? {
              position: 'absolute',
              top: '28%',
              left: '7%',
              textAlign: 'center',
              fontSize: '4vw',
            }
          : { textAlign: 'center', fontSize: '2.2rem', marginTop: '2.5rem' }
      }
    >
      <div className="flux">#FUSION</div>
      <div className="flux">#HIPSTER</div>
      <div className="flux">#HONGDAE</div>
      <div className="flux">#EMOTION</div>
    </div>
  );
};
export default Flux;
