import React, { Fragment } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Card from "./components/Card";
import data from "./stats";

function App() {
	return (
		<Fragment>
			<div className="container">
				{data.map((item, index) => (
					<Card
						key={index}
						id={item.id}
						company={item.company}
						postedAt={item.postedAt}
						contract={item.contract}
						featured={item.featured}
						role={item.role}
						languages={item.languages}
						location={item.location}
						level={item.level}
						logo={item.logo}
						position={item.position}
						isNew={item.new}
						tools={item.tools}
					/>
				))}
			</div>
			<Footer />
		</Fragment>
	);
}

export default App;
