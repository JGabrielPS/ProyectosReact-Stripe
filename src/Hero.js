import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Infraestructura de pagos para Internet</h1>
          <p>
            Millones de empresas de todos los tamaños, desde startups hasta
            empresas de la lista Fortune 500, usan el software y las API de
            Stripe para aceptar pagos, enviar transferencias y gestionar sus
            negocios en Internet.
          </p>
          <button className="btn">Start Now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
