import "./SingleLocation.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleLocation = () => {
  const params = useParams();

  const baseURL = process.env.REACT_APP_API_URL + "/location";
  const [LocationDetails, setLocationDetails] = useState();

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
  }, []);

  if (!LocationDetails) {
    return <p>Loading...</p>;
  }
  console.log(LocationDetails);
  return (
    <main className="home">
      <div>
        {" "}
        <p>{LocationDetails.contact}</p>
        <p>{LocationDetails.location_name}</p>
        <p>{LocationDetails.id}</p>
        <p>{LocationDetails.number}</p>
      </div>
    </main>
  );
};

export default SingleLocation;
