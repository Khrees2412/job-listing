import PhotoSnap from "./components/Images/logopng/photosnap.png";
import Manage from "./components/Images/logopng/manage.png";
import Account from "./components/Images/logopng/account.png";
import myHome from "./components/Images/logopng/myhome.png";
import Loop from "./components/Images/logopng/loop-studios.png";
import Faceit from "./components/Images/logopng/faceit.png";
import Shortly from "./components/Images/logopng/shortly.png";
import Insure from "./components/Images/logopng/insure.png";
import Eyecam from "./components/Images/logopng/eyecam-co.png";
import AirFilter from "./components/Images/logopng/the-air-filter-company.png";

const data = [
	{
		id: 1,
		company: "Photosnap",
		logo: PhotoSnap,
		new: true,
		featured: true,
		position: "Senior Frontend Developer",
		role: "Frontend",
		level: "Senior",
		postedAt: "1d ago",
		contract: "Full Time",
		location: "USA Only",
		languages: ["HTML", "CSS", "JavaScript"],
		tools: []
	},
	{
		id: 2,
		company: "Manage",
		logo: Manage,
		new: true,
		featured: true,
		position: "Fullstack Developer",
		role: "Fullstack",
		level: "Midweight",
		postedAt: "1d ago",
		contract: "Part Time",
		location: "Remote",
		languages: ["Python"],
		tools: ["React"]
	},
	{
		id: 3,
		company: "Account",
		logo: Account,
		new: true,
		featured: false,
		position: "Junior Frontend Developer",
		role: "Frontend",
		level: "Junior",
		postedAt: "2d ago",
		contract: "Part Time",
		location: "USA Only",
		languages: ["JavaScript"],
		tools: ["React", "Sass"]
	},
	{
		id: 4,
		company: "MyHome",
		logo: myHome,
		new: false,
		featured: false,
		position: "Junior Frontend Developer",
		role: "Frontend",
		level: "Junior",
		postedAt: "5d ago",
		contract: "Contract",
		location: "USA Only",
		languages: ["CSS", "JavaScript"],
		tools: []
	},
	{
		id: 5,
		company: "Loop Studios",
		logo: Loop,
		new: false,
		featured: false,
		position: "Software Engineer",
		role: "FullStack",
		level: "Midweight",
		postedAt: "1w ago",
		contract: "Full Time",
		location: "Worldwide",
		languages: ["JavaScript"],
		tools: ["Ruby", "Sass"]
	},
	{
		id: 6,
		company: "FaceIt",
		logo: Faceit,
		new: false,
		featured: false,
		position: "Junior Backend Developer",
		role: "Backend",
		level: "Junior",
		postedAt: "2w ago",
		contract: "Full Time",
		location: "UK Only",
		languages: ["Ruby"],
		tools: ["RoR"]
	},
	{
		id: 7,
		company: "Shortly",
		logo: Shortly,
		new: false,
		featured: false,
		position: "Junior Developer",
		role: "Frontend",
		level: "Junior",
		postedAt: "2w ago",
		contract: "Full Time",
		location: "Worldwide",
		languages: ["HTML", "JavaScript"],
		tools: ["Sass"]
	},
	{
		id: 8,
		company: "Insure",
		logo: Insure,
		new: false,
		featured: false,
		position: "Junior Frontend Developer",
		role: "Frontend",
		level: "Junior",
		postedAt: "2w ago",
		contract: "Full Time",
		location: "USA Only",
		languages: ["JavaScript"],
		tools: ["Vue", "Sass"]
	},
	{
		id: 9,
		company: "Eyecam Co.",
		logo: Eyecam,
		new: false,
		featured: false,
		position: "Full Stack Engineer",
		role: "Fullstack",
		level: "Midweight",
		postedAt: "3w ago",
		contract: "Full Time",
		location: "Worldwide",
		languages: ["JavaScript", "Python"],
		tools: ["Django"]
	},
	{
		id: 10,
		company: "The Air Filter Company",
		logo: AirFilter,
		new: false,
		featured: false,
		position: "Front-end Dev",
		role: "Frontend",
		level: "Junior",
		postedAt: "1mo ago",
		contract: "Part Time",
		location: "Worldwide",
		languages: ["JavaScript"],
		tools: ["React", "Sass"]
	}
];

export default data;
