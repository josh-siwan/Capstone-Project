import React from "react";
import TradingViewWidget from "./TradingViewWidget";
import SymbolInfoWidget from "./SymbolInfoWidget";
import StockHeatMap from "./StockHeatMap";
import CoinHeatMap from "./CoinHeatMap";
import ForexCrossRates from "./ForexCrossRates";
import ForexHeatMap from "./ForexHeatMap";

// StockHeatMap
const Analytics = () => {
  return (
    <>
      <div class="h-screen grid grid-cols-2">
        <div>
          <TradingViewWidget />
        </div>
        <div>
          <TradingViewWidget />
        </div>
        <div>
          <TradingViewWidget />
        </div>
        <div>
          <TradingViewWidget />
        </div>
      </div>
      {/* <div class="relative top-[2%] grid-rows-1"><SymbolInfoWidget /> </div> */}
  

      <div class="h-screen grid grid-cols-2">
        <div>
          <StockHeatMap />
        </div>
        <div>
          <CoinHeatMap />
        </div>
        <div>
          <ForexCrossRates />
        </div>
        <div>
          <ForexHeatMap />
        </div>
      </div>
    </>
  );
};

export default Analytics;
