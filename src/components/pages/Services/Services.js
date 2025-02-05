import React from "react";
import "./Services.css";
import Navbar from "../../molecules/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const Services = () => {
	return <div className='service afen-art'>
				<Navbar />
				<div className='services'>
					<div className="headings">
						<h1 className='service-heading actived'>AFEN AND REAL ESTATE</h1>
						<h1 className='service-heading actives'>AFEN AND EDUCATION</h1>
					</div>
					
					

					<div className='right-col'>
						<h1>AFEN AND ART</h1>
						<p>The digitization of contemporary and legacy African arts</p>
						<p>An NFT marketplace where tokenized versions of legacy African arts will be bought and sold</p>
						<p>Revolutionizing the African art sector by increasing the value of these arts and increasing inflow</p>
						<Link className='learn'>Learn more</Link>

						<div className="button-group">
							<Link className='btn nav-left' to='/services/real-estate'><AiOutlineArrowLeft/></Link>
							<Link className='btn nav-right' to='/services/afen-education'><AiOutlineArrowRight/></Link>
						
						</div>
					</div>
				</div>


				
			</div>;
};

export default Services;
