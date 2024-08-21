import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Olá, Eu sou [Seu Nome]</h1>
      <img src="/assets/minha-foto.jpg" alt="Minha Foto" />
      <p>Descrição sobre você...</p>

      <section>
        <h2>Tecnologias e Habilidades</h2>
        <ul>
          <li>React <i className="tech-icon">🛠</i></li>
          <li>JavaScript <i className="tech-icon">🛠</i></li>
          {/* Adicione mais habilidades aqui */}
        </ul>
      </section>

      <section>
        <h2>Contato</h2>
        <a href="https://linkedin.com/in/seu-perfil">LinkedIn</a>
        <a href="https://github.com/seu-perfil">GitHub</a>
        <form>
          <input type="text" placeholder="Seu Nome" />
          <input type="email" placeholder="Seu Email" />
          <textarea placeholder="Sua Mensagem"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
