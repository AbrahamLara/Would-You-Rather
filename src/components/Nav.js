import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Nav.css';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class Nav extends Component {
	logoutUser = () => {
		this.props.dispatch(setAuthedUser('none'));
	}
	render () {
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
							Leaderboard
						</NavLink>
					</li>
				</ul>
				<ul className="menu sub-menu">
					<li className="menu-item no-rm">
					{this.props.userIsAuthed ?
						(<button
							className="btn bg-light-blue"
							onClick={this.logoutUser}
						>
							Logout
						</button>)
						: (<button className="btn bg-light-blue">Login</button>)}
					</li>
				</ul>
			</nav>
		);
	}
}

function mapStateToProps ({ authedUser }) {
	return {
		userIsAuthed: authedUser !== 'none',
	}
}

export default connect(mapStateToProps)(Nav);