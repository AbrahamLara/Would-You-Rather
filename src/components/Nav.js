import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Nav.css';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class Nav extends Component {
	state = {
		showDropdown: '',
	}

	// Upon clicking 'logout' setAuthedUser
	// action is dispatched with an empty
	// string to update state with no
	// authenticated user
	logoutUser = () => {
		this.props.dispatch(setAuthedUser(''));
		this.toggleNav();
	}

	// This function is for mobile responsiveness
	// to display drowpdown menu in navbar
	// when viewing web app in protrait mode
	toggleNav = () => {
		this.setState((currState) => ({
			showDropdown: currState.showDropdown ? '' : 'show',
		}));
	}

	render () {
		const { authedUser, users } = this.props
		console.log(authedUser);
		return (
			<nav className='Nav'>
				<div className='nav-mobile'>
					<button onClick={this.toggleNav} className='btn'>&#10006;</button>
					<strong>{authedUser ? users[authedUser].name : 'Would You Rather'}</strong>
				</div>
				<ul className={'nav-menu '+(this.state.showDropdown && 'nav-menu-show')}>
					<li className='nav-menu-item'>
						<NavLink onClick={this.toggleNav} to='/' exact activeClassName='active' className='nav-menu-link'>
							Home
						</NavLink>
					</li>
					<li className='nav-menu-item'>
						<NavLink onClick={this.toggleNav} to='/add' activeClassName='active' className='nav-menu-link'>
							New Question
						</NavLink>
					</li>
					<li className='nav-menu-item'>
						<NavLink onClick={this.toggleNav} to='/leaderboard' activeClassName='active' className='nav-menu-link'>
							Leader Board
						</NavLink>
					</li>
				</ul>
				<ul className={'nav-menu nav-sub-menu '+(this.state.showDropdown && 'nav-menu-show')}>
					{authedUser ? (
						<li className='nav-menu-item nav-no-rm'>
							<div>
								<span className='nav-sub-menu-user-name'>
									{authedUser in users && users[authedUser].name}
								</span>
								<span className='nav-separator'>|</span>
								<button
									className='btn nav-btn-logout'
									onClick={this.logoutUser}
								>
									Logout
								</button>
						</div>
					</li>) : <strong>Would You Rather</strong>}
				</ul>
			</nav>
		);
	}
}

// Gets authedUser and users so that the authenticated
// user's name can be displayed
function mapStateToProps ({ authedUser, users }) {
	return {
		authedUser,
		users,
	}
}

export default connect(mapStateToProps)(Nav);