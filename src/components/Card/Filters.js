import React from "react";

const Filters = ({ filtered, setFiltered, role, level, languages, tools }) => {
	const sendInfo = e => {
		const item = e.target.innerHTML;
		if (filtered && !filtered.includes(item)) {
			setFiltered([...filtered, item]);
		}
		return;
	};
	const lang = languages
		? languages.map((language, index) => {
				return (
					<button onClick={e => sendInfo(e)} className="span lang" key={index}>
						{language}
					</button>
				);
		  })
		: "";

	const stack = tools
		? tools.map((tool, index) => {
				return (
					<button onClick={e => sendInfo(e)} className="span stack" key={index}>
						{tool}
					</button>
				);
		  })
		: "";
	return (
		<>
			<div className="filters">
				<button onClick={e => sendInfo(e)} className="span role">
					{role}
				</button>
				<button onClick={e => sendInfo(e)} className="span level">
					{level}
				</button>
				{lang}
				{stack}
			</div>
		</>
	);
};
export default Filters;
