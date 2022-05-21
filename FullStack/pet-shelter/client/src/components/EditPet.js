import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const EditPet = (props) => {
  const { id } = useParams();
  const [errors, setErrors] = useState({});

    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDescription, setPetDescription] = useState("");
    const [petSkillOne, setPetSkillOne] = useState("");
    const [petSkillTwo, setPetSkillTwo] = useState("");
    const [petSkillThree, setPetSkillThree] = useState("");

  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/pet/${id}`)
      .then((res) => {
        console.log(res.data);
        setPetName(res.data.name);
        setPetType(res.data.type);
        setPetDescription(res.data.description);
        setPetSkillOne(res.data.skillOne);
        setPetSkillTwo(res.data.skillTwo);
        setPetSkillThree(res.data.skillThree);
      })
      .catch((err) => {
        console.log(err.res);
        setErrors(err.res.data.err.errors);
      });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("inside handler", petName);

    axios
      .put(`http://localhost:5001/api/pet/${id}`, {
        name: petName,
        type: petType,
        description: petDescription,
        skillOne: petSkillOne,
        skillTwo: petSkillTwo,
        skillThree: petSkillThree,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data.err.errors);
        setErrors(err.response.data.err.errors);
      });
  };

  return (
    <form onSubmit={submitHandler}>
         <Link to="/"> Home </Link>
      <div className="form-group">
        <label htmlFor="name">Pet's Name</label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
        />
        {errors.name ? (
          <p className="text-danger"> {errors.name.message} </p>
        ) : null}

        <label htmlFor="type">Type of Animal</label>
        <input
          type="text"
          id="type"
          className="form-control"

          value={petType}
          onChange={(e) => setPetType(e.target.value)}
        />
        {errors.type ? (
          <p className="text-danger"> {errors.type.message} </p>
        ) : null}

        <label htmlFor="description">Description</label>
        <input
          type="text"
          
          id="description"
          className="form-control"

          value={petDescription}
          onChange={(e) => setPetDescription(e.target.value)}
        />
        {errors.description ? (
          <p className="text-danger"> {errors.description.message} </p>
        ) : null}

        <label htmlFor="skillOne">Skill 1:</label>
        <input
          type="text"
          
          id="skillOne"
          className="form-control"
          
          value={petSkillOne}
          onChange={(e) => setPetSkillOne(e.target.value)}
        />

        <label htmlFor="skillTwo">Skill 2:</label>
        <input
          type="text"
          id="skillTwo"
          className="form-control"
          value={petSkillTwo}
          onChange={(e) => setPetSkillTwo(e.target.value)}
        />

        <label htmlFor="skillThree">Skill 3:</label>
        <input
          type="text"
          className="form-control"
          id="skillThree"
          value={petSkillThree}
          onChange={(e) => setPetSkillThree(e.target.value)}
        />
     
     </div>
      <button className="btn btn-success" type="submit">
      Submit
      </button>
     
    </form>
  );
};

export default EditPet;

