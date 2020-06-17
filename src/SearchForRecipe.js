import React, { useState, useEffect} from "react";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function FindByID(){
   const[dish, setDish] = useState([]);
  const [PostId, setPostId] = useState([]);
  const [data, setData] = useState([]);

  function FindByID() {
    let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
    let findID = document.getElementById("FindByID").value; 
 
    
    fetch(URL+"/api/recipe/id/" + findID, options)
      .then((response) => response.json())
      .then((data) => {
      setDish(data)}
      );
  }


return (
  <div >
  <div >
    <h1 className="display-4 text-primary">Search for RecipeID</h1>
    
    <input type="text" id="FindByID" placeholder="Search for RecipeID"/>
    
    <button  type="submit" onClick={FindByID}>Submit</button> 
  
            </div>
                <p>{dish.dish}</p>  
                <p>{dish.preparationTime}</p>
                <p>{dish.directions}</p>
         </div>

  );
}