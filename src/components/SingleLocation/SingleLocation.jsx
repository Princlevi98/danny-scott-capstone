import "./SingleLocation.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleLocation = () => {
  const params = useParams();

  const baseURL = process.env.REACT_APP_API_URL + "/location";
  const [LocationDetails, setLocationDetails] = useState(null);

  const fetchLocation = async (id) => {
    try {
      const url = `${baseURL}/${id}`;
      const response = await axios.get(url);
      setLocationDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchLocation(params.id);
  }, [params.id]);

  if (!LocationDetails) {
    return <p>Select Location ...</p>;
  }
  console.log(LocationDetails);
  return (
    <main className="details">
      <div>
        {" "}
        <p>
          <strong>Borough</strong>: {LocationDetails.location_name}
        </p>
        <p>
          <strong>Area lead</strong>: {LocationDetails.contact}
        </p>
        <p>
          <strong>phone number</strong>: {LocationDetails.number}
        </p>
      </div>
    </main>
  );
};

export default SingleLocation;
