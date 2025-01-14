<template>
  <div class="contact-page">
    <div class="container">
      <h1 class="page-title">Entre em Contato</h1>
      <div class="contact-content">
        <div class="contact-info">
          <p class="contact-description">
            Tem alguma dúvida, sugestão ou quer agendar um horário? Estamos
            sempre prontos para te atender! Entre em contato conosco pelos
            canais abaixo ou, se preferir, preencha o formulário que entraremos
            em contato o mais breve possível.
          </p>
          <ul class="contact-list">
            <li class="contact-item">
              <i class="fas fa-phone contact-icon"></i>
              <span class="contact-label">Telefone:</span>
              <a href="tel:19996459448" class="contact-value">(19) 99645-9448</a>
            </li>
            <li class="contact-item">
              <i class="fas fa-envelope contact-icon"></i>
              <span class="contact-label">Email:</span>
              <a href="mailto:contato@sergioledstattoo.com" class="contact-value">contato@sergioledstattoo.com</a>
            </li>
            <li class="contact-item">
              <i class="fas fa-map-marker-alt contact-icon"></i>
              <span class="contact-label">Endereço:</span>
              <span class="contact-value">Rua Exemplo, 123 - Cidade, Estado</span>
            </li>
          </ul>
        </div>
        <div class="contact-form-container">
          <form class="contact-form" @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name" class="form-label">Nome:</label>
              <input type="text" id="name" name="name" v-model="form.name" required class="form-input" />
            </div>
            <div class="form-group">
              <label for="email" class="form-label">Email:</label>
              <input type="email" id="email" name="email" v-model="form.email" required class="form-input" />
            </div>
            <div class="form-group">
              <label for="message" class="form-label">Mensagem:</label>
              <textarea id="message" name="message" v-model="form.message" required class="form-textarea"></textarea>
            </div>
            <button type="submit" class="form-button">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyContato",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Aqui você pode lidar com o envio do formulário, como enviar um email ou salvar os dados em um banco de dados.
      // Por enquanto, vamos apenas logar os dados no console.
      console.log("Formulário enviado:", this.form);
      alert("Mensagem enviada com sucesso!");

      // Limpar o formulário após o envio
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
  },
};
</script>

<style scoped>
.contact-page {
  padding: 20px;
  margin-top: 6em; /* Ajuste para não ficar atrás do header fixo */
  min-height: calc(100vh - 6em);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container{
    max-width: 1000px;
}

.page-title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
  font-weight: bold;
}

.contact-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 50px;
  width: 100%;
}

.contact-info,
.contact-form-container {
  flex: 1;
}

.contact-description {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 30px;
  text-align: justify;
}

.contact-list {
  list-style: none;
  padding: 0;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.contact-icon {
  color: #f5b74f;
  font-size: 1.5rem;
  margin-right: 15px;
  width: 25px; /* Largura fixa para alinhar os ícones */
  text-align: center; /* Centralizar o ícone dentro do espaço */
}

.contact-label {
  font-weight: bold;
  margin-right: 10px;
}

.contact-value {
  color: #555;
  text-decoration: none;
}

.contact-value:hover {
  text-decoration: underline;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box;
}

.form-textarea {
  min-height: 150px;
  resize: vertical;
}

.form-button {
  background-color: #f5b74f;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-button:hover {
  background-color: #e0a80d;
}

/* Estilos para telas menores (ex: tablets e celulares) */
@media (max-width: 768px) {
  .contact-content {
    flex-direction: column;
    align-items: center;
  }

  .contact-info,
  .contact-form-container {
    width: 100%; /* Ocupar toda a largura disponível */
  }

  .contact-form-container {
      margin-top: 40px;
  }

  .page-title{
      margin-bottom: 60px;
  }

  .contact-page{
      margin-top: 12em;
  }
}
</style>