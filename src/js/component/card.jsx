import React from "react";

//create your first component
//props o propiedades
const Card = (props) => {
    console.log(props);
	return (
        <div className="card" style={{width: "18rem"}}>
        <img src={props.url} alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.uwu}</h5>
        </div>
      </div>
	);
};

export default Card;