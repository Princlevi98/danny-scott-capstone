import "./Order.scss";
import StockItem from "../../components/OrderStock/OrderStock";
import StockSelection from "../../components/StockSelection/StockSelection";

const Order = () => {
  return (
    <main className="order">
      <div>
        <StockSelection />
        <StockItem />
      </div>
    </main>
  );
};

export default Order;
