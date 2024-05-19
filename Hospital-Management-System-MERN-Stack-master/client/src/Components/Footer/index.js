import { Container, Row, Col } from "reactstrap";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialIcon } from "react-social-icons";
function Footer() {
	return (
		<footer>
			<Container fluid={true}>
				<Row>
					<Col sm="12" md="4">
						<h2>Contact Us</h2>
						<ul className="list-unstyled">
							<li>
								<FontAwesomeIcon icon={faPhone} />
								+94 112596396
							</li>
							<li>
								<a
									href="https://gmail.com"
									style={{ color: "white" }}
								>
									<FontAwesomeIcon icon={faEnvelope} />{" "}
									inquries@ninewales.com
								</a>
							</li>
						</ul>
					</Col>

					<Col sm="12" md="4">
						<h2>Address</h2>
						<p>H.NO 82/568</p>
						<p>Kirimandala Mawatha</p>
						<p>Colombo</p>
					</Col>
					<Col sm="12" md="4">
						<SocialIcon
							style={{ margin: "5px" }}
							url="https://facebook.com"
							fgColor="white"
						/>
						<SocialIcon
							style={{ margin: "5px" }}
							url="https://twitter.com"
							fgColor="white"
						/>
						<SocialIcon
							style={{ margin: "5px" }}
							url="https://linkedin.com"
							fgColor="white"
						/>
						<SocialIcon
							style={{ margin: "5px" }}
							url="https://github.com/sainikhil1605"
							fgColor="white"
						/>
					</Col>
				</Row>
				<Row>
					<Col sm="12">
						<p>©Copyright 2021 ninewales Hospitals</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}
export default Footer;
