import "./Order.scss";
import OrderStock from "../../components/OrderStock/OrderStock";

const Order = () => {
  return (
    <main className="order">
      <div>
        <OrderStock />
      </div>
    </main>
  );
};

export default Order;
