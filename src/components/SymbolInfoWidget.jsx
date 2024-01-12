import React, { useEffect, useRef, memo, useContext, useState } from 'react';
import StockContext from "../contexts/StockContext";
import { StatusOnlineIcon } from '@heroicons/react/solid';


function SymbolInfoWidget() {
const container = useRef();
  const [symbol, setSymbol] = useState('AAPL')
  // const [URL, setURL] = useState(`https://s.tradingview.com/embed-widget/symbol-info/?locale=en#%7B%22symbol%22%3A%22NASDAQ%3${symbol}%22%2C%22width%22%3A1000%2C%22locale%22%3A%22en%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Afalse%7D`)

  
// const change = () => {
//     //setSymbol('MSFT')
//     console.log('inside function')
//    // setURL(`https://s.tradingview.com/embed-widget/symbol-info/?locale=en#%7B%22symbol%22%3A%22NASDAQ%3MSFT%22%2C%22width%22%3A1000%2C%22locale%22%3A%22en%22%2C%22colorTheme%22%3A%22light%22%2C%22isTransparent%22%3Afalse%7D`)
//     //window.location.reload()
//     document.getElementById("myframe").src = "https://s.tradingview.com/embed-widget/symbol-info/?locale=en#%7B%22symbol%22%3A%22NASDAQ%3MSFT%22%2C%22width%22%3A1000%2C%22locale%22%3A%22en%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Afalse%7D"
// }



  useEffect(
    () => {
        console.log(symbol)
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {   ${console.log('new widget: ' + symbol)}
            "symbol": NASDAQ:${symbol},
            "width": "100%",
            "locale": "en",
            "colorTheme": "dark",
            "isTransparent": false
        }`;
    container.current.appendChild(script);
    },
    [] // stockSymbo // stockSymbol
  );

  return (
   
    
    <div class="tradingview-widget-container" ref={container} >
         
        {/* <button className=' absolute left-[70%] top[70]%' > Click ME  </button> //onClick={change} */}
        <iframe
        id="myframe"
        width="860"
        height="484"
        src= {URL} 
      ></iframe>
      <div class="tradingview-widget-container__widget"></div>
      <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text"></span></a></div>
    </div>
  );
}

export default SymbolInfoWidget;