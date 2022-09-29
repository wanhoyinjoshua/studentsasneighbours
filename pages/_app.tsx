import "../styles/app.css"
import Script from 'next/script';
import Head from 'next/head';
import { GoogleAnalytics } from "nextjs-google-analytics";
export default function App({ Component, pageProps }) {
    return (
    
    <>

<GoogleAnalytics trackPageViews />

<Component {...pageProps} />
    
    </>



    )
    
    
  }