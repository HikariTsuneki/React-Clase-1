import React from 'react'

const Nav = (props) => {
	return (
			<div className="jumbotron text-center">
			<nav class="navbar navbar-expand-lg bg-primary">
			<div className="container-fluid">
		        <a className="navbar-brand" href="index.html">Lauriam's Books</a>
		        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		          <span className="navbar-toggler-icon" />
		        </button>
		        <div className="collapse navbar-collapse" id="navbarNav">
		          <ul className="navbar-nav">
		            <li className="nav-item">
		              <a className="nav-link active" aria-current="page" href="#">Home</a>
		            </li>
		            <li className="nav-item">
		              <a className="nav-link" href="#">Libros</a>
		            </li>
		            <li className="nav-item">
		              <a className="nav-link" href="#">Novedades</a>
		            </li>
		            <li className="nav-item">
		              <a className="nav-link" href="#">Contacto</a>
		            </li>
		          </ul>
		        </div>
		      </div>
		      </nav>
			</div>
	);
}

export default Nav;