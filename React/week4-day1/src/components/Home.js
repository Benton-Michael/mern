import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  const [digimons, setDigimons] = useState([]);
  useEffect(() => {
    // this will only run when the component is mounted
    axios
      .get("https://digimon-api.vercel.app/api/digimon")
      .then((response) => setDigimons(response.data))
      .catch((error) => console.log("ERROR", error));
  }, []);

  return (
    <div className="container">
      {digimons.map((digimon) => (
        <div className="card">
          <img src={digimon.img} alt={digimon.name} />
          <h2>{digimon.name}</h2>
          <p>{digimon.level}</p>
          {/* using interpolation on line below */}
          {/* below is nots in run-time so no props. but we can pass it state */}
          {/* passing as a state to the digimon component */}
          <Link to={`${"digimons"}/${digimon.name}`} state={digimon}>
            {""}
            Get Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;

// useEffect because we are talking to an API
