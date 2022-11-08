import { useState, useEffect } from "react";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps, router }: AppProps) {
  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    const handleRouteChange = () => {
      isFirstMount && setIsFirstMount(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Component isFirstMount={isFirstMount} key={router.route} {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
