import React from 'react';
import fotoPerfil from '../assets/fotoPerfil.jpg';

const Home = () => {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Adiciona centralização horizontal
    flexDirection: 'column', // Alinha os itens verticalmente
    textAlign: 'center', // Centraliza o texto
  };

  const imageStyle = {
    width: '200px',
    height: '200px',
    marginBottom: '20px', // Espaço abaixo da imagem
  };

  const descriptionStyle = {
    maxWidth: '600px',
    margin: '0 auto', // Centraliza o parágrafo
    textAlign: 'justify',
  };

  const descriptionStyleIdiomas = {
    maxWidth: '600px',
    margin: '15px auto',
    textAlign: 'justify',
  };

  const contactSectionStyle = {
    margin: '20px auto',
    textAlign: 'center', // Centraliza o texto da seção de contato
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const inputStyle = {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: '#836FFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#191970',
  };

  return (
    <div style={{ textAlign: 'center' }}> {/* Centraliza todo o conteúdo dentro do div */}
      <h1 style={{ margin: '20px' }}>Bem-Vindo! Eu sou a Fernanda Takeda.</h1>
      <div style={containerStyle}>
        <img src={fotoPerfil} alt="Foto de Perfil" style={imageStyle} />
        <p style={descriptionStyle}>
          Estudante de Bacharelado em Ciência da Computação no Instituto Federal de Santa Catarina (IFSC) - Lages.
          Tenho 21 anos, sou de Londrina/Paraná, crescida em São Joaquim/Santa Catarina e Liberdade/São Paulo e
          atualmente morando em Lages/Santa Catarina.
        </p>
      </div>
      <p style={descriptionStyleIdiomas}>
        Além da área da tecnologia, gosto de aprender idiomas como por exemplo: Inglês, Japonês, Espanhol e Coreano.
      </p>

      <section style={descriptionStyleIdiomas}>
        <h2>Áreas de Interesse</h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <img
            style={{ width: '100px', height: '100px', marginRight: '15px' }}
            src="/assets/front-end.jpg"
            alt="Desenvolvimento Front-End"
          />
          <div style={{ flex: 1, textAlign: 'justify' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Desenvolvimento Web</div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>Back-End: Node.js, Django e ASP.NET.</li>
              <li>Front-End: JavaScript, Vue.js, HTML e CSS.</li>
            </ul>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <img
            style={{ width: '100px', height: '100px', marginRight: '15px' }}
            src="/assets/back-end.jpg"
            alt="Desenvolvimento Back-End"
          />
          <div style={{ flex: 1, textAlign: 'justify' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Desenvolvimento Mobile</div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>Nativo: Java/Kotlin (Android) e Swift (iOS).</li>
            </ul>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <img
            style={{ width: '100px', height: '100px', marginRight: '15px' }}
            src="/assets/mobile.jpg"
            alt="Desenvolvimento Mobile"
          />
          <div style={{ flex: 1, textAlign: 'justify' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Desenvolvimento de Software:</div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>Linguagens: Java, Python e C#.</li>
            </ul>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <img
            style={{ width: '100px', height: '100px', marginRight: '15px' }}
            src="/assets/cloud-computing.jpg"
            alt="Computação em Nuvem"
          />
          <div style={{ flex: 1, textAlign: 'justify' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Computação em Nuvem:</div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>Provedores de Nuvem: AWS e Microsoft Azure.</li>
            </ul>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', maxWidth: '800px', margin: '0 auto' }}>
          <img
            style={{ width: '100px', height: '100px', marginRight: '15px' }}
            src="/assets/cloud-computing.jpg"
            alt="Computação em Nuvem"
          />
          <div style={{ flex: 1, textAlign: 'justify' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Containers:</div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>Docker e Kubernetes</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={contactSectionStyle}>
        <h2>Contato</h2>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
          <p style={{ margin: '0', marginRight: '10px' }}>Acesso as minhas redes:</p>
          <a
            href="https://br.linkedin.com/in/fernanda-takeda-5b8466324?trk=people-guest_people_search-card&original_referer=https%3A%2F%2Fwww.linkedin.com%2F"
            style={{ marginRight: '10px' }}>
            LinkedIn
          </a>
          <a
            href="https://github.com/FernandaTakeda">
            GitHub
          </a>
        </div>

        <form style={formStyle}>
          <input type="text" placeholder="Seu Nome*" style={inputStyle} />
          <input type="email" placeholder="Seu E-mail*" style={inputStyle} />
          <textarea placeholder="Sua Mensagem" style={{ ...inputStyle, minHeight: '90px' }}></textarea>
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={e => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
            onMouseOut={e => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}>
            Enviar
          </button>
        </form>
      </section>

      <footer style={descriptionStyleIdiomas}>
        <p class="mb-3">
          <strong>Fernanda Megumi Takeda</strong>
        </p>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a href="./" class="nav-link text-body-secondary">Página inicial</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-body-secondary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Links
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="./resume">Currículo</a>
              </li>
              <li>
                <a class="dropdown-item" href="./portfolio">Portfólio</a>
              </li>
            </ul>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
