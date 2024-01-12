
'use client';

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

import Axios from 'axios'
//import { HiOutlineExclamationCircle } from 'react-icons/hi';
import StockQuantity from './StockQuantity';
export default function SellModal   ({boughtPrice, stockName, originalUnits, id, boolean}) {
  const [openModal, setOpenModal] = useState(false);
  const [units, setUnits] = useState(0);
 
  const [valueOfShares, setValueOfShares] = useState(0);

  function stockUnits (units) {
       setUnits(units)

  }

  function stockValue (units, price) {
    setValueOfShares (units * price)
  }


 const updateDb = () => {

    const modifiedUnits = originalUnits - units
    console.log('modified Units: ' + modifiedUnits)

    const modifiedShareVal = modifiedUnits * boughtPrice
    console.log('modified share value: ' + modifiedShareVal)

    console.log('stock id: ' + id)

    Axios.put('http://localhost:8080/api/users/'+id,{stockName, boughtPrice, "units": modifiedUnits,"valueOfShares": modifiedShareVal})
    setOpenModal(false)
    window.location.reload()
  }

  const updateDbSecond = () => {
    console.log("entered")

    console.log('original Units: ' + originalUnits + ' units entered: ' + units)
    const modifiedUnits = originalUnits + units
    console.log('modified Units: ' + modifiedUnits)

    const modifiedShareVal = modifiedUnits * boughtPrice
    console.log('modified share value: ' + modifiedShareVal)

    console.log('stock id: ' + id)

    Axios.put('http://localhost:8080/api/users/'+id,{stockName, boughtPrice, "units": modifiedUnits,"valueOfShares": modifiedShareVal})
    setOpenModal(false)
    window.location.reload()
  }

  
  return (
    <> 
{/* https://www.flowbite-react.com/docs/components/modal */}
    {boolean ?  <Button  onClick={() => setOpenModal(true)}>Sell</Button> : <Button  onClick={() => setOpenModal(true)}>Buy</Button>  }
      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            {/* <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" /> */}
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Please Enter units to be sold: 
            </h3>
            <div>
            <StockQuantity  stockValue={stockValue} stockUnits={stockUnits} price={ boughtPrice}/>
            </div>
            <div className="flex justify-center gap-4 pt-3">
              { boolean ? <Button color="failure" onClick={updateDb}> {"Yes, I'm sure"} </Button> : <Button color="failure" onClick={updateDbSecond} > {"Yes, I'm sure"} </Button> } 
               
              
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
