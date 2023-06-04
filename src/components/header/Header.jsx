// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from 'react-scroll'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa'
import Navbar from "../navbar/Navbar";
import { AppData } from "../../constants/AppData";
import { png } from "../../assets";
function Header() {
	const bio = AppData[0];
	// const con = bio.personal.contact
	// const job = bio.personal.jobs
	// const soc = bio.personal.social

	// console.log(bio.personal.jobs)
	let str = [];
	for (let i = 0; i < bio.personal.jobs.length; i++) {
		str.push(bio.personal.jobs[i]);
	}

	const [sub_text] = useTypewriter({
		words: str,
		loop: true,
		typeSpeed: 50,
		deleteSpeed: 35,
		delaySpeed: 2000,
	});
	return (
		<header id={'header'} className={'w-full h-[800px] py-2 flex flex-col border-b-[1px]'}>
			<Navbar />
			<div id={'top'} className={'flex'}>
				<div className={'w-1/2 items-center'}>
					<div className={'flex flex-col pb-3 gap-3'}>
						<h4 id={'title'} className={"text-lg text-greenColor font-normal uppercase"}>
							Hello, There Welcome!
						</h4>
						<h1 id={'text'} className={"text-6xl font-bold text-white"}>
							I AM
							<span id={'name'} className={"text-secondaryColor capitalize"}>
								&nbsp;{bio.personal.f_name + " " + bio.personal.l_name}
							</span>
						</h1>
						<h2 id={'subtitle'} className={"text-2xl font-normal"}>
							<span className={"uppercase ml-2"}>
								-{sub_text}
								< Cursor cursorBlinking={true} cursorStyle={'|'} cursorColor={'#bd6178'} />
							</span>


						</h2>
						<p id={'bio'} className={"text-lg font-normal justify title-text leading-6 tracking-wide"}>
							{bio.personal.intro}
						</p>
					</div>
					<div className={'social'}>
						<h2 className={'text-base py-5 bold uppercase'}>
							Connect with me
						</h2>
						<div className={'flex gap-4'}>
							<Link href={bio.personal.social[0]} target="_blank" className={'socialIcon'}>
								<FaLinkedinIn />
							</Link>
							<Link to={bio.personal.social[1]} target="_blank" className={'socialIcon'}>
								<FaGithub />
							</Link>
							<Link to={bio.personal.social[3]} target="_blank" className={'socialIcon'}>
								<FaFacebookF />
							</Link>
							<Link to={bio.personal.social[2]} target="_blank" className={'socialIcon'}>
								<FaWhatsapp />
							</Link>
						</div>
					</div>
				</div>
				<div className={'w-full lgl:w-1/2 flex justify-center rounded-10 mx-20'}>
					<img src={png} className={"h-[410px] w-200px bg-gradient-to-r to-[] from-[#1F2937] shadow-shadowOne"} />
				</div>
			</div>
		</header>

	)
}

export default Header