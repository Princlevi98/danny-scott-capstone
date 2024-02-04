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
    <main className="home">
      <div>
        {" "}
        <p>Borough: {LocationDetails.location_name}</p>
        <p>Area lead: {LocationDetails.contact}</p>
        <p>phone number: {LocationDetails.number}</p>
      </div>
    </main>
  );
};

export default SingleLocation;
