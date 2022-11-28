import React from "react";
import "../styles/components/pages/Novedades.css";

const Novedades = () => {
  return (
    <div className="container">
      <main className="holder">
        <h2> Novedades</h2>
        <div className="Novedades1">
          <h3>It Starts with Us - Colleen Hoover</h3>
          <h4>It Ends with Us, #2</h4>
          <p>
            Lily and her ex-husband, Ryle, have just settled into a civil
            coparenting rhythm when she suddenly bumps into her first love,
            Atlas, again. After nearly two years separated, she is elated that
            for once, time is on their side, and she immediately says yes when
            Atlas asks her on a date.
          </p>
          <hr />
        </div>
      </main>
      <main className="holder">
        <div className="Novedades2">
          <h3>La Hija de la Diosa de la Luna - Sue Lynn Tan</h3>
          <h4>Daughter of The Moon Goddess, #SpanishEdition</h4>
          <p>
            Al crecer en la luna, Xingyin está acostumbrada a la soledad, sin
            saber que se la está ocultando del temido Emperador Celestial, que
            exilió a su madre por robar el elixir de la inmortalidad. Pero
            cuando la magia de Xingyin se manifiesta y su existencia es
            descubierta, se ve obligada a abandonar su hogar y dejar atrás a su
            madre.
          </p>
          <hr />
        </div>
      </main>
      <div className="Novedades1">
        <main>
          <h3>Cuento de Hadas - Stephen King</h3>
          <h4>Fairy Tale, #SpanishEdition</h4>
          <p>
            Charlie Reade parece un estudiante de instituto normal y corriente,
            pero carga con un gran peso sobre los hombros. Cuando él solo tenía
            diez años, su madre fue víctima de un atropello y la pena empujó a
            su padre a la bebida. Aunque era demasiado joven, Charlie tuvo que
            aprender a cuidarse solo... y también a ocuparse de su padre.
          </p>
          <hr />
        </main>
      </div>
    </div>
  );
};

export default Novedades;
