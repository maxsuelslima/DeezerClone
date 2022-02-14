import Document,{Head,Html,Main,NextScript} from "next/document";
import Script from "next/script";

export default class MyDocument extends Document{
     render(){
         return(    
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
                </Head>
                <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
                <body>
                    <Main/>
                    <NextScript>
                    </NextScript>
                </body>
            </Html>
         );
     }
}