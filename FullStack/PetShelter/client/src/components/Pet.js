import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// A Pet Details page with information about one specific pet
function Pet() {
  // state for the pet object
  const [pet, setPet] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("ID", id);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/pets/${id}`)
      .then((res) => {
        console.log("Pet", res.data);
        setPet(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // the delete/ Adopt ME 
  const handleDelete = () => {
    axios
      .delete(`http://localhost:5001/api/pets/${id}`)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>{pet.name}</h2>
      <p>Pet Type:{pet.type}</p>
      <p>Pet Description:{pet.description}</p>
      <p>Pet Skills {pet.skillOne} </p>
      <p>{pet.skillTwo}</p>
      <p>{pet.skillThree}</p>

      <button onClick={handleDelete}>Adopt Me Now!</button>
    </div>
  );
}

export default Pet;
