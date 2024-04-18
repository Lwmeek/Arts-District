import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";

function App() {
	const [expanded, setExpanded] = useState(false);

	const handleMenu = () => {
		setExpanded(!expanded);
	};

	return (
		<>
			<Navbar expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Brand href="#">ARTS DISTRICT KITCHEN</Navbar.Brand>
					<Button className="btn rounded-0" size="lg" variant="outline-light">
						386.631.4549
					</Button>
					<button className="button" onClick={handleMenu}>
						{expanded ? (
							<IoCloseSharp className="icon" />
						) : (
							<FiMenu className="icon" />
						)}
					</button>
				</Container>
			</Navbar>
			<Nav as="div" variant="underline" defaultActiveKey="/home" className="items-menu">
				<Nav.Item>
					<Nav.Link eventKey="happy" className="mix"><p className="items-menu mb-0">HAPPY HOUR</p></Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="snacks">SNACKS</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="tacos">TACOS</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="fries">FRIES</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="burgers">BURGERS & SANDWICHES</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="salads">SALADS</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="rice bowls">RICE BOWLS</Nav.Link>
				</Nav.Item>
			</Nav>
		</>
	);
}

export default App;
