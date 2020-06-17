import React, { useState, useEffect} from "react";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function AddRecipiToWeek(){
  const [PostId, setPostId] = useState([]);
  const [data, setData] = useState([]);

  function AddRecipiToWeek() {
    let addWeekID = document.getElementById("addWeekID").value; 
    let addRecipeID = document.getElementById("addRecipeID").value; 
 


    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        weekID: addWeekID,
        RecipeID: addRecipeID,
      



      }),
    };
    fetch(URL+"/api/weekmenu/addrecipe", requestOptions)
      .then((response) => response.json())
      .then((data) => setPostId(data.id));
  }


return (
  <div className="container">
  <div className="jumbotron">
    <h1 className="display-4 text-primary">Put weekID and RecipeID</h1>
    <input type="text" id="addWeekID" placeholder="WeekID"/>
    <input type="text" id="addRecipeID" placeholder="RecipeID"/>
 
    <button  type="submit" onClick={AddRecipiToWeek}>Submit</button> 
  </div>
  </div>

  );

};


  
