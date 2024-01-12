import React, { useState, useEffect, useContext } from "react";
import Card from "./Card";
import Search from "./Search";
import Header from "./Header";
import Details from "./Details";
import Overview from "./Overview";
import TradingViewWidget from "./TradingViewWidget";
import OrderModal from "./OrderModal";
import StockContext from "../contexts/StockContext";
import { fetchQuote, fetchStockDetails } from "../api/stockAPI";
import { Button} from 'flowbite-react';
import {useNavigate} from 'react-router-dom';

const Dashboard = () => {

  const {stockSymbol} = useContext(StockContext)

  const [stockDetails, setStockDetails] = useState({})
  const [quote, setQuote] = useState({})

  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol)
        console.log(result)
        setStockDetails(result)
      
      }
      catch(error) {
        setStockDetails({})
        console.log(error)
      }
    }

    const updateStockOverview = async () => {
      try {
        const result = await fetchQuote(stockSymbol)
        setQuote(result)
      }
      catch(error) {
        setQuote({})
        console.log(error)
      }
    }
    // const updateWidget = () => {
    //   <TradingViewWidget symbol={stockSymbol}  />
    // }

    updateStockDetails()
    updateStockOverview()
    // updateWidget()
   
  }, [stockSymbol])

  const navigate = useNavigate();
  const navigateToPortfolio = () => {
    // 👇️ navigate to /contacts
    navigate('/portfolio');
  };

  const navigateToAnalytics = () => {
    navigate('/analytics')
  }

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand bg-neutral-100">
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
        <Header name={stockDetails.name} />
        <div>
            <OrderModal
            stockName={stockSymbol}
            boughtPrice={quote.pc}
            />
        </div>
        <div>
          <Button onClick={navigateToPortfolio}>Portfolio</Button>
        </div>
        <div>
          <Button onClick={navigateToAnalytics}>Analytics</Button>
        </div>
      </div>

      <div className="md:col-span-2 row-span-4 ">
        {/* <Card>Chart</Card> */}
        <TradingViewWidget symbol={stockSymbol}  />
      
      </div>
      <div>
        <Overview
          symbol={stockSymbol}
          price={quote.pc}
          change={quote.d}
          changePercent={quote.dp}
          currency={stockDetails.currency}
        />
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Details details={stockDetails} />
      </div>
    </div>
  );
};

export default Dashboard;
// absolute top-[5%] left-[60%]
