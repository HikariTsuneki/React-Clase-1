import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = (props) => {
	return (
			<div className="jumbotron text-center">
			<nav class="navbar navbar-expand-lg bg-primary">
			<div className="container-fluid">
				<NavLink exact to="/" className="navbar-brand">Lauriam's Books</NavLink>
		        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		          <span className="navbar-toggler-icon" />
		        </button>
		        <div className="collapse navbar-collapse" id="navbarNav">
		          <ul className="navbar-nav">
		            <li className="nav-item">
					  <NavLink exact to="/" className="nav-link active">Home</NavLink>
		            </li>
		            <li className="nav-item">
					  <NavLink to="/libros" className="nav-link">Libros</NavLink>
		            </li>
		            <li className="nav-item">
		              <NavLink to="/novedades" className="nav-link">Novedades</NavLink>
		            </li>
		            <li className="nav-item">
					  <NavLink to="/contacto" className="nav-link">Contacto</NavLink>
		            </li>
		          </ul>
		        </div>
		      </div>
		      </nav>
			</div>
	);
}

export default Nav;