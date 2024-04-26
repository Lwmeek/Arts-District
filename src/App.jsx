import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import {
	FaYelp,
	FaInstagram,
	FaFacebookF,
	FaGoogle,
	FaRegClock,
	FaPhone,
	FaStar,
} from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { GrLocationPin } from "react-icons/gr";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Collapse from "react-bootstrap/Collapse";

function App() {
	const [expanded, setExpanded] = useState(false);

	const handleMenu = () => {
		setExpanded(!expanded);
		{
			expanded
				? document.querySelector(".drop-menu").classList.add("show")
				: document.querySelector(".drop-menu").classList.remove("show");
		}
	};

	return (
		<>
			<div className="drop-menu">
				<div className="d-flex justify-content-between p-3">
					<Button className="btn rounded-0" size="lg" variant="outline-dark">
						386.631.4549
					</Button>
					<IoCloseSharp className="icon" onClick={handleMenu} />
				</div>
				<div className="drop-menu-content d-flex flex-column align-items-center">
					<ul className="list d-flex flex-column gap-4">
						<li className="list-item">HOME</li>
						<li className="list-item">MENU</li>
						<li className="list-item">ABOUT</li>
						<li className="list-item">THE BREWERY</li>
						<li className="list-item">CONTACT</li>
						<li className="list-item">SUBSCRIBE</li>
					</ul>
					<div className="socials d-flex gap-5 text-center align-items-end">
						<FaYelp className="social-link" />
						<FaInstagram className="social-link" />
						<FaFacebookF className="social-link" />
						<FaGoogle className="social-link" />
					</div>
				</div>
			</div>

			<Navbar expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Brand href="#">ARTS DISTRICT KITCHEN</Navbar.Brand>
					<Button className="btn rounded-0" size="lg" variant="outline-light">
						386.631.4549
					</Button>
					<button className="button" onClick={handleMenu}>
						<FiMenu className="icon" />
					</button>
				</Container>
			</Navbar>
			<h1 className="phrase">Good Times with Great Friends</h1>
			<div>
				<div className="d-flex gap-2 fs-5 mb-3 text-left">
					<GrLocationPin className="symbol" />
					<address className="fw-bold">
						1510 SOUTH MAIN STREET LAS VEGAS, NV 89104 LOCATED INSIDE OF{" "}
						<span className="special"><p className="baker mb-0">ABLE BAKER BREWING</p><p className="number">702.479.6355</p></span>
					</address>
				</div>
			</div>
			<div className="d-flex gap-2 fs-4 mb-5">
				<FaRegClock className="symbol" />
				<h2>
					<div>
						<span className="special-day">SUN-THURS:</span> 11:30AM-11PM{" "}
					</div>
					<div>
						<span className="special-day">FRI-SAT:</span> 11:30AM-MIDNIGHT
					</div>
				</h2>
			</div>
			<p className="fs-1 fw-bold text-center">Serving Tasty <br></br>Bites Since 2019</p>
			<div>
				<h3>PERFECT PINT PARTNERS</h3>
				<p>
					Our menu features foodie-friendly street and finger foods for you to
					pair with the perfect pint. We feature many classic pub favorites
					while incorporating subtle but unique Southeast Asian flavors to give
					your taste buds a wake up call. Our small bites are perfect for
					sharing while our sandwiches are hearty enough to satisfy the
					insatiable. You can enjoy our food the same whether you’re here for a
					quick lunch or enjoying a casual night out with friends and family. Be
					present and talk to each other!
				</p>
			</div>
			<section className="menu">
				<h2>Menu</h2>
				<Nav
					as="div"
					variant="underline"
					defaultActiveKey="/home"
					className="items-menu"
				>
					<Nav.Item>
						<Nav.Link eventKey="happy" className="mix">
							<p className="menu-items mb-0">HAPPY HOUR</p>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="snacks">
							<p className="menu-items mb-0">SNACKS</p>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="tacos">
							<p className="menu-items mb-0">TACOS</p>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="fries">
							<p className="menu-items mb-0">FRIES</p>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="burgers">
							<p className="menu-items mb-0">BURGERS & SANDWICHES</p>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="salads">
							<p className="menu-items mb-0">SALADS</p>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="rice bowls">
							<p className="menu-items mb-0">RICE BOWLS</p>
						</Nav.Link>
					</Nav.Item>
				</Nav>
			</section>
			<section className="about-us">
				<h3>WHO WE ARE</h3>
				<p>
					When we opened 595 Craft and Kitchen in June 2017, our vision was to
					create an unassuming watering hole for the locals. In a town with
					endless options for bars and lounges, we found it challenging to find
					a friendly bar with a solid craft beer list, good food, and
					non-gaming/non-smoking. We wanted to provide friends and neighbors
					alike with the original form of social networking; a fun easy going
					bar, and a cold pint. Our staunch belief in providing exceptional
					quality products with friendly service in a clean and welcoming
					setting has helped us earn the reputation among the locals as one of
					the best hidden gems in Las Vegas. Arts District Kitchen is the
					culmination of giving our best to the community by providing great
					food, service, and atmosphere. Tucked inside one of the premier
					breweries in Nevada, this collaboration project allows us another
					opportunity to create a memorable setting for you to catch up with
					friends and make new ones over tasty bites and a refreshing beer.
				</p>
			</section>
			<section className="about-ableBaker">
				<h3>ABOUT ABLE BAKER</h3>
				<p>
					Able Baker Brewing derives its name from the first two atomic bombs
					detonated at the Nevada Test Site. These two test explosions were
					code­named after the military’s phonetic alphabet of the time, making
					them tests “Able” and “Baker”. The experimentation at the Nevada Test
					Site led to the refining of the Atomic Bomb and the ushering in of the
					Nuclear Age. This was a notable time in Nevada as “Atomic Blast”
					viewing parties were commonplace and several “Miss Atomic” beauty
					queens were crowned. The Atomic Age influences our artwork and
					concepts while allowing us to give a respectful nod to Nevada’s unique
					state history.
				</p>
				<button>VISIT ABLE BAKER</button>
				<a href="">VIEW TAP LIST</a>
			</section>
			<div className="contact-us">
				<p>google maps</p>
				<h3>CONTACT</h3>
				<GrLocationPin />
				<address>
					1510 South Main Street Las Vegas, NV 89104 Located inside of Able
					Baker Brewing
				</address>
				<FaRegClock />
				<p>Sun-Thurs: 11:30am-10pm Fri-Sat: 11:30am-11pm</p>
				<FaPhone />
				<a href="tel:+702.479.6355">702.479.6355</a>
				<form action="submit">
					<FiMessageCircle />
					<h4>MESSAGE US</h4>
					<button>SEND MESSAGE</button>
				</form>
			</div>
			<section className="mail-list">
				<FaStar />
				<h4>JOIN OUR MAILING LIST</h4>
				<p>
					Sign up for our newsletter and learn about special events and
					promotions before we announce them anywhere else!
				</p>
				<input type="email" name="" id="" placeholder="Email Address" />
				<button>SUBSCRIBE</button>
			</section>
			<footer>
				<p>© 2024 Arts District Kitchen. All Rights Reserved.</p>
				<p>Site Design & Development</p>
				<p>Timic Ivey</p>
			</footer>
		</>
	);
}

export default App;
