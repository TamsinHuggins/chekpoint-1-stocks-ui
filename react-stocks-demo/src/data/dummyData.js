// dummyOrders array:
// Resembles what the backend will return as data, when we make a GET request to /stocks
// Starts with 3 pre-loaded previous orders
// is returned by the getDummyOrders function
// is updated by the buyDummyStock function

const dummyOrders = [
  {
    created: "Thu Jun 06 2024 10:10:00",
    statusCode: "FILLED",
    ticker: "AMZN",
    type: "BUY",
    quantity: 10,
    price: 100.0,
  },
  {
    created: "Fri Jun 07 2024 10:30:00",
    statusCode: "FILLED",
    ticker: "TSLA",
    type: "BUY",
    quantity: 5,
    price: 240.0,
  },
  {
    created: "Sat Jun 08 2024 01:40:00",
    statusCode: "FILLED",
    ticker: "AAPL",
    type: "BUY",
    quantity: 2,
    price: 70.0,
  },
];

// getDummyTickers function:
// resembles functionality of a call to price API
// RETURNS: array of tickers

export const getDummyTickers = () => {
  return ["AMZN", "TSLA", "APL"];
};

// getDummyOrders function:
// resembles the functionality of a GET request to /stocks
// returns the dummyOrders array
// Will be replaced by a call to our backend with the following features:
// REQUEST TYPE: GET
// REQUEST URL: */stocks
// RETURNS: array of order objects with the correct keys ( created, statusCode, ticker, type, quantity, price)

export const getDummyOrders = () => {
  return dummyOrders;
};

// submitOrder function:
// resembles the functionality of writing a new order to /stocks via a POST request
// REQUEST URL: */stocks
// REQUEST TYPE: POST
// PARAMETERS: ticker, quantity, price, buyOrSell
// RETURNS: order object with the keys  ticker, quantity, price, buyOrSell

export const submitOrder = (ticker, quantity, price, buyOrSell) => {
  //find the current price of the chosen stock

  const newDummyOrder = {
    ticker: ticker,
    type: buyOrSell,
    quantity: quantity,
    price: price,
  };

  dummyOrders.push(newDummyOrder);
  console.log(dummyOrders);
  return newDummyOrder;
};
