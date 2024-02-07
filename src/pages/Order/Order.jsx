import "./Order.scss";
import StockItem from "../../components/OrderStock/OrderStock";
import StockSelection from "../../components/StockSelection/StockSelection";
import OrderQuantity from "../../components/OrderInventory/OrderInventory";

const Order = () => {
  return (
    <main className="order">
      <div>
        <StockSelection />
        <OrderQuantity />
        <StockItem />
      </div>
    </main>
  );
};

export default Order;
