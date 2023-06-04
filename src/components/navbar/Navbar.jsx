/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { Fragment } from 'react'
import { Link } from 'react-scroll'
import profile from '../../assets/imgs/dp/profile.jpg'
import { NavLinkData } from "../../constants/Index";

function Navbar() {
	return (
		<nav className={'w-full h-16 mx-auto flex justify-between items-center bg-gray-800 px-4 py-2 fixed top-0'}>
			<div>
				<Link to={NavLinkData[0].link} spy={true} smooth={true} offset={-70} duration={600}
					className='cursor-pointer'>
					<img className={'h-12 w-12 rounded-full'} src={profile} alt={'profile image'} />
				</Link>
			</div>
			<div>
				<ul className={'flex items-center gap-3'}>
					{
						NavLinkData.map(
							({ _id, title, current, link }) => (
								<li className={'text-base font-normal text-white tracking-wide cursor-pointer my-4'}
									key={_id}>
									<Link className={'w-30 '}
										to={link}
										spy={true}
										smooth={true}
										offset={-70}
										duration={600}

										{...current ? 'className={"active"}' : ''}
									>
										{title}
									</Link>
								</li>
							)
						)
					}
				</ul>
			</div>
		</nav>
	)
}

export default Navbar