import { getDummyOrders } from "../../data/dummyData";
import OrderTableRow from "./OrderTableRow";

const OrderTable = () => {
  // getDummyOrders function will be replaced by a function that makes a GET request to our backend
  const dummyOrders = getDummyOrders();

  return (
    <>
      <h1>Orders History</h1>
      <table>
        <thead>
          <tr>
            <th>Created</th>
            <th> Status </th>
            <th> Type</th>
            <th> Ticker</th>
            <th> Quantity</th>
            <th> Price</th>
          </tr>
        </thead>
        <tbody>
          {dummyOrders.map((order, index) => (
            <OrderTableRow key={index} order={order} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default OrderTable;
