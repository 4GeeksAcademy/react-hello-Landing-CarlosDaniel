import React from "react";

import Card from "../component/Card/Card.jsx";
import Jumbotron from "../component/Jumbotron/Jumbotron.jsx";
import Navbar from "../component/NavBar/Navbar.jsx";
import Footer from "../component/Footer/Footer.jsx";


//create your first component
const Home = () => {
	return (
		<div>
		<Navbar/>
		<div className="container">
			<Jumbotron/>
			<div className="d-flex">
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
		</div>
		<Footer/>
		</div>
	);
};

export default Home;
