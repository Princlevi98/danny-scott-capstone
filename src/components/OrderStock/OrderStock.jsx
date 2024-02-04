import "./OrderStock.scss";
import { useState } from "react";
import axios from "axios";

const StockItem = ({
  locationId,
  itemId,
  itemName,
  currentQuantity,
  onQuantityReduced,
}) => {
  const [quantityToReduce, setQuantityToReduce] = useState(1);

  const reduceStockQuantity = async () => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/stock/${locationId}/stock/${itemId}/reduce`,
        { quantityToReduce }
      );

      if (onQuantityReduced) {
        onQuantityReduced();
      }
      console.log(`Quantity reduced for ${itemName}:`, response.data);
    } catch (error) {
      console.error("Error reducing stock quantity:", error);
    }
  };

  const incrementQuantity = () => {
    setQuantityToReduce(quantityToReduce + 1);
  };

  const decrementQuantity = () => {
    // Ensure the quantity does not go below 1
    setQuantityToReduce(Math.max(quantityToReduce - 1, 1));
  };

  return (
    <div className="stock-item">
      <h3>Selected Item: {itemName}</h3> {/* Added title for selected item */}
      <p>Current Quantity: {currentQuantity}</p>
      <div>
        <button onClick={decrementQuantity}>-</button>
        <input
          type="number"
          value={quantityToReduce}
          onChange={(e) => setQuantityToReduce(Number(e.target.value))}
          min={1}
        />
        <button onClick={incrementQuantity}>+</button>
      </div>
      <button onClick={reduceStockQuantity}>Reduce Quantity</button>
    </div>
  );
};

export default StockItem;
