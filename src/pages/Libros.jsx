import React from "react";
import "../styles/components/pages/Libros.css"
import "../styles/components/layouts/Snow.css"

const Libros = () => {
  return (
    <div className="container indexbackground mt-3">
      <h2 className="librosmios">Mis libros</h2>
      <br />
      <h4 className="flores">Book photography</h4>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div>
            <img src="./img/spiritedaway.png" width="70%" alt="spiritedaway" />
          </div>
        </div>
        <br />
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div>
            <img src="./img/onceupon.jpg" width="70%" alt="Once Upon" />
          </div>
        </div>
      </div>
      <br />

      <h4 className="heredera">More Books</h4>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div>
            <img
              className="imageItems img-thumbnail"
              src="./img/flores.png"
              width="70%"
              alt="Daughter of the moongoddess"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div>
            <img
              className="imageItems img-thumbnail"
              src="./img/heredera.png"
              width="70%"
              alt="La heredera"
            />
          </div>
        </div>
      </div>
      <br />

      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div>
            <img
              className="imageItems img-thumbnail"
              src="./img/kingdomhearts.png"
              width="70%"
              alt="Kingdom Hearts"
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <div>
            <img
              className="imageItems img-thumbnail"
              src="./img/peterpan.png"
              width="70%"
              alt="Peterpan Books"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Libros;
