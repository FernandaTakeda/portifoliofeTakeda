import React from 'react';
import petFriend from '../assets/petFriend.png';
import gooPet from '../assets/gooPet.png';

const containerQuadradoLilas = {
  backgroundColor: '#fff', // Cor lilás
  padding: '20px',
  borderRadius: '10px', // Cantos arredondados
  maxWidth: '1200px', // Largura máxima
  margin: '0 auto', // Centraliza horizontalmente
};

const sectionStyle = {
  width: '100%',
  maxWidth: '1200px',
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
  display: 'flex', // Usa flexbox
  alignItems: 'center', // Alinha itens verticalmente ao centro
  gap: '20px', // Espaço entre a imagem e o texto
  margin: '0 auto', // Centraliza o card na tela
};

const imageStyle = {
  width: '40%', // Ajusta a largura da imagem
  height: 'auto',
  borderRadius: '8px',
};

const textStyle = {
  flex: 1, // Permite que o texto ocupe o espaço restante
};

const linkStyle = {
  display: 'block',
  margin: '5px 0',
  color: '#836FFF',
  textDecoration: 'none',
};

const descriptionStyle = {
  maxWidth: '600px',
  margin: '0 auto', // Centraliza o parágrafo
  textAlign: 'justify',
};

const Portfolio = () => {
  return (
    <div style={containerQuadradoLilas}>
      <div style={{ textAlign: 'center' }}> {/* Centraliza todo o conteúdo */}
        <h1 style={{ margin: '20px' }}>Meu Portfólio</h1>
        
        <section style={sectionStyle}>
          <h2>Projetos</h2>
          
          <div style={projectStyle}>
            <img src={petFriend} alt="Projeto de Gerenciamento de Loja de Pets" style={imageStyle}/>
            <div style={textStyle}>
              <h3>Projeto de Gerenciamento de Loja de Pets</h3>
              <p>Este projeto é um sistema desenvolvido para gerenciar uma loja de pets. Com a ajuda deste sistema, 
              o proprietário pode administrar a venda de produtos diversos, incluindo alimentos, acessórios, itens 
              de hospedagem e produtos de higiene e saúde para animais.</p>
              <p>Foi desenvolvido como parte da disciplina de Desenvolvimento na 3ª fase. Devido à falta de manutenção 
              desde então, ele pode apresentar algumas incongruências.</p>
              <a href="https://github.com/FernandaTakeda/Pet-Friend.git" style={linkStyle}>Repositório GitHub</a>
            </div>
          </div>

          <div style={projectStyleNone}></div>

          <div style={projectStyle}>
          <img src={gooPet} alt="Projeto de Gerenciamento gooPet" style={imageStyle}/>
            <div style={textStyle}>
              <h3>Projeto de Gerenciamento gooPet</h3>
              <p>O sistema gooPet tem como finalidade auxiliar no processo de gestão em uma empresa de PetShop,
               com os dados de compras e agendamentos a serem realizados.</p>
              <p>Este projeto foi desenvolvido como parte da disciplina de Laboratório na 6ª fase, juntamente 
              com o discente Mauricio.</p>
              <a href="https://github.com/mauricioabcz/gooPet" style={linkStyle}>Repositório GitHub</a>
            </div>
          </div>
        </section>
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

export default Portfolio;

