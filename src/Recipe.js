import React, { useState, useEffect} from "react";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import facade from "./apiFacade";
import FindByID from "./SearchForRecipe"


export default function Recipe(){

    const[dish, setDish] = useState([]);
    const options  = facade.makeOptions("GET", true);
    const[data, setData] = useState([]);

        function fetchAllDishes() {
        let options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        };
        fetch(URL+"/api/recipe/all", options)
          .then((res) => res.json())
          .then((data) => {
            
            setDish(data.all);
          });
      }
    
     useEffect(()=>{
        fetchAllDishes();
         }, []);      
    

    
      return (<div>
            {FindByID()}
        <h1>Dishes</h1>
        <hr/>
        <table border="1" width="50%">
        <thead>
          <tr>
            <th>Dish</th>
            <th>Preperation</th>
            <th>Directions</th>
          </tr>
        </thead>
        <tbody>
          {dish.map((Dish, x) => {
              
            return (
              <tr key={x}>
                <td>{dish[x].dish}</td>  
                <td>{dish[x].preparationTime}</td>
                <td>{dish[x].directions}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    
      </div>);  


  };


  