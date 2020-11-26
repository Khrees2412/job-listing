import React from "react";

const Filters = ({ role, level, languages, tools }) => {
	const lang = languages
		? languages.map((language, index) => {
				return (
					<button className="span lang" key={index}>
						{language}
					</button>
				);
		  })
		: "";

	const stack = tools
		? tools.map((tool, index) => {
				return (
					<button className="span stack" key={index}>
						{tool}
					</button>
				);
		  })
		: "";
	return (
		<div className="filters">
			<button className="span role">{role}</button>
			<button className="span level">{level}</button>
			{lang}
			{stack}
		</div>
	);
};
export default Filters;
