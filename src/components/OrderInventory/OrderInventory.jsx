import "./OrderInventory.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Orderquantity = () => {
  const params = useParams();

  const baseURL = process.env.REACT_APP_API_URL + "/location";
  const [locationStock, setLocationStock] = useState([]);

  const fetchStock = async (id) => {
    try {
      const url = `${baseURL}/${id}/stock`;
      const response = await axios.get(url);
      setLocationStock(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStock(params.id);
  }, [params.id]);

  if (!locationStock) {
    return <p>Loading...</p>;
  }

  return (
    <main className="stock-info">
      <h2 className="stock-info__title"></h2>
      {locationStock.length === 0 ? (
        <p className="stock-info__text"></p>
      ) : (
        <ul className="stock-info__list">
          {locationStock.map((item) => (
            <li className="stock-info__list-item" key={item.id}>
              <strong>{item.item_name}</strong> - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Orderquantity;
