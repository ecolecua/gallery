import UploadForm from './components/UploadForm';

import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css//magnific-popup.css';
import './assets/css//tooplate-style.css';

import './assets/js/background.cycle.js';
import './assets/slick/slick.min.js';
import './assets/js/jquery.magnific-popup.min.js';
import './assets/js/main.js';

import { useEffect, useState } from 'react';
import { storage } from './firebase/config';
import { ref, listAll, getDownloadURL } from 'firebase/storage';

import Logo from './assets/img/logo/logotipo.png';
import LogoLetter from './assets/img/logo/logo-letter.png';

const DEFAULT_IMAGE =
  'https://www.adobe.com/express/feature/image/media_16ad2258cac6171d66942b13b8cd4839f0b6be6f3.png?width=750&format=png&optimize=medium';

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
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
      </div>
      <div class="tm-main-container">
        <div class="tm-top-container">
          <nav id="tmNav" class="tm-nav">
            <a class="tm-navbar-menu" href="#">
              Menu
            </a>
            <ul class="tm-nav-links">
              <li class="tm-nav-item active">
                <a
                  href="#"
                  data-linkid="0"
                  data-align="right"
                  class="tm-nav-link"
                >
                  Intro
                </a>
              </li>
              <li class="tm-nav-item">
                <a
                  href="#"
                  data-linkid="1"
                  data-align="right"
                  class="tm-nav-link"
                >
                  About
                </a>
              </li>
              <li class="tm-nav-item">
                <a
                  href="#"
                  data-linkid="2"
                  data-align="middle"
                  class="tm-nav-link"
                >
                  Work
                </a>
              </li>
              {/* <li class="tm-nav-item">
                <a
                  href="#"
                  data-linkid="3"
                  data-align="left"
                  class="tm-nav-link"
                >
                  Contact
                </a>
              </li> */}
            </ul>
          </nav>

          <header class="tm-site-header-box tm-bg-dark">
            <h1 class="tm-site-title">
              <img src={LogoLetter} alt="" /> <br />
              Tu Colección Fotográfica en un Solo Lugar
            </h1>
          </header>
        </div>

        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="tm-content">
                <section class="tm-section tm-section-0">
                  <h2 class="tm-section-title mb-3 font-weight-bold">
                    Galería Digital
                  </h2>
                  <div class="tm-textbox tm-bg-dark">
                    <h3>
                      <strong>
                        ¡Almacena y Comparte tus Recuerdos Fotográficos!
                      </strong>
                    </h3>
                    <p class="mb-0">
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
                    class="tm-link"
                  >
                    Read More
                  </a>
                </section>

                <section class="tm-section tm-section-1">
                  <div class="tm-textbox tm-textbox-2 tm-bg-dark">
                    <h2 class="tm-text-blue mb-4">About Me</h2>
                    <p class="mb-4">
                      <strong>José Alejandro Gómez Castro</strong>
                    </p>
                    <p class="mb-4">
                      Tecnólogo Creativo, Desarrollador Moderno / Ing. de
                      Javascript & Músico
                    </p>
                    <p class="mb-0">
                      - E-mail: <strong>josegomez.dev@gmail.com</strong> <br />
                      WhatsApp / Telegram: <strong>
                        +(506) 6240-2974
                      </strong>{' '}
                      <br />
                      <hr />
                      Github: <strong>Repositorio Digital</strong> <br />
                      Medium: <strong>Blog (josegomezdev)</strong> <br />
                      LinkedIn: <strong>Perfil Profesional</strong> <br />
                      <br />
                    </p>
                    <a
                      href="#"
                      id="tm_work_link"
                      data-linkid="2"
                      class="tm-link m-0"
                    >
                      Next
                    </a>
                  </div>
                </section>

                <section class="tm-section tm-section-2 mx-auto">
                  <UploadForm />
                  <br />
                  <br />
                  <br />
                  <div class="grid gallery tm-gallery">
                    {removeDuplicates(data).map((url, idx) => {
                      return (
                        <figure
                          key={`key-${idx}`}
                          class="effect-goliath tm-gallery-item"
                        >
                          <img
                            width={150}
                            height={100}
                            src={url}
                            alt={`Img-${idx}`}
                            class=""
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

                <section class="tm-section tm-section-3 tm-section-left">
                  <form action="" class="tm-contact-form" method="post">
                    <div class="form-group mb-4">
                      <input
                        type="text"
                        id="contact_name"
                        name="contact_name"
                        class="form-control"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div class="form-group mb-4">
                      <input
                        type="email"
                        id="contact_email"
                        name="contact_email"
                        class="form-control"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div class="form-group mb-4">
                      <textarea
                        rows="4"
                        id="contact_message"
                        name="contact_message"
                        class="form-control"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <div class="form-group mb-0">
                      <button type="submit" class="btn tm-send-btn tm-fl-right">
                        Send
                      </button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </div>
        </div>

        <div class="tm-bottom-container">
          <div class="tm-barcode-box">
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
