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
                    <div id="dz-root"></div>
                    <script src="https://e-cdns-files.dzcdn.net/js/min/dz.js">
                    {`DZ.init({
		                    appId:'528602',
		                    channelUrl :'http://localhost:3000/channel.html'
	                });`}
                    </script>
                </Head>
                
                <body>
                    <Main/>
                    <NextScript>
                    </NextScript>
                </body>
            </Html>
         );
     }
    
}