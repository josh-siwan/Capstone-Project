
'use client';

import { Button, Modal } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
//import { HiOutlineExclamationCircle } from 'react-icons/hi';
import StockQuantity from './StockQuantity';

export default function OrderModal   ({boughtPrice, stockName}) {
  const [openModal, setOpenModal] = useState(false);
  const [units, setUnits] = useState(0);
  const [valueOfShares, setValueOfShares] = useState(0);
  const [stocks, setStocks] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/api/users')
    .then(result => setStocks(result.data))
    .catch(err => console.log(err))
    
},[])


  function stockUnits (units) {
    setUnits(units)
  }

  function stockValue (units, price) {
    setValueOfShares (units * price)
  }

  console.log('*********STOCKS*********')
  console.log(stocks)

  
  const addToDb = () => {
    //setOpenModal(false)
    axios.get('http://localhost:8080/api/users')
    .then(result => setStocks(result.data +{stockName, boughtPrice, units, valueOfShares} ))
    .catch(err => console.log(err))
    
    //console.log('inside else if - value of statement ' + stocks)
    const updated = null 
    stocks.forEach((stock) => {
      console.log('database stock name: ' + stock.stockName + 'chosen stock: ' +stockName + 'stock length: ' +stocks.length)
      if (stock.stockName == stockName) {
       // console.log( 'match found: ' + stock.stockName + ' stock id: ' + stock._id)
        const modifiedUnits = stock.units + units
        const modifiedShareVal = modifiedUnits * boughtPrice
        
        axios.put('http://localhost:8080/api/users/'+stock._id,{stockName, boughtPrice, "units": modifiedUnits,"valueOfShares": modifiedShareVal})
       // console.log('updated stock')
        return;
      }
    })
  
    //console.log('going into next check')
   // console.log("does the array contain this stock already? " + stocks.includes(stocks.stockName))
     
    if( (stocks.includes(stocks.stockName) === false) ) {
      // console.log('inside else if - value of statement ' + stocks.includes(stocks.stockName))
      // console.log('name: ' + stockName + 'bought Price: ' + boughtPrice + 'units: ' + units + 'value: ' + valueOfShares)
     axios.post('http://localhost:8080/api/users/create', {stockName, boughtPrice, units, valueOfShares})
  
  
    } 
  
   // axios.post('http://localhost:8080/api/users/create', {stockName, boughtPrice, units, valueOfShares})
   //console.log(JSON.stringify(stocks))
   }


  return (
    <> 
{/* https://www.flowbite-react.com/docs/components/modal */}
      <Button onClick={() => setOpenModal(true)}>Buy</Button>
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            {/* <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" /> */}
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Please Enter units desired: 
            </h3>
            <div>
            <StockQuantity stockValue={stockValue} stockUnits={stockUnits} price={boughtPrice}/>
            </div>
            <div className="flex justify-center gap-4 pt-3">
              <Button color="failure" onClick={addToDb}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      
    </>
  );
}
