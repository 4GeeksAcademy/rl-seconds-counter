import React from "react";

//include images into your bundle

import { Counter } from "./Counter";

//create your first component
const Home = () => {
	return (
		<div>
			<>
			<Counter />												
			</>
		</div>
	);
};

export default Home;