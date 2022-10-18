import '../styles/globals.css';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
