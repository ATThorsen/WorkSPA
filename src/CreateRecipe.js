import React, { useState, useEffect} from "react";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function AddRecipeFunction(){
  const [PostId, setPostId] = useState([]);
  const [data, setData] = useState([]);

  function AddRecipeFunction() {
    let addRecipeName = document.getElementById("addRecipeName").value; 
    let addPreparationTime = document.getElementById("addPreparationTime").value; 
    let adddirections = document.getElementById("adddirections").value; 


    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        dish: addRecipeName,
        preparationTime: addPreparationTime,
        directions: adddirections



      }),
    };
    fetch(URL+"/api/recipe/add", requestOptions)
      .then((response) => response.json())
      .then((data) => setPostId(data.id));
  }


return (
  <div className="container">
  <div className="jumbotron">
    <h1 className="display-4 text-primary">Add a dish</h1>
    <input type="text" id="addRecipeName" placeholder="dish"/>
    <input type="text" id="addPreparationTime" placeholder="preparationTime"/>
    <input type="text" id="adddirections" placeholder="directions"/>
    <button  type="submit" onClick={AddRecipeFunction}>Submit</button> 
  </div>
  </div>

  );

};


  
