// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from 'react-scroll'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaWhatsapp, FaTwitter } from 'react-icons/fa'
function Header() {
	return (
		<div id={'top'}>
			<div className={'w-1/2 items-center'}>
				{Intro()}
				{Social()}
			</div>
			<div className={'w-1/2'}>Image</div>
		</div>
	)
}

function Intro() {
	const [sub_text] = useTypewriter({
		words: [
			"Full Stack Web Developer", "Graphic Designer",
			"Support Technician", "Startup Entrepreneur",
			"Digital Marketer", "Content Creator",
		],
		loop: true,
		typeSpeed: 50,
		deleteSpeed: 20,
		delaySpeed: 1500,
	});
	return (
		<div className={'flex flex-col py	-5'}>
			<h4 id={'title'} className={"text-lg font-normal uppercase"}>
				Welcome to my World
			</h4>
			<h1 id={'text'} className={"text-6xl font-bold text-white"}>
				Hi, I am
				<span id={'name'} className={"text-secondaryColor capitalize"}>
					&nbsp;Samm Wakeni
				</span>
			</h1>
			<h2 id={'subtitle'} className={"text-2xl font-normal"}>
				<span className={"uppercase"}>{sub_text}.</span>
				<Cursor cursorBlinking={false} cursorStyle={'|'} cursorColor={'#fff'} />
			</h2>
			<p id={'bio'} className={"text-lg font-normal justify"}>
				A software developer professional based in East London, South Africa,<br />
				with over 5 years of experience working in the industry.
			</p>
		</div>
	)
}


function Social() {
	return (
		<div>
			<h2 className={'text-base py-5 underline uppercase'}>
				Connect with me
			</h2>
			<div className={'flex gap-4'}>
				<Link className={'socialIcon'}>
					<FaLinkedinIn />
				</Link>
				<Link className={'socialIcon'}>
					<FaGithub />
				</Link>
				<Link to={'social'} className={'socialIcon'}>
					<FaFacebookF />
				</Link>
				<Link className={'socialIcon'}>
					<FaWhatsapp />
				</Link>
				<Link className={'socialIcon'}>
					<FaTwitter />
				</Link>
			</div>
		</div>
	)
}
export default Header