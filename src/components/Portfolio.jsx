import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SellModal from './SellModal'
const Portfolio = () => {
    const [stocks, setStocks] = useState([])

useEffect(() => {
    axios.get('http://localhost:8080/api/users')
    .then(result => setStocks(result.data))
    
    .catch(err => console.log(err))
    
},[])


  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Stock Name</th>
                        <th>Units</th>
                        <th>Price Bought</th>
                        <th>Total Value</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stocks.map((stock) => {
                            return <tr>
                                <td>{stock.stockName}</td>
                                <td>{stock.units}</td>
                                <td>{stock.boughtPrice}</td>
                                <td>{stock.valueOfShares}</td>
                                <td>
                                    <SellModal
                                    stockName={stock.stockName}
                                    boughtPrice={stock.boughtPrice}
                                    originalUnits={stock.units}
                                    id={stock._id}
                                    boolean={true}
                                    />
                                    <SellModal
                                    stockName={stock.stockName}
                                    boughtPrice=  { stock.boughtPrice} 
                                    originalUnits={stock.units}
                                    id={stock._id}
                                    boolean={false}
                                    />
                                </td>
                        
                            </tr>
                        })
                    }

                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Portfolio 