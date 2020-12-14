import React from "react";
import "./Card.css";

export default function Card({
	location,
	languages,
	postedAt,
	role,
	isNew,
	featured,
	position,
	tools,
	level,
	company,
	contract,
	logo,
	filtered,
	setFiltered
}) {
	return (
		<>
			<div className={featured ? "card-body special" : "card-body"}>
				<img src={logo} alt="logo" />
				<div className="semi-box">
					<div className="spec">
						<h4 className="name">{company}</h4>
						<div>
							<span className={isNew ? "new" : ""}>{isNew ? "NEW!" : ""}</span>
							<span className={featured ? "featured" : ""}>{featured ? "FEATURED" : ""}</span>
						</div>
					</div>
					<span className="position">{position}</span>

					<div className="gray-info">
						<ul className="list">
							<li>{postedAt}</li>
							<li>{contract}</li>
							<li>{location}</li>
						</ul>
					</div>
				</div>
				<Filters
					filtered={filtered}
					setFiltered={setFiltered}
					role={role}
					languages={languages}
					level={level}
					tools={tools}
				/>
			</div>
		</>
	);
}

const Filters = ({ filtered, setFiltered, role, level, languages, tools }) => {
	const sendTag = e => {
		const item = e.target.innerHTML;
		if (filtered && !filtered.includes(item)) {
			setFiltered([...filtered, item]);
		}
		return;
	};
	const lang = languages
		? languages.map((language, index) => {
				return (
					<button onClick={e => sendTag(e)} className="span lang" key={index}>
						{language}
					</button>
				);
		  })
		: "";

	const stack = tools
		? tools.map((tool, index) => {
				return (
					<button onClick={e => sendTag(e)} className="span stack" key={index}>
						{tool}
					</button>
				);
		  })
		: "";
	return (
		<>
			<div className="filters">
				<button onClick={e => sendTag(e)} className="span role">
					{role}
				</button>
				<button onClick={e => sendTag(e)} className="span level">
					{level}
				</button>
				{lang}
				{stack}
			</div>
		</>
	);
};
