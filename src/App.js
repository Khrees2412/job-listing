import React, { Fragment, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import data from "./stats";

function App() {
	const [filtered, setFiltered] = useState([]);

	const deleteTag = tag => {
		const newList = filtered.filter(element => element !== tag);
		setFiltered(newList);
	};
	const clear = () => {
		setFiltered([]);
	};

	const collectTags = ({ role, level, tools, languages }) => {
		const tags = [role, level];
		if (filtered.length === 0) {
			return true;
		}

		if (tools) {
			tags.push(...tools);
		}

		if (languages) {
			tags.push(...languages);
		}

		return filtered.every(filter => tags.includes(filter));
	};

	const filteredData = data.filter(collectTags);
	return (
		<Fragment>
			<Header filtered={filtered} deleteTag={deleteTag} clear={clear} />
			<div className="container">
				{filteredData.map(item => (
					<Card
						key={item.id}
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
						filtered={filtered}
						setFiltered={setFiltered}
					/>
				))}
			</div>
			<Footer />
		</Fragment>
	);
}

export default App;
