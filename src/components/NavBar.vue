<template>
  <nav class="navbar navbar-expand-lg fixed-top custom-navbar">
    <div class="container">
      <a class="navbar-brand d-flex align-items-center" href="/">
        <img 
          src="https://raw.githubusercontent.com/Jose6348/Images_Projects/5329324e34ecd170d149d61978c4127fd4279c96/Tatto_page/logoFerracin.svg" 
          
          alt="Logo do Estúdio" 
          class="img-fluid logo"
        />
      </a>
      <button 
        class="navbar-toggler custom-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Início</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/estudio" class="nav-link">O Estúdio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/servicos" class="nav-link">Serviços</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/artistas" class="nav-link">Artistas</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contato" class="nav-link">Contato</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
    // Selecionando o elemento do menu no DOM
    const navLinks = document.querySelectorAll('.navbar-nav .nav-item .nav-link');
    const navbarToggle = document.querySelector('.navbar-toggler');

    // Adicionando evento de clique a cada link de navegação
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Fecha o menu
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
          navbarToggle.click(); // Simula um clique no botão de toggle para fechar o menu
        }

        // Rolagem para o topo
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Rolagem suave
        });
      });
    });
  }
};
</script>

<style scoped>
/* Fundo gradiente e sombras suaves */
.custom-navbar {
  background: linear-gradient(45deg, rgba(34, 34, 34, 0.0), rgba(16, 16, 16, 0.0));
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
  
}

.custom-navbar .navbar-brand .logo {
  height: 100px; 
  width: auto;
  border-radius: 20px;
  transition: transform 0.3s ease;
}

.custom-navbar .navbar-brand .logo:hover {
  transform: scale(1.1);
}

.nav-link {
  font-size: 1.5rem;
  font-weight: 600;
  color: #505050;
  transition: color 0.3s ease, transform 0.3s ease, text-shadow 0.3s ease;
  position: relative;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  margin-right: 5px;
}

.nav-link:hover {
  color: #ff6600;
  transform: scale(1.1);
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
}

.nav-link::before {
  content: "";
  position: absolute;
  bottom: 0.2rem;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #ffd700, #ff6347);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.nav-link:hover::before {
  transform: scaleX(1);
}

.custom-toggler {
  border: none;
}

.custom-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=UTF8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba%28255, 255, 255, 1%29' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

/* Responsividade para dispositivos menores */
@media (max-width: 991.98px) {
  .custom-navbar {
    background: #424242;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .navbar-nav {
    flex-direction: column; /* Alinha os itens verticalmente */
  }

  .nav-link {
    font-size: 1.2rem;
    padding: 0.75rem 1rem; /* Ajustado para fornecer mais espaço lateral */
    text-align: left; /* Alinhamento à esquerda para melhor legibilidade */
    margin: 0;
    width: 100%; /* Garantir que cada item ocupa toda a largura */
    color: white;
  }

  .navbar-collapse {
    /* Para forçar a transição de altura do menu */
    transition: height 0.35s ease;
    max-height: 0; /* Começa com altura zero */
    overflow: hidden;
  }

  .navbar-collapse.show {
    max-height: 100vh; /* Aumenta a altura quando aberto */
  }

  /* Ajuste adicional para o menu no mobile */
  .navbar-nav .nav-item {
    margin-bottom: 5px;
  }
}

/* Estilo para o botão de toggle */
.custom-toggler {
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: box-shadow 0.15s ease-in-out;
  
}

.custom-toggler:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
  
}

@media (max-width: 768px) {
  .custom-navbar {
    background: #424242;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 0.5rem 0; /* Reduz o espaço interno da navbar */
  }

  .custom-navbar .navbar-brand .logo {
    height: 60px; /* Reduz o tamanho do logo para mobile */
  }

  .navbar-nav {
    flex-direction: column; /* Alinha os itens verticalmente */
  }

  .nav-link {
    font-size: 1rem; /* Reduz o tamanho da fonte para mobile */
    padding: 0.5rem 1rem; /* Ajustado para fornecer mais espaço lateral */
    text-align: left; /* Alinhamento à esquerda para melhor legibilidade */
    margin: 0;
    width: 100%; /* Garantir que cada item ocupa toda a largura */
    color: white;
  }

  .navbar-collapse {
    transition: height 0.35s ease;
    max-height: 0; /* Começa com altura zero */
    overflow: hidden;
  }

  .navbar-collapse.show {
    max-height: 100vh; /* Aumenta a altura quando aberto */
  }

  /* Ajuste adicional para o menu no mobile */
  .navbar-nav .nav-item {
    margin-bottom: 5px;
  }
}
</style>