import React from "react";
import Navbar from "./navbar.jsx"; 
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<>
			<div className="bg-dark text-warning p-3 d-flex">
				<h1>Contador: {props.numero6}{props.numero5}{props.numero4}{props.numero3}{props.numero2}{props.numero1}</h1>
			</div>

		</>
	);
};

export default Home;
