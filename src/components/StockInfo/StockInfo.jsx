import "./StockInfo.scss";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleLocationStock = () => {
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
    <main className="home">
      <h2>Stock available in this Borough: {params.id}</h2>
      {locationStock.length === 0 ? (
        <p>No stock items found for this location.</p>
      ) : (
        <ul>
          {locationStock.map((item) => (
            <li key={item.id}>
              <strong>{item.item_name}</strong> - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default SingleLocationStock;
