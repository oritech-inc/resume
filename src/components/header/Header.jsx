// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from 'react-scroll'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaWhatsapp, FaTwitter } from 'react-icons/fa'
import Navbar from "../navbar/Navbar";
function Header() {
	return (
		<header id={'header'} className={'w-full h-full  flex flex-col border-b-[1px] border-b-grayColor'}>
			<Navbar />
			<div id={'top'}>
				<div className={'w-1/2 items-center'}>
					{Intro()}
					{Social()}
				</div>
				<div className={'w-1/2'}>Image</div>
			</div>
		</header>

	)
}

function Intro() {
	const [sub_text] = useTypewriter({
		words: [
			"Developer", "Designer",
			"Technician", "Entrepreneur",
			"Marketer", "Freelancer",
		],
		loop: true,
		typeSpeed: 50,
		deleteSpeed: 20,
		delaySpeed: 1500,
	});
	return (
		<div className={'flex flex-col py-5 gap-4'}>
			<h4 id={'title'} className={"text-lg text-gray-200 font-normal uppercase"}>
				Hi, Welcome to my World!
			</h4>
			<h1 id={'text'} className={"text-6xl font-bold text-white"}>
				I&apos;M
				<span id={'name'} className={"text-secondaryColor capitalize"}>
					&nbsp;Samm Wakeni
				</span>
			</h1>
			<h2 id={'subtitle'} className={"text-2xl font-normal"}>
				<span className={"uppercase"}>{sub_text}.</span>
				<Cursor cursorBlinking={false} cursorStyle={'|'} cursorColor={'#fff'} />
			</h2>
			<p id={'bio'} className={"text-lg font-normal justify"}>
				A software developer based in East London, South Africa, My expertise and
				experience make me a valuable asset in delivering exceptional solutions.
				I am dedicated to continuously enhancing my skills and staying at the forefront of technological advancements.
			</p>
		</div>
	)
}


function Social() {
	return (
		<div className={'social'}>
			<h2 className={'text-base py-5 bold uppercase'}>
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