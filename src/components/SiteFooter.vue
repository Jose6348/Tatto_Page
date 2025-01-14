<template>
  <footer class="footer">
    <div class="container">
      <div class="top-footer">
        <div class="social-icons">
          <h3 class="section-title">Siga-nos no Instagram</h3>
          <a href="https://www.instagram.com/sergioledstattoo/" target="_blank" class="social-link">
            <font-awesome-icon icon="fa-brands fa-instagram" />
          </a>
        </div>
      </div>
      <div class="middle-footer">
        <div class="footer-info">
          <div class="logo-container">
            <img src="https://github.com/Jose6348/Images_Projects/blob/main/Tatto_page/logo_branca.png?raw=true" alt="Logo Leds Tattoo" class="footer-logo" />
            <p class="slogan">PURE ART</p>
          </div>
          <div class="contact-info">
            <div class="info-group">
              <h4 class="info-title">Onde Estamos</h4>
              <p class="info-text">
                <font-awesome-icon icon="fa-solid fa-map-marker-alt" class="info-icon" /> Avenida Ibirapuera, 3478
              </p>
              <p class="info-text">Moema, São Paulo - SP</p>
              <p class="info-text">
                <font-awesome-icon icon="fa-solid fa-search" class="info-icon" /> CEP 04028-003
              </p>
            </div>
            <div class="info-group">
              <h4 class="info-title">Contato</h4>
              <p class="info-text">
                <font-awesome-icon icon="fa-solid fa-phone" class="info-icon" /> (11) 94486-3323
              </p>
              <p class="info-text">
                <font-awesome-icon icon="fa-solid fa-envelope" class="info-icon" /> contato@ledstattoo.com.br
              </p>
            </div>
            <div class="social-links-footer">
              <a href="https://www.instagram.com/sergioledstattoo/" target="_blank" class="social-link-footer">
                <font-awesome-icon icon="fa-brands fa-instagram" />
              </a>
              <a href="#" target="_blank" class="social-link-footer">
                <font-awesome-icon icon="fa-brands fa-facebook-f" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-footer">
        <p class="copyright">
          2022 © Todos os Direitos Reservados | Política de Privacidade
        </p>
        <div class="developed-by">
          <p>Desenvolvido por:</p>
          <img src="https://github.com/Jose6348/Images_Projects/blob/main/Tatto_page/Superix-logo-branca.png?raw=true" alt="Logo Superix" class="superix-logo" />
        </div>
      </div>
    </div>
    <div class="whatsapp-button-container">
      <a href="https://wa.me/5511996459448" target="_blank" class="whatsapp-button">
        <font-awesome-icon icon="fa-brands fa-whatsapp" />
        <span>Agende sua tattoo pelo Whatsapp</span>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter",
};
</script>

<style scoped>
/* Estilos do Footer (já fornecidos anteriormente) */
.footer {
  background-color: #111;
  color: #fff;
  padding: 40px 0;
}

.container {
    display: flex;
    flex-direction: column;
}

.top-footer {
  text-align: center;
  margin-bottom: 30px;
  border-bottom: 2px solid #f5b74f;
}

.section-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #fff;
}

.social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 20px;
}

.social-link {
  color: #fff;
  margin: 0 10px;
  font-size: 2rem;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #f5b74f;
}

.middle-footer {
  margin-bottom: 30px;
}

.footer-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-logo {
  width: 150px;
  margin-bottom: 10px;
}

.slogan {
  font-size: 1rem;
  color: #f5b74f;
  font-weight: bold;
}

.contact-info {
  display: flex;
  flex-direction: column;
}

.info-group {
  margin-bottom: 20px;
}

.info-title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #fff;
}

.info-text {
  font-size: 1rem;
  color: #ccc;
  display: flex;
  align-items: center;
}

.info-icon {
  margin-right: 10px;
  color: #f5b74f;
}

.social-links-footer{
  margin-top: 15px;
}

.social-link-footer{
    color: #fff;
    font-size: 1.5rem;
    margin-right: 10px;
    transition: color 0.3s ease;
}

.social-link-footer:hover{
    color: #f5b74f;
}

.bottom-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #333;
  padding-top: 20px;
}

.copyright {
  font-size: 0.9rem;
  color: #ccc;
}

.developed-by {
  display: flex;
  align-items: center;
}

.developed-by p {
  font-size: 0.9rem;
  color: #ccc;
  margin-right: 10px;
}

.superix-logo {
  width: 100px;
}

.whatsapp-button-container{
    background-color: #25d366;
    position: fixed;
    bottom: 20px;
    right: 20px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.whatsapp-button-container:hover{
    transform: translateY(-5px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4);
}

.whatsapp-button {
  display: flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
}

.whatsapp-button i {
  font-size: 1.8rem;
  margin-right: 10px;
}

.whatsapp-button span {
  font-size: 1rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  .footer-info {
    flex-direction: column;
    align-items: center;
  }

  .logo-container {
    margin-bottom: 30px;
    align-items: center;
  }

  .developed-by {
      margin-top: 15px;
  }

  .bottom-footer{
      flex-direction: column;
      align-items: center;
  }

  .top-footer{
      border: none;
  }

  .social-icons{
      flex-direction: row;
  }

  .section-title{
      margin-right: 20px;
  }
}
</style>