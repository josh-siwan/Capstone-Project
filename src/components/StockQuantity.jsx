
import React, { useState } from 'react'
import OrderModal from './OrderModal'

const StockQuantity = ({price, stockUnits, stockValue, }) => {

const [val, setVal] = useState(0)


const change = (event) => {
    const newVal = (parseInt(event.target.value))
   console.log(newVal)
   setVal(newVal)
   stockUnits(newVal)
   stockValue(newVal, price)


}

console.log(' the price ' + price)
  return (

<form class="max-w-sm mx-auto">
    <label for="number-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
    <input onChange={change} type="number" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-40 p-2.5 pb-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-1/2 p-4 mx-auto text-center border"/>
    <h3 className=" mt-3 mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Total Value:
              
    </h3>
    
        {val * price}
</form>
     
  )

}

export default StockQuantity


