import React from "react";
import "../styles/components/pages/HomePage.css";

const HomePage = () => {

  return (
    <div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <div>
            <img
              src="./img/1demonslayer.jpg"
              className="img-thumbnail"
              width="100%"
              alt="Kingdom Hearts"
            />
          </div>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris...
          </p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <div>
            <img
              src="./img/2kingdomhearts.png"
              className="img-thumbnail"
              width="100%"
              alt="Kingdom Hearts"
            />
          </div>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris...
          </p>
        </div>
        <div className=" ol-lg-4 col-md-4 col-sm-6 col-xs-12">
          <div>
            <img
              src="./img/3pokemon.png"
              className="img-thumbnail"
              width="100%"
              alt="Kingdom Hearts"
            />
          </div>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris...
          </p>
        </div>
      </div>
      <hr />

      <h2>Libros Leídos este año</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">2022</th>
            <th scope="col">Nombre</th>
            <th scope="col">Género</th>
            <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Heartless - Marissa Meyer</td>
            <td>Fantasía - Romance</td>
            <td>Terminado</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Demon Slayer: Kimetsu no Yaiba</td>
            <td>Manga</td>
            <td>Terminado</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Romper el Circulo - Colleen Hoover</td>
            <td>En Curso</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
