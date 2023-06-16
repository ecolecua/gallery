/* eslint-disable */

import UploadForm from './components/UploadForm';

import './App.css';
import './assets/css//magnific-popup.css';
import './assets/css//tooplate-style.css';

import './assets/js/background.cycle.js';
import './assets/slick/slick.min.js';
import './assets/js/jquery.magnific-popup.min.js';
// import './assets/js/main.js';

import { useEffect, useState } from 'react';
import { storage } from './firebase/config';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

import Logo from './assets/img/logo/logotipo.png';
import LogoLetter from './assets/img/logo/logo-letter.png';

const dataRef = ref(storage, 'images/');

function App() {
  const [data, setData] = useState([]);

  const removeDuplicates = (arr) => {
    return [...new Set(arr)];
  };

  useEffect(() => {
    listAll(dataRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setData((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="App">
      <div id="loader-wrapper">
        <div id="loader"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
      <div className="tm-main-container">
        <div className="tm-top-container">
          <nav id="tmNav" className="tm-nav">
            <a className="tm-navbar-menu" href="#">
              Menu
            </a>
            <ul className="tm-nav-links">
              <li className="tm-nav-item active">
                <a
                  href="#"
                  data-linkid="0"
                  data-align="right"
                  className="tm-nav-link"
                >
                  Intro
                </a>
              </li>
              <li className="tm-nav-item">
                <a
                  href="#"
                  data-linkid="1"
                  data-align="right"
                  className="tm-nav-link"
                >
                  About
                </a>
              </li>
              <li className="tm-nav-item">
                <a
                  href="#"
                  data-linkid="2"
                  data-align="middle"
                  className="tm-nav-link"
                >
                  Work
                </a>
              </li>
              {/* <li className="tm-nav-item">
                <a
                  href="#"
                  data-linkid="3"
                  data-align="left"
                  className="tm-nav-link"
                >
                  Contact
                </a>
              </li> */}
            </ul>
          </nav>

          <header className="tm-site-header-box tm-bg-dark">
            <h1 className="tm-site-title">
              <img src={LogoLetter} alt="" /> <br />
              Tu Colección Fotográfica en un Solo Lugar
            </h1>
          </header>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="tm-content">
                <section className="tm-section tm-section-0">
                  <h2 className="tm-section-title mb-3 font-weight-bold">
                    Galería Digital
                  </h2>
                  <div className="tm-textbox tm-bg-dark">
                    <h3>
                      <strong>
                        ¡Almacena y Comparte tus Recuerdos Fotográficos!
                      </strong>
                    </h3>
                    <p className="mb-0">
                      Nuestra aplicación revolucionaria te permite subir y
                      almacenar tus fotos en una base de datos segura y
                      confiable. Con nuestra hermosa galería digital, podrás
                      organizar, visualizar y compartir tus recuerdos
                      fotográficos de una manera fácil y conveniente.
                    </p>
                  </div>
                  <a
                    href="#"
                    id="tm_about_link"
                    data-linkid="1"
                    className="tm-link"
                  >
                    Read More
                  </a>
                </section>

                <section className="tm-section tm-section-1">
                  <div className="tm-textbox tm-textbox-2 tm-bg-dark">
                    <h2 className="tm-text-blue mb-4">About Me</h2>
                    <p className="mb-4">
                      <strong>José Alejandro Gómez Castro</strong>
                    </p>
                    <p className="mb-4">
                      Tecnólogo Creativo, Desarrollador Moderno / Ing. de
                      Javascript & Músico
                    </p>
                    <p className="mb-0">
                      - E-mail: <strong>josegomez.dev@gmail.com</strong> <br />
                      WhatsApp / Telegram: <strong>
                        +(506) 6240-2974
                      </strong>{' '}
                      <br />
                      Github: <strong>Repositorio Digital</strong> <br />
                      Medium: <strong>Blog (josegomezdev)</strong> <br />
                      LinkedIn: <strong>Perfil Profesional</strong> <br />
                      <br />
                    </p>
                    <a
                      href="#"
                      id="tm_work_link"
                      data-linkid="2"
                      className="tm-link m-0"
                    >
                      Next
                    </a>
                  </div>
                </section>

                <section className="gallery-container tm-section tm-section-2 mx-auto">
                  <UploadForm />
                  <br />
                  <div className="grid gallery tm-gallery">
                    {removeDuplicates(data).map((url, idx) => {
                      return (
                        <figure
                          key={`key-${idx}`}
                          className="effect-goliath tm-gallery-item"
                        >
                          <img
                            width={200}
                            height={100}
                            src={url}
                            alt={`Img-${idx}`}
                            className=""
                          />
                          <figcaption>
                            <h2>
                              {/* Thoughtful */}
                              {/* <span>Goliath</span> */}
                            </h2>
                            {/* <p>When Goliath comes out, you should run.</p> */}
                            <a href={url}>Ver...</a>
                          </figcaption>
                        </figure>
                      );
                    })}
                  </div>
                </section>

                <section className="tm-section tm-section-3 tm-section-left">
                  <form action="" className="tm-contact-form" method="post">
                    <div className="form-group mb-4">
                      <input
                        type="text"
                        id="contact_name"
                        name="contact_name"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="form-group mb-4">
                      <input
                        type="email"
                        id="contact_email"
                        name="contact_email"
                        className="form-control"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="form-group mb-4">
                      <textarea
                        rows="4"
                        id="contact_message"
                        name="contact_message"
                        className="form-control"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <div className="form-group mb-0">
                      <button
                        type="submit"
                        className="btn tm-send-btn tm-fl-right"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </div>

        <div className="tm-bottom-container">
          <div className="tm-barcode-box">
            <img src={Logo} alt="Bar code" />
          </div>

          <footer>
            || Copyright &copy; 2023{' '}
            <a rel="nofollow" href="https://josegomez-dev.github.io/go4lab/">
              Go4Lab
            </a>{' '}
            ||
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
