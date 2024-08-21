import React from 'react';

const Portfolio = () => {
  return (
    <div>
      <h1>Meu Portfólio</h1>
      <section>
        <h2>Projetos</h2>
        <div>
          <h3>Projeto 1</h3>
          <img src="/assets/projeto1.jpg" alt="Projeto 1" />
          <p>Descrição do projeto...</p>
          <a href="/assets/projeto1.pdf">PDF do Projeto</a>
          <a href="https://github.com/seu-repositorio/projeto1">Repositório GitHub</a>
          <a href="https://site-do-projeto.com">Site do Projeto</a>
        </div>
        {/* Adicione mais projetos aqui */}
      </section>
    </div>
  );
};

export default Portfolio;
