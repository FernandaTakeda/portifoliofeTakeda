import React from 'react';

const containerQuadradoLilas = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '10px', // Cantos arredondados
  maxWidth: '1200px', // Largura máxima
  margin: '0 auto', // Centraliza horizontalmente
};

const projectStyleNone = {
  padding: '10px',
  marginBottom: '20px',
  maxWidth: '800px',
  textAlign: 'left', // Alinha o texto à esquerda dentro do card
  margin: '0 auto', // Centraliza o card na tela
};

const projectStyle = {
  backgroundColor: '#E6E6FA',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '20px',
  marginBottom: '20px',
  maxWidth: '800px',
  textAlign: 'left', // Alinha o texto à esquerda dentro do card
  margin: '0 auto', // Centraliza o card na tela
};

const descriptionStyle = {
  maxWidth: '600px', // Ajuste conforme necessário
  margin: '0 auto', // Centraliza o parágrafo
  textAlign: 'justify', // Justifica o texto
};

const listStyle = {
  listStyleType: 'disc', // Remove marcadores das listas
  paddingLeft: '1px', // Remove a indentação
  margin: '20px',
};

const itemStyle = {
  marginBottom: '10px', // Espaçamento entre os itens

};


const inlineStyle = {
  display: 'inline-block',
  marginRight: '5px', // Espaçamento de 5 pixels entre o texto e o link
};

const Resume = () => {
  return (
    <div style={containerQuadradoLilas}>
      <div style={{ textAlign: 'center' }}> {/* Centraliza todo o conteúdo */}
        <h1 style={{ margin: '20px' }}>Meu Currículo</h1>

        <div style={projectStyle}>
          <section style={descriptionStyle}>
            <h2 style={{ margin: '10px' }}>Experiência Profissional</h2>
            <p style={descriptionStyle}>
              Atualmente, estou em busca de uma oportunidade de estágio, de trainee ou vaga de junior na área de tecnologia.
              Embora ainda não tenha experiência profissional específica nesse setor,
              estou altamente motivado e ansioso para aplicar e expandir meus conhecimentos técnicos.
            </p>
          </section>
        </div>

        <div style={projectStyleNone}></div>

          <div style={projectStyle}>
            <section style={descriptionStyle}>
              <h2 style={{ margin: '10px' }}>Formação Acadêmica</h2>
              <ul style={listStyle}>
                <li style={itemStyle}>Ensino Médio Completo, 2018-2020
                  <ul style={listStyle}>
                    <li>2018-2019: Colégio Paradigma, São Joaquim/SC.</li>
                    <li>2020: Colégio Adventista da Liberdade, CAL, São Paulo/SP.</li>
                  </ul>
               </li>
                <li style={itemStyle}>Ensino Superior Incompleto, 2021-
                  <ul style={listStyle}>
                    <li>2021: Instituto Federal de Santa Catarina, IFSC, Lages/SC.</li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>
          <div style={projectStyleNone}></div>
          <div style={projectStyle}>  
        <section style={descriptionStyle}>
          <h2 style={{ margin: '10px' }}>Cursos Relevantes e Certificações</h2>
          <ul style={listStyle}>
            <li style={itemStyle}>Idiomas:
              <ul style={listStyle}>
                <li>Inglês - Intermediário 2.</li>
                <li>Japonês - Intermediário (N4).</li>
              </ul>
            </li>
            <li style={itemStyle}>Curso de Excel, Word e PowerPoint, 2017.</li>
          </ul>
        </section>
        </div>
        <div style={projectStyleNone}></div>

        <div style={projectStyle}>
        <section style={descriptionStyle}>
          <h2 style={{ margin: '10px' }}>Contato</h2>
          <div>
            <p style={inlineStyle}>Endereço:</p>
            <a
              href="https://lattes.cnpq.br/8865404366730666"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: '#836FFF' }}
            >
              https://lattes.cnpq.br/8865404366730666
            </a>
          </div>
        </section>
        </div>
        

 <div style={projectStyleNone}></div>

      <div style={projectStyle}><section style={descriptionStyle}>
          <h2 style={{ margin: '10px' }}>Versão PDF</h2>
          <p style={descriptionStyle}>
            <a href="curriculo.pdf" download style={{ color: '#836FFF' }}>Baixar Currículo (PDF)</a>
          </p>
        </section></div>
        

        <div style={projectStyleNone}></div>
        <footer style={descriptionStyle}>
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
    </div>
  );
};

export default Resume;
