<template>
    <div class="top-bar">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 logo">
            <img src="../assets/logo.png" alt="Logo do Estúdio" class="img-fluid">
          </div>
          <div class="col-md-6 contact text-md-end">
            <span><i class="fas fa-phone"></i> (XX) XXXX-XXXX</span>
            <span><i class="fas fa-envelope"></i> contato@seuestudio.com</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TopBar',
  };
  </script>
  
  <style scoped>
  .top-bar {
    background-color: #333; /* Tom mais escuro para a barra */
    color: #eee;
    padding: 0.5rem 0; /* Espaçamento vertical mais sutil */
    font-size: 0.9rem; /* Tamanho de fonte ligeiramente menor */
  }
  
  .logo img {
    max-height: 50px; /* Altura máxima para a logo */
  }
  
  .contact span {
    margin-left: 15px; /* Espaçamento entre os ícones e texto */
  }
  
  /* Ícones - você pode usar uma biblioteca como Font Awesome */
  .contact i {
    margin-right: 5px;
    color: #f5b74f; /* Cor diferenciada para os ícones */
  }
  
  /* Media query para telas menores */
  @media (max-width: 767px) {
    .logo {
      text-align: center;
      margin-bottom: 0.5rem;
    }
  
    .contact {
      text-align: center;
    }
  
    .contact span {
      display: block;
      margin-left: 0;
    }
  }
  </style>