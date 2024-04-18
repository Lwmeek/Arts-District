import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { FaYelp, FaInstagram, FaFacebookF, FaGoogle } from "react-icons/fa";
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
				<div className="drop-menu-content d-flex flex-column align-items-center gap-5">
					<ul className="list d-flex flex-column gap-4">
						<li className="list-item">HOME</li>
						<li className="list-item">MENU</li>
						<li className="list-item">ABOUT</li>
						<li className="list-item">THE BREWERY</li>
						<li className="list-item">CONTACT</li>
						<li className="list-item">SUBSCRIBE</li>
					</ul>
					<div className="socials d-flex gap-5 text-center align-items-end">
						<FaYelp className="social-link"/>
						<FaInstagram className="social-link"/>
						<FaFacebookF className="social-link"/>
						<FaGoogle className="social-link"/>
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
					<Nav.Link eventKey="snacks"><p>SNACKS</p></Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="tacos"><p>TACOS</p></Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="fries"><p>FRIES</p></Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="burgers"><p>BURGERS & SANDWICHES</p></Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="salads"><p>SALADS</p></Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="rice bowls"><p>RICE BOWLS</p></Nav.Link>
				</Nav.Item>
			</Nav>
		</>
	);
}

export default App;
