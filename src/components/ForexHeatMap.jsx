import React, { useEffect, useRef, memo, useContext, useState } from 'react';

const ForexHeatMap = () => {
    const container = useRef();
    useEffect( () => {

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
        {
            "width": "100%",
            "height": "100%",
            "currencies": [
              "EUR",
              "USD",
              "JPY",
              "GBP",
              "CHF",
              "AUD",
              "CAD",
              "NZD",
              "CNY"
            ],
            "isTransparent": false,
            "colorTheme": "dark",
            "locale": "en"
          }`
      container.current.appendChild(script);
      },
      [] // stockSymbo // stockSymbol

    )



  return (
    <div class="tradingview-widget-container" ref={container}>
  <div class="tradingview-widget-container__widget"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text"></span></a></div>
  </div>
  )

}

export default ForexHeatMap