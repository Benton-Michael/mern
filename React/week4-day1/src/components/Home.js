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
    <div>
      {digimons.map((digimon) => (
        <div>
          <img src={digimon.img} alt={digimon.name} />
          <h2>{digimon.name}</h2>
          <p>{digimon.level}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;

// useEffect because we are talking to an API
