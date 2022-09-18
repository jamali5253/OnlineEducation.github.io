import React from "react";
import { useState } from "react";
const Contact = () => {
  const [data, SetData] = useState({
    Name: "",
    Surname: "",
    Email: "",
    Phone: "",
    Message: "",
  });
  const Inputval = (Event) => {
    const Name = Event.target.name;
    const Value = Event.target.value;
    console.log(Name);
    console.log(Value);

    SetData((pre) => {
      return {
        ...pre,
        [Name]: Value,
      };
    });
  };
  const PageForm = (event) => {
    event.preventDefault();
    alert(
      `Hello ${data.Name} How are you we Will Contact Soon on your email ${data.Email}`
    );
    SetData("");
  };
  return (
    <div className="sect sect--padding-bottom">
      <div className="container">
        <div className="row">
          <h1 className="row__title">Contact Us </h1>
          <h2 className="row__sub">Feel free to ask any questions</h2>
        </div>
        <div className="row row--margin">
          <div className="col-md-1" />
          <div className="col-md-4">
            <div className="contacts">
              <a href="#" className="contacts__link">
                <img src="https://image.ibb.co/kcVou6/path3000.png" />
                <h1 className="contacts_title-ag">
                  Bricks<span className="contacts--light">.io</span>
                </h1>
              </a>
              <p className="contacts__address">
                Dist,Hyderabad
                <br />
                Sindh - 1100
                <br />
                Pakistan
              </p>
              <p className="contacts__info">
                tel.{" "}
                <a href="#" className="contacts__info-link">
                  +92 234 567 890
                </a>
              </p>
              <p className="contacts__info">
                m.{" "}
                <a href="#" className="contacts__info-link">
                  info@bricks.io
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <form id="contact" className="form" onSubmit={PageForm}>
              <div className="form-group">
                <select className="form__field form__select">
                  <option selected value onChange={Inputval}>
                    Choose topic*
                  </option>
                  <option value={1}>Pricing</option>
                  <option value={2}>Success Stories</option>
                </select>
              </div>
              <div className="form-group">
                <div className="form__field--half">
                  <input
                    type="text"
                    name="Name"
                    onChange={Inputval}
                    value={data.Name}
                    placeholder="Name*"
                    className="form__field form__text"
                  />
                </div>
                <div className="form__field--half">
                  <input
                    type="text"
                    name="Surname"
                    onChange={Inputval}
                    value={data.Surname}
                    placeholder="Surname"
                    className="form__field form__text"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form__field--half">
                  <input
                    type="text"
                    name="Email"
                    onChange={Inputval}
                    value={data.Email}
                    placeholder="Email address*"
                    className="form__field form__text"
                  />
                </div>
                <div className="form__field--half">
                  <input
                    type="text"
                    name="Phone"
                    onChange={Inputval}
                    value={data.Phone}
                    placeholder="Phone number"
                    className="form__field form__text"
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea
                  type="text"
                  name="Message"
                  onChange={Inputval}
                  value={data.Message}
                  placeholder="Your message*"
                  className="form__field form__textarea"
                  defaultValue={""}
                />
                <button className="btn btn--up btn--width" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
