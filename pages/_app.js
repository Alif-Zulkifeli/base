import '../styles/globals.css'
import { useEffect } from 'react';
import '../styles/globals.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded', 
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
    });
  }, [])

  return (
    <div>
  
<Component {...pageProps} />
    </div>
  )
}

export default MyApp
