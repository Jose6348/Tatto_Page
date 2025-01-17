<template>
  <main class="container estudio-page">
    <h1>O ESTÚDIO</h1>
    <div class="estudio-description">
      <p>
        O MAIOR ESTÚDIO DE TATUAGEM DA AMÉRICA LATINA, COM RECONHECIMENTO INTERNACIONAL, DEZENAS DE PRÊMIOS E EQUIPE ESPECIALIZADA.
      </p>
    </div>
    <div class="estudio-info">
      <div class="info-section">
        <h2>ACESSIBILIDADE</h2>
        <p>
          Somos pioneiros na adequação dos espaços do estúdio para o portador de mobilidade reduzida. Temos acesso adaptado desde a recepção até uma sala exclusiva de atendimento.
        </p>
      </div>
      <div class="info-section">
        <h2>BIOSEGURANÇA</h2>
        <p>
          A Ferracin Tatto é certificada pela Vigilância Sanitária atuando sob rigorosas normas de biossegurança e assepsia. Possuí uma sala exclusiva para a esterilização dos equipamentos.
        </p>
      </div>
    </div>
    <div class="estudio-images">
      <img src="https://github.com/Jose6348/Images_Projects/blob/main/Tatto_page/estudio.jpg?raw=true" alt="Imagem do Estúdio 1" />
      <img src="https://github.com/Jose6348/Images_Projects/blob/main/Tatto_page/Image%20ferracin.jpg?raw=true" alt="Imagem do Estúdio 2" />
      <img src="https://github.com/Jose6348/Images_Projects/blob/main/Tatto_page/front%20estudio.jpg?raw=true" alt="Imagem do Estúdio 3" />
    </div>
    
    <!-- Seção Nossa História -->
    <section class="history-section">
      <h1>NOSSA HISTÓRIA</h1>
      <div class="timeline">
        <span v-for="(ano, index) in anos" :key="index" @click="selecionarAno(ano)" :class="{ 'active': anoSelecionado === ano }">{{ ano }}</span>
      </div>
      <div class="history-content">
        <h2>{{ historiaAtual.titulo }}</h2>
        <p v-for="(paragrafo, idx) in historiaAtual.descricao" :key="idx">
          {{ paragrafo }}
        </p>
        <div class="history-image">
          <img :src="historiaAtual.imagem" :alt="historiaAtual.titulo" />
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: "MyEstudio",
  data() {
    return {
      anos: ['1977', '1982', '1984', '1990', '1993', '1994', '1999', '2002', '2007', '2009', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2021'],
      anoSelecionado: '1977',
      historias: {
        '1977': {
          titulo: 'PRIMEIROS CONTATOS COM A TATUAGEM',
          descricao: [
            'A entrada de Sérgio Leds no universo da tatuagem se deu nas sessões de que ele e seus amigos participavam com técnicas ainda primitivas: agulhas amarradas em linhas e molhadas em tinta.',
            'Na época, desenhava motivos ligados ao surf, skate e às praias do litoral Norte.',
            'Logo após esse período, Sérgio começa a fabricar suas próprias máquinas de tattoo.'
          ],
          imagem: 'https://github.com/Jose6348/Images_Projects/blob/main/Tatto_page/estudio.jpg?raw=true'
        },
        // Adicione mais histórias para outros anos aqui
        // Exemplo:
        // '1982': {
        //   titulo: 'Título do Ano 1982',
        //   descricao: ['Descrição do ano 1982'],
        //   imagem: 'URL da imagem correspondente'
        // },
      }
    };
  },
  computed: {
    historiaAtual() {
      return this.historias[this.anoSelecionado] || {
        titulo: 'PRIMEIROS CONTATOS COM A TATUAGEM',
        descricao: ['Nenhuma história disponível para este ano.'],
        imagem: 'https://via.placeholder.com/300'
      };
    }
  },
  methods: {
    selecionarAno(ano) {
      this.anoSelecionado = ano;
    }
  }
};
</script>
<style scoped>
.estudio-page {
  background-color: #000;
  color: white;
  width: 100%;
  max-width: 1900px;
  padding: 9em 20px;
  margin-top: 0;
}
h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}
.estudio-description {
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 40px;
}
.estudio-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}
.info-section {
  width: 48%;
}
.info-section h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #d9b681;
}
.info-section p {
  font-size: 1rem;
  line-height: 1.6;
}
.estudio-images {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 40px;
}
.estudio-images img {
  width: 30%;
  height: auto;
  object-fit: cover;
  margin: 10px;
  border-radius: 5px;
}
/* Estilo para a seção de história */
.history-section {
  margin-bottom: 40px;
}
.history-section h1 {
  margin-bottom: 30px;
}
.timeline {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.timeline span {
  color: #d9b681;
  font-size: 0.9rem;
  margin-right: 10px;
}
.history-content {
  text-align: left;
}
.history-content h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #d9b681;
}
.history-content p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 15px;
}
.history-image {
  margin-top: 20px;
  text-align: center;
}
.history-image img {
  width: 80%;
  max-width: 400px;
  border: 2px solid #d9b681;
  border-radius: 10px;
  padding: 10px;
}
.timeline span {
  color: #d9b681;
  font-size: 0.9rem;
  margin-right: 10px;
  cursor: pointer;
  transition: color 0.3s ease;
}
.timeline span:hover, .timeline span.active {
  color: #fff;
}
@media (max-width: 768px) {
  .estudio-info {
    flex-direction: column;
  }
  .info-section {
    width: 100%;
    margin-bottom: 20px;
  }
  .estudio-images img {
    width: 45%;
  }
  h1 {
    font-size: 2rem;
  }
  .estudio-description {
    font-size: 1rem;
  }
  .timeline {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Duas colunas para alinhar duas datas lado a lado */
    gap: 10px; /* Espaçamento entre as datas */
  }
  .timeline span {
    text-align: center; /* Centraliza o texto dentro de cada célula */
    display: block; /* Garante que cada ano ocupe uma linha inteira */
    padding: 5px;
    border: 1px solid #d9b681; /* Adiciona uma borda para melhor visualização */
    border-radius: 5px;
  }
  .history-content h2 {
    font-size: 1.5rem;
  }
  .history-image img {
    width: 100%;
  }
}
</style>