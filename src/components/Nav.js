import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav () {
	return (
		<nav>
			<ul className="menu">
				<li className="menu-item">
					<NavLink to='/' exact activeClassName='active' className='menu-link'>
						Home
					</NavLink>
				</li>
				<li className="menu-item">
					<NavLink to='/add' activeClassName='active' className='menu-link'>
						New Question
					</NavLink>
				</li>
				<li className="menu-item">
					<NavLink to='/leaderboard' activeClassName='active' className='menu-link'>
						Home
					</NavLink>
				</li>
			</ul>
			<ul className="menu sub-menu">
				<li className="menu-item no-rm">
				<button className="btn bg-light-blue">Login</button>
				</li>
			</ul>
		</nav>
	);
}