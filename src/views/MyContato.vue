<template>
  <div class="contact-page">
    <div class="container">
      <h1 class="page-title">FALE CONOSCO</h1>
      <div class="contact-form-container">
        <form class="contact-form" action="https://formsubmit.co/jfalasco88@gmail.com" method="POST" enctype="multipart/form-data">
          <div class="form-group">
            <label for="name" class="form-label">NOME: <span class="required">*</span></label>
            <input type="text" id="name" name="name" placeholder="Digite seu nome..." required class="form-input" />
          </div>
          <div class="form-group">
            <label for="email" class="form-label">E-MAIL: <span class="required">*</span></label>
            <input type="email" id="email" name="email" placeholder="Informe um e-mail para contato" required class="form-input" />
          </div>
          <div class="form-group">
            <label for="phone" class="form-label">TELEFONE: <span class="required">*</span></label>
            <input type="tel" id="phone" name="phone" placeholder="(00) 00000-0000" required class="form-input" />
          </div>
          <div class="form-group">
            <label for="subject" class="form-label">ASSUNTO: <span class="required">*</span></label>
            <select id="subject" name="subject" required class="form-input">
              <option value="" disabled selected>Selecione...</option>
              <option value="orcamento">Orçamento</option>
              <option value="duvida">Dúvida</option>
              <option value="outro">Outro</option>
            </select>
          </div>
          <div class="form-group">
            <label for="message" class="form-label">MENSAGEM: <span class="required">*</span></label>
            <textarea id="message" name="message" placeholder="Para orçamentos entre em contato pelo Whatsapp ou via direct no Instagram..." required class="form-textarea"></textarea>
          </div>
          <div class="form-group checkbox-group">
            <input type="checkbox" id="privacy" name="privacy" required class="form-checkbox" />
            <label for="privacy" class="form-label-checkbox">Li e concordo com os termos de Política de Privacidade do site.</label>
          </div>
          <div class="form-group submit-group">
            <button type="submit" class="form-button">Enviar Mensagem</button>
          </div>
        </form>
        <div class="whatsapp-button">
          <a href="https://wa.me/5519999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20tatuagem." target="_blank" class="btn-whatsapp">Agende sua tatto pelo Whatsapp</a>        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MyContato",
};
</script>
<style scoped>
.contact-page {
  background: #000 url('https://via.placeholder.com/1500') no-repeat center center/cover;
  color: white;
  padding: 20px;
  margin-top: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container {
  max-width: 1000px;
  width: 100%;
  margin-top: 7em;
}
.page-title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
  font-weight: bold;
}
.contact-form-container {
  background: rgba(0, 0, 0, 0.7);
  padding: 30px;
  border-radius: 10px;
  width: 100%;
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
  text-align: start;
}
.required {
  color: red;
}
.form-input,
.form-textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #555;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.1);
  color: white;
  background-color: #000;
}
.form-textarea {
  min-height: 150px;
  resize: vertical;
}
.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.5);
}
.checkbox-group {
  display: flex;
  align-items: center;
}
.form-checkbox {
  margin-right: 10px;
}
.form-label-checkbox {
  font-size: 0.9rem;
}
.submit-group {
  text-align: start;
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
.whatsapp-button {
  text-align: center;
  margin-top: 20px;
}
.btn-whatsapp {
  background-color: #25D366;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 25px;
  display: inline-block;
  font-size: 1rem;
}
/* Responsividade */
@media (max-width: 768px) {
  .contact-form-container {
    padding: 20px;
  }
  .page-title {
    font-size: 2rem;
  }
  .form-input,
  .form-textarea {
    font-size: 0.9rem;
  }
  .form-button {
    font-size: 1rem;
  }
}
</style>