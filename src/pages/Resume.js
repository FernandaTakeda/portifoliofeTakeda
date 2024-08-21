import React from 'react';

const Resume = () => {
  return (
    <div>
      <h1>Meu Currículo</h1>

      <section>
        <h2>Experiência Profissional</h2>
        <p>Detalhes sobre suas experiências de trabalho...</p>
      </section>

      <section>
        <h2>Formação Acadêmica</h2>
        <p>Detalhes sobre sua formação acadêmica...</p>
      </section>

      <a href="/assets/curriculo.pdf" download>Baixar Currículo (PDF)</a>
    </div>
  );
};

export default Resume;
