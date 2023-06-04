/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { Fragment } from 'react'
import { Link } from 'react-scroll'
import profile from '../../assets/imgs/dp/profile.jpg'
import { NavLinkData } from "../../constants/Index";

function Navbar() {
	return (
		<nav className={'w-full h-18 mx-auto flex justify-between items-center bg-gray-800 px-4 py-2 mb-10'}>
			<div>
				<Link to={'header'} spy={true} smooth={true} offset={-70} duration={600} className='cursor-pointer'>
					<img className={'h-10 w-10 rounded-full'} src={profile} alt={'profile image'} />
				</Link>
			</div>
			<div>
				<ul className={'flex items-center gap-16'}>
					{
						NavLinkData.map(
							({ _id, title, current, link }) => (
								<li className={'text-base font-normal text-white tracking-wide cursor-pointer ' +
									'hover:text-secondaryColor px-2 duration-300 transition-all ease-in-out'}
									key={_id}>
									<Link
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