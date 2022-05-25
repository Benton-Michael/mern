import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// get all pets function
function PetList() {
  // a state to hold the pets data
  // an empty array is used
  const [pets, setPets] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/pets")
      .then((res) => {
        // setting the pets with the response data
        setPets(res.data);
      })
      .catch((err) => {
        console.log("Error getting all pets", err);
      });
  }, []);
  // to Adopt the pet we delete it from the DB
  const handleDelete = (petID) => {
    axios
      .delete(`http://localhost:5001/api/pets/${petID}`)
      .then((res) => {
        console.log(res);
        setPets(pets.filter((pet) => pet._id !== petID));
      })
      .catch((err) => {
        console.log("Adoption Error", err);
      });
  };

  return (
    <div className="pet">
      The Pet List here
      {pets.map((pets, index) => (
        <div className="pet" key={pets._id}>
          <div key={index}>
            <h2> {pets.name} </h2>
            <br />
            <Link to={`/pets/${pets._id}`}> Pet Details </Link>
            <span> | </span>
            <Link to={`/pets/edit/${pets._id}`}> Update Pet info </Link>
            <br />
            <button onClick={() => handleDelete(pets._id)}>Adopt</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PetList;
