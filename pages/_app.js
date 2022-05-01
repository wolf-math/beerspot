import '../styles/globals.css';
import '../components/navbar';
import Navbar from '../components/navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
