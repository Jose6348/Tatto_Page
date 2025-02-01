<template>
  <main class="container estudio-page">
    <section class="hero-section">
      <h1>O ESTÚDIO</h1>
      <div class="estudio-description">
        <p>O ESTÚDIO COM EXPERTISE E QUALIDADE PARA TE ATENDER E FAZER VOCÊ SE APAIXONAR PELA ARTE.</p>
      </div>
    </section>

    <section class="info-section">
      <div class="info-container">
        <h2>BIOSEGURANÇA</h2>
        <p>A Ferracin Tatto é certificada pela Vigilância Sanitária atuando sob rigorosas normas de biossegurança e assepsia. Possuí uma sala exclusiva para a esterilização dos equipamentos.</p>
      </div>
    </section>

    <section class="gallery-section">
      <div class="estudio-images">
        <img v-for="(image, index) in images" :key="index" :src="image.src" :alt="image.alt" />
      </div>
    </section>

    <section class="history-section">
      <h1>NOSSA HISTÓRIA</h1>
      <div class="timeline">
        <span v-for="(ano, index) in anos" :key="index" @click="selecionarAno(ano)" :class="{ 'active': anoSelecionado === ano }">{{ ano }}</span>
      </div>
      <div class="history-content">
        <h2>{{ historiaAtual.titulo }}</h2>
        <p v-for="(paragrafo, idx) in historiaAtual.descricao" :key="idx">{{ paragrafo }}</p>
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
      anos: ['História'],
      anoSelecionado: 'História',
      historias: {
        'História': {
          titulo: 'Nossa história',
          descricao: [
            'Com 3 anos de estudo de tatuagem no Japão e 4 exercendo a profissão sendo reconhecido internacionalmente, trabalhando com diversas nacionalidades e recebendo alguns prêmios durante essa trajetória.'
          ],
          imagem: 'https://github.com/Jose6348/Images_Projects/blob/main/Tatto_page/Foto%20historia.jpg?raw=true'
        },
      },
      images: [
        { src: 'https://github.com/Jose6348/Images_Projects/blob/main/Tatto_page/estudio.jpg?raw=true', alt: 'Imagem do Estúdio 1' },
        { src: 'https://github.com/Jose6348/Images_Projects/blob/main/Tatto_page/Image%20ferracin.jpg?raw=true', alt: 'Imagem do Estúdio 2' },
        { src: 'https://github.com/Jose6348/Images_Projects/blob/main/Tatto_page/front%20estudio.jpg?raw=true', alt: 'Imagem do Estúdio 3' }
      ]
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
  font-family: 'Arial', sans-serif;
  background-color: #000;
  color: white;
  width: 100%;
  max-width: 2160px;
  padding: 9em 20px;
  margin-top: 0;
}

.hero-section {
  text-align: center;
  margin-bottom: 40px;
}

h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.estudio-description p {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.5;
}

.info-section {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 40px;
}

.info-container {
  text-align: center;
}

.info-container h2 {
  color: #d9b681;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.info-container p {
  font-size: 1rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

.gallery-section {
  margin-bottom: 40px;
}

.estudio-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.estudio-images img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.estudio-images img:hover {
  transform: scale(1.05);
}

.history-section {
  margin-bottom: 40px;
}

.timeline {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.timeline span {
  color: #d9b681;
  font-size: 1rem;
  margin: 0 10px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.timeline span:hover,
.timeline span.active {
  color: #fff;
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
  width: 100%;
  max-width: 600px;
  border: 3px solid #d9b681;
  border-radius: 10px;
  padding: 10px;
}

@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  .estudio-description p {
    font-size: 1rem;
  }

  .info-container h2 {
    font-size: 1.5rem;
  }

  .estudio-images {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  .timeline {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .timeline span {
    text-align: center;
    padding: 5px;
    border: 1px solid #d9b681;
    border-radius: 5px;
  }

  .history-content h2 {
    font-size: 1.5rem;
  }

  .history-image img {
    max-width: 100%;
  }
}
</style>