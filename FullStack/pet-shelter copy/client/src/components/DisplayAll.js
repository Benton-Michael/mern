import { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";

const DisplayAll = () => {
  const [allPets, setAllPets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/pet")
      .then((res) => {
        console.log(res.data);
        setAllPets(res.data);
      })
      .catch((err) => {
        console.log(err.res);
      });
  }, []); // empty array as second argument tells useEffect to run once.
  const handleDeletePet = (idFromBelow) => {
    axios
      .delete(`http://localhost:5001/api/pet/${idFromBelow}`)
      .then((res) => {
        console.log("Adoption Sucess");
        console.log(res);
        // Filter from state the Adopted Pet
        const filteredPets = allPets.filter((pet) => {
          return pet._id !== idFromBelow;
        });
        setAllPets(filteredPets);
      })
      .catch((err) => {
        console.log("Arror in Adoption", err.response);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <Link to="/new">Add a Pet to the Shelter</Link>
          <p className="purple-text"> These pets are looking for a good home! </p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Description</th>
                <th scope="col">Skills: </th>
              </tr>
            </thead>
            <tbody>
              {allPets.map((pet, index) => {
                return (
                  <tr key={pet._id}>
                    <td>{pet.name}</td>
                    <td>{pet.type}</td>
                    <td>{pet.description}</td>
                    <td>{pet.skillOne}</td>
                    <td>{pet.skillTwo}</td>
                    <td>{pet.skillThree}</td>

                    <td>
                      <Link to={`/edit/${pet._id}`}>
                        <button className="btn btn-primary">Edit</button>{" "}
                      </Link>

                      {/* <br /> */}
                      {/* Delete = Adopt */}
                      <button
                        onClick={() => handleDeletePet(pet._id)}
                        className="btn btn-success"
                      >
                        Adopt
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DisplayAll;
