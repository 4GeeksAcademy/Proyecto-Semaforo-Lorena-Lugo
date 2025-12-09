import React, { useState } from "react";



//create your first component
export function Home() {

	const [color, setColor] = useState("red");
	console.log(color);

	const changeColor = () => {
		if (color === "red") setColor("yellow");
		else if (color === "yellow") setColor("green");
		else setColor  ("red");

	};

	return (

		<div className="container">
			<div className="traffic-light">

				<div

					onClick={() => setColor("red")}
					className={"light red " + (color === "red" ? "glow" : "")}></div>
				<div
					onClick={() => setColor("yellow")}
					className={"light yellow " + (color === "yellow" ? "glow" : "")}></div>
				<div
					onClick={() => setColor("green")}
					className={"light green " + (color === "green" ? "glow" : "")}></div>

			</div>


			<button onClick={changeColor} className="boton">Siguiente</button>

		</div>
	);
};

export default Home;