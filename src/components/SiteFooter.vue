<template>
  <footer class="bg-dark text-white mt-4 p-4">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h5 class="mb-3">Sobre o Estúdio</h5>
          <p class="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nulla nec purus feugiat, molestie ipsum et, consequat nibh.
          </p>
          <a href="/sobre" class="btn btn-outline-light btn-sm">Saiba mais</a> 
        </div>
        <div class="col-md-4">
          <h5 class="mb-3">Links Úteis</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="/contato" class="text-white">Contato</a></li>
            <li class="mb-2"><a href="/privacidade" class="text-white">Política de Privacidade</a></li>
            <li class="mb-2"><a href="/termos" class="text-white">Termos de Uso</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h5 class="mb-3">Redes Sociais</h5>
          <ul class="list-unstyled d-flex">
            <li class="ms-3"><a href="https://www.facebook.com/seulinkdofacebook" target="_blank" class="text-white"><i class="fab fa-facebook fa-2x"></i></a></li>
            <li class="ms-3"><a href="https://www.instagram.com/seulinkdoinstagram" target="_blank" class="text-white"><i class="fab fa-instagram fa-2x"></i></a></li>
            <li class="ms-3"><a href="https://wa.me/seunumerodewhatsapp" target="_blank" class="text-white"><i class="fab fa-whatsapp fa-2x"></i></a></li>
          </ul>
        </div>
      </div>
      <hr class="mt-4 mb-4">
      <p class="text-center">&copy; {{ new Date().getFullYear() }} Seu Estúdio de Tatuagem. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>


<script>
export default {
  name: 'SiteFooter',
};
</script>

<style scoped>
footer {
  background-color: #333;
}

footer a {
  color: #fff;
  transition: color 0.2s ease;
}

footer a:hover {
  color: #f5b74f; 
  text-decoration: none;
}

.btn-outline-light {
  border-color: #f5b74f; /* Cor da borda do botão */
  color: #f5b74f; /* Cor do texto do botão */
}

.btn-outline-light:hover {
  background-color: #f5b74f; /* Cor de fundo do botão no hover */
  color: #fff; /* Cor do texto do botão no hover */
}
</style>