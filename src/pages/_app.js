import React, { useState, useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "@/components/Layout";
import "../styles/globals.css";
import "animate.css";
// import PopUp from "@/components/PopUp";
import "react-phone-input-2/lib/style.css";

function MyApp({ Component, pageProps }) {
  const [showPopUp, setShowPopUp] = useState(false);
  const [popUpDelay] = useState(2 * 60 * 1000); // 2 minutes in ms (fixed)
  const [initialized, setInitialized] = useState(false);

  // Function to handle closing the pop-up
  const handleClosePopUp = (isSubmitted = false) => {
    setShowPopUp(false); // Hide the pop-up

    if (isSubmitted) {
      // User submitted the form, set to never show pop-up again
      localStorage.setItem("formSubmitted", "true");
    } else {
      // Save the current time
      localStorage.setItem("popUpClosedAt", Date.now()); // Save the last closed time
    }
  };

  // Effect to control pop-up timing
  useEffect(() => {
    const formSubmitted = localStorage.getItem("formSubmitted");
    if (formSubmitted === "false") return; // Do not show pop-up if form was submitted  if (formSubmitted === "true") return;

    const lastClosedTime = localStorage.getItem("popUpClosedAt");
    const currentTime = Date.now();

    if (!lastClosedTime || currentTime - lastClosedTime >= popUpDelay) {
      // Show pop-up after 3 seconds if the conditions are met
      const timer = setTimeout(() => {
        setShowPopUp(true); // Show the pop-up
      }, 3000); // 3 seconds delay

      return () => clearTimeout(timer); // Clean up the timer on unmount
    }
  }, [popUpDelay, initialized]); // Re-run whenever delay or initialization state changes

  useEffect(() => {
    // Ensure the logic initializes across pages once
    if (!initialized) {
      setInitialized(true);
    }
  }, [initialized]);

  useEffect(() => {
    AOS.init({
      // duration: 800, // Animation duration in milliseconds
      // once: false,    // Whether animation should happen only once
      duration: 700,
      easing: "ease-in-out",
      offset: 80,
      once: false,
    });
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <title> &#60;/&#62; Suyash Pawar Portfolio</title>
        <link rel="icon" type="image/x-icon" href="/BUSINESS_WORLD.png" />
        <meta name="robots" content="index, follow" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta name="keywords" content="Client cunsultant" />
      </Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Parkinsans:wght@300..800&family=Syne:wght@400..800&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      ></link>

      <Layout>
        <Component {...pageProps} />
      </Layout>

      {/* {showPopUp && <PopUp onClose={handleClosePopUp} />} */}
    </React.Fragment>
  );
}

export default MyApp;
