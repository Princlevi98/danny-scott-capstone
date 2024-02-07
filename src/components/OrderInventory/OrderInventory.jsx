import "./OrderInventory.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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
    <main className="select-item">
      <h2 className="select-item__title"></h2>
      {locationStock.length === 0 ? (
        <p className="select-item__text"></p>
      ) : (
        <ul className="select-item__list">
          {locationStock.map((item) => (
            <Link to="">
              <li className="select-item__list-item" key={item.id}>
                <strong>{item.item_name}</strong> - Quantity: {item.quantity}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Orderquantity;
