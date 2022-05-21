import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const PetForm = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skillOne, setSkillOne] = useState("");
  const [skillTwo, setSkillTwo] = useState("");
  const [skillThree, setSkillThree] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5001/api/pet", {
        name,
        type,
        description,
        skillOne,
        skillTwo,
        skillThree,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log("Error Response Data", err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Link to="/">Home</Link>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Pet's Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name ? (
                <p className="text-danger"> {errors.name.message} </p>
              ) : null}

              <label htmlFor="type">Type of Animal</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setType(e.target.value)}
                value={type}
              />
              {errors.type ? (
                <p className="text-danger"> {errors.type.message} </p>
              ) : null}

              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
              {errors.description ? (
                <p className="text-danger"> {errors.description.message} </p>
              ) : null}

              <label htmlFor="skillOne">Skill 1:</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setSkillOne(e.target.value)}
                value={skillOne}
              />

              <label htmlFor="skillTwo">Skill 2:</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setSkillTwo(e.target.value)}
                value={skillTwo}
              />

              <label htmlFor="skillThree">Skill 3:</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setSkillThree(e.target.value)}
                value={skillThree}
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Add Pet
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PetForm;
