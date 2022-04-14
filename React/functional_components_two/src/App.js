import React from "react";
import "./App.css";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Product
        title={"AquaWater"}
        description={
          "Made from organic scrap metal. Thirsty? Grab one and add ice for a refreshing drink"
        }
        cost={"459.99 ETH"}
        initalStock={1200}
      />
      <Product
        title={"SuperSmooth Cars"}
        description={"These cars are handcrafted using legos"}
        cost={"€79,999.00"}
        initalStock={200}
      />
      <Product
        title={"iPod Pasta"}
        description={"Mix three parts iPod Nano and one part chicken broth"}
        cost={"€9.99 + unlimited garlic bread"}
        initalStock={100}
      />
      <Product
        title={"BaconBeats"}
        description={"We've replaced the headband with a slice of bacon."}
        cost={"$1.99 + unlimited garlic bread (for a limited time only)"}
        initalStock={300}
      />
    </div>
  );
}

export default App;
