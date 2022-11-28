import React from "react";
import "../styles/components/layouts/Snow.css"
import "../styles/components/pages/HomePage.css"

const HomePage = () => {

    const Snow = () => {
      for(let i = 0; i<150; i++){
        let snow = document.createElement("div");
        snow.classList.add("snowflake");
        snow.innerHTML = "❅"
  
        document.body.appendChild(snow);
      }
    }

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        sequi aperiam magnam quisquam repellat quibusdam facere dolorum illum
        ipsa laudantium laboriosam iure doloremque cupiditate, nam assumenda,
        voluptatum aliquid, dignissimos unde!
      </p>
      <div className="text-center">
        <img src="./img/2.jpg" width="50%" alt="Shadowhunters" />
      </div>
      <Snow />
    </div>
    
  );
};

export default HomePage;
