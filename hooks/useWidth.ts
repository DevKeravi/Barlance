import { useEffect, useState } from 'react';

const useWidth = () => {
  const [device, setDevice] = useState<string>();

  const detect = () => {
    if (window.innerWidth > 1440) {
      setDevice('P');
    } else if (window.innerWidth > 768) {
      setDevice('T');
    } else {
      setDevice('M');
    }
  };
  useEffect(() => {
    if (window.innerWidth > 1440) {
      setDevice('P');
    } else if (window.innerWidth > 768) {
      setDevice('T');
    } else {
      setDevice('M');
    }
    window.addEventListener('resize', detect);
    return () => {
      window.removeEventListener('resize', detect);
    };
  }, []);

  return device;
};
export default useWidth;
