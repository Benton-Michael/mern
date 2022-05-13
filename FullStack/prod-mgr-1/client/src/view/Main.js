import React, { useState } from "react";
import CreateProduct from "../components/CreateProduct";
import DisplayAll from "../components/DisplayAll";

const Main = (props) => {
  //Make sure our state is lifted so that both children components have access to getter and setter
  // SO - then the update that happens in CreateProduct will be reflected in DisplayAll
  const [productList, setProductList] = useState([]);

  return (
    <div>
      {/* Pass down the getter/setter via props obj, with a key of productList and a value of (the getter itself) productList. Name the key whatever you want, but this naming convention allows for less confusion and easy usage (see deconstructuring/usage in Child components)*/}
      <CreateProduct
        productList={productList}
        setProductList={setProductList}
      />

      <DisplayAll 
      productList={productList} 
      setProductList={setProductList} 
      />
    </div>
  );
};

export default Main;
