# Stock Investing Web App 

This Web-App is a capstone project to fulfill the reuirements of the Software Engineering course provided by the Institute of Data. This project will explore investing in the stock market with an easy-to-use user interface and a MongoDb database for a user to update their stock portfolio.

## Purpose 

With the recent cost-of-living crisis, individuals have been seeking new methods to attain a secondary income. While some individuals have opted for a secondary casual/part-time job the rise in stock-market investing has also risen.

### Setup Instructions - Windows

1. Install MongoDB onto computer if haven't already
2. Download and unzip the  main branch onto your computer.
3. Open folder using a code editor (Visual Studio Code is recommended)
4. Open a terminal and run the following commands :
   
`cd backend`

`npm install`

`npm start`

6. Open another terminal and run the following commands
   
`npm install`

`npm start`

### How to Use the Stock Web-App

1. Enter a stock symbol (AMZN, MSFT, AAPL, etc) on the search bar before pressing enter or clicking on the search icon
  - Company data will render onto screen
  - Current stock information will render onto screen
2. Press Buy
  - Enter quantity of stock you would like to purchase (e.g. 3)
  - Total Value will be automatically calculated and displayed on the Modal
  - Press "Agree" or "Cancel" depending on choice
3. View Portfolio
  - Users Stock history will be displayed in a table format
  - User has option to update portfolio through the "sell" or "buy" buttons
4. Analytics Page
  - This page contains a range of professional trading tools used by one of the biggest trading companies called TradingView.
  - I've used their widgets to give the website a more professional user experience. 


### Future Improvements
- Deployment into an AWS EC2 instance
- Encryption/https
- Caching
- AI Stock Prediction

