import "./StockSelection.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import StockItem from "../OrderStock/OrderStock";
import { Link } from "react-router-dom";

const StockSelection = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [stockItems, setStockItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const fetchLocations = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/location`
      );
      setLocations(response.data);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  const fetchStockItems = async (locationId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/stock/${locationId}`
      );
      setStockItems(response.data);
    } catch (error) {
      console.error("Error fetching stock items:", error);

      setStockItems([]);
    }
  };

  const handleLocationSelect = (locationId) => {
    console.log("Selected location:", locationId);
    setSelectedLocation(locationId);

    fetchStockItems(locationId);

    setSelectedItem(null);
  };

  const handleStockItemSelect = (itemId) => {
    const selectedItem = stockItems.find((item) => item.id === itemId);
    console.log("Selected item:", selectedItem);
    setSelectedItem(selectedItem);
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  useEffect(() => {}, [selectedItem]);

  return (
    <main className="order-stock">
      <h2 className="order-stock__title">Select a Location</h2>
      {locations.map((location, index) => (
        <Link
          to={`/order/${location.id}`}
          key={location.id}
          className={`order-stock__location order-stock__location-${index} && selected`}
        >
          {/* <button
            
            onClick={() => handleLocationSelect(location.id)}
          > */}
          {location.location_name}
          {/* </button> */}
        </Link>
      ))}

      {selectedLocation && (
        <>
          <h2 className="stock__selected-location">
            Stock Items for Location {selectedLocation}
          </h2>
          {stockItems.length > 0 ? (
            stockItems.map((item) => (
              <StockItem
                key={item.id}
                locationId={selectedLocation}
                itemId={item.id}
                itemName={item.item_name}
                currentQuantity={item.quantity}
                onQuantityReduced={() => {}}
                onSelect={() => handleStockItemSelect(item.id)}
              />
            ))
          ) : (
            <p className="stock__text">
              No stock items available for this location.
            </p>
          )}
        </>
      )}

      {selectedItem && (
        <div className="stock__item-container">
          <h2 className="stock__item-name">Selected Item</h2>
          <p className="stock__text">{selectedItem.item_name}</p>
          <p className="stock__text">
            Current Quantity: {selectedItem.quantity}
          </p>
        </div>
      )}
    </main>
  );
};

export default StockSelection;
