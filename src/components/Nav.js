import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Nav.css';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class Nav extends Component {
	logoutUser = () => {
		this.props.dispatch(setAuthedUser(''));
	}

	render () {
		const { authedUser, users } = this.props
		console.log(authedUser);
		console.log(users);
		return (
			<nav>
				<ul className='menu'>
					<li className='menu-item'>
						<NavLink to='/' exact activeClassName='active' className='menu-link'>
							Home
						</NavLink>
					</li>
					<li className='menu-item'>
						<NavLink to='/add' activeClassName='active' className='menu-link'>
							New Question
						</NavLink>
					</li>
					<li className='menu-item'>
						<NavLink to='/leaderboard' activeClassName='active' className='menu-link'>
							Leaderboard
						</NavLink>
					</li>
				</ul>
				<ul className='menu sub-menu'>
					<li className='menu-item no-rm'>
					{(authedUser !== '' && authedUser) &&
						(<div>
							<span>
								{authedUser in users && users[authedUser].name}
							</span>
							<span className='separator'>|</span>
							<button
								className='btn btn-logout'
								onClick={this.logoutUser}
							>
								Logout
							</button>
						</div>)}
					</li>
				</ul>
			</nav>
		);
	}
}

function mapStateToProps ({ authedUser, users }) {
	return {
		authedUser,
		users,
	}
}

export default connect(mapStateToProps)(Nav);