// import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";
import { GlobalStyles } from "twin.macro";
import * as fbq from "../common/lib/fpixel";

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            window.gtag(
                "config",
                process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string,
                {
                    page_path: url,
                }
            );
            fbq.pageview();
        };
        fbq.pageview();
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);
    return (
        <>
            {/* Global Site Code Pixel - Facebook Pixel */}
            <Script
                id="fb-pixel-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                      !function(f,b,e,v,n,t,s)
                      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                      n.queue=[];t=b.createElement(e);t.async=!0;
                      t.src=v;s=b.getElementsByTagName(e)[0];
                      s.parentNode.insertBefore(t,s)}(window, document,'script',
                      'https://connect.facebook.net/en_US/fbevents.js');
                      fbq('init', ${fbq.FB_PIXEL_ID});
                    `,
                }}
            />
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    );
}
export default MyApp;
