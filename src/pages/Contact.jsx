import React from "react";
import "../styles/components/pages/Contact.css"

const Contact = () => {
  return (
    <div className="container formulario">
      <h2>Contacto</h2>
      <form>
        <label for="fname">First Name</label>
        <input
        className="form-control"
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />

        <label for="lname">Last Name</label>
        <input
        className="form-control"
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />

        <label for="country">Country</label>
        <select id="country" className="form-control" name="country">
          <option value="australia">Argentina</option>
          <option value="canada">Canada</option>
          <option value="usa">Chile</option>
          <option value="usa">Uruguay</option>
        </select>

        <label for="subject">Subject</label>
        <textarea
        className="form-control"
          id="subject"
          name="subject"
          placeholder="Escribe algo..."
        ></textarea>

        <input type="submit" className="btn btn-info mt-2" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
