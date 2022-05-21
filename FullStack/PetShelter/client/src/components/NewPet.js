import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewPet() {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkillOne] = useState("");
    const [skillTwo, setSkillTwo] = useState("");
    const [skillThree, setSkillThree] = useState("");

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:5001/api/pets", {
                name,
                type,
                description,
                skillOne,
                skillTwo,
                skillThree,
            })
            .then((res)=>{
                navigate("/");
            })
            .catch((err)=>{
                console.log("Error Response Data", err.response.data);
                setErrors(err.response.data.error.errors);
            });
    };

    return (

        <form onSubmit={submitHandler}>
            <label>Pet Name:</label>
            <input
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                {errors.name && <p className="text-danger"> {errors.name.message} </p>}

            <label>Pet Type:</label>
            {/* See Wireframe: will this be a dropdown or text input? */}
            {/* this will either be input or select before onChange */}
            <input type="text"
            value={type}
            onChange={(e)=>setType(e.target.value)}
            />
            {errors.type && <p className="text-danger"> {errors.type.message} </p>}

            <label>Pet Description:</label>
            <input type="text"
            value={description}
            onChange={(e)=> setDescription(e.target.value)}
            />
            {errors.description && <p className="text-danger"> {errors.description.message} </p>}

            <label>Skill One:</label>
            <input type="text"
            value={skillOne}
            onChange={(e) => setSkillOne(e.target.value)}
            />
            {errors.skillOne && <p className="text-danger"> {errors.skillOne.message} </p>}

            <label>Skill Two:</label>
            <input type="text"
            value={skillTwo}
            onChange={(e) => setSkillTwo(e.target.value)}
            />
            {errors.skillTwo && <p className="text-danger"> {errors.skillTwo.message} </p>}

            <label>Skill Three:</label>
            <input type="text"
            value={skillThree}
            onChange={(e) => setSkillThree(e.target.value)}
            />
            {errors.skillThree && <p className="text-danger"> {errors.skillThree.message} </p>}

            <br />
            <input type="submit" value="Add Pet" />
            </form>
            );
}


export default NewPet;