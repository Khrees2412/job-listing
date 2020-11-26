import React from "react";
import "./Card.css";
import Filters from "./Filters";
export default function Card({
	location,
	languages,
	postedAt,
	role,
	id,
	isNew,
	featured,
	position,
	tools,
	level,
	company,
	contract,
	logo
}) {
	return (
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
			<Filters role={role} languages={languages} level={level} tools={tools} />
		</div>
	);
}
