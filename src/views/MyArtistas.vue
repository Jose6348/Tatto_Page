<template>
  <div class="container artists-page">
    <h1 class="page-title">Nossos Artistas</h1>
    <div class="artists-grid">
      <div class="artist-card" v-for="artista in artistas" :key="artista.nome">
        <div class="artist-image-container">
          <img :src="artista.foto" class="artist-image" :alt="`Foto de ${artista.nome}`" />
        </div>
        <div class="artist-info">
          <h2 class="artist-name">{{ artista.nome }}</h2>
          <p class="artist-specialty">{{ artista.especialidade }}</p>
          <p class="artist-description">{{ artista.descricao }}</p>
          <div class="artist-social-links">
            <a v-if="artista.instagram" :href="artista.instagram" target="_blank" class="social-link">
              <i class="fab fa-instagram"></i>
            </a>
            <a v-if="artista.facebook" :href="artista.facebook" target="_blank" class="social-link">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a v-if="artista.portfolio" :href="artista.portfolio" target="_blank" class="social-link">
              <i class="fas fa-globe"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyArtistas",
  data() {
    return {
      artistas: [
        {
          nome: "Sérgio Leds",
          foto: "https://github.com/Jose6348/Images_Projects/blob/main/Tatto_page/sergio-leds-tattoo.jpg?raw=true",
          especialidade: "Tatuagens de diversos estilos",
          descricao:
            "Sérgio é um tatuador experiente com mais de 20 anos de experiência. Ele é especialista em diversos estilos, incluindo realismo, old school e aquarela.",
          instagram: "https://www.instagram.com/sergioledstattoo/",
          facebook: null,
          portfolio: null,
        },
        {
          nome: "João",
          foto: "https://s3-alpha-sig.figma.com/img/f7eb/874f/5570857c4d497d7c7547d5d877999279?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tjxp7lP57x85CEBws6Aq~OVZ4xRAO9t5tA-oPq-k9EfdFh6~tRQ1~kYq7M3~fQ9y7Qh2L-~GfGk3o1g~O6KjM-BQD9-6I42p8e2oXpI1c6oZf9QYk-Jv6r2DdgQO505g2wFq45Yp2X5v-d6ZJ42xZ~-e7~e9o1eL~z4O6eT59fQp3c~Lw-~3q15Y9q2Z80P-H3-qM5qP9O8a1xYt~4xL6o6H-QjR~Z8zTfOqj3l26k7~CgW5R8VfGg-E9fP7sL60Q-T~qPj96U9R07zS9O2g~x3wN-F3fWwS-2m3jC4G-X5n4~f8UoX24yP5~5V~5K1v-8aFw957tXw0R~jI~-V7r2F5Q84r4rK1w8w2c1e544eKz0-Z~iH5y7L0jF6H55kUeH9Yw-yT79a3q9X5-q0vj5Zp3z-T58K~o-o5QJ8W~G7YmU3506LwE6J9O-I3b6xX5s~XwP4w05Vn0GkZ5-j2Zp2rLgJ2R6fT1mJ3dF-yLzYh8~uX5l5xJjY1c9xW7Z-G65~s9GfD5f4e78pT9~eY-~AUs0kQ4G-596jY7z~92s7-s0YJmDk9oZ8f3~f2~a7V0nF1jX8hH903u2d99h8s3m~Q-G7f5d8-e1h1o9w__",
          especialidade: "Tatuagens minimalistas e geométricas",
          descricao:
            "João é um tatuador talentoso que se especializou em tatuagens minimalistas e geométricas. Seu trabalho é limpo, preciso e elegante.",
          instagram: null,
          facebook: null,
          portfolio: null,
        },
        {
          nome: "Pedro",
          foto: "https://avatars.githubusercontent.com/u/50575308?v=4",
          especialidade: "Tatuagens Old School",
          descricao:
            "Pedro é um tatuador apaixonado por tatuagens Old School. Ele domina as técnicas tradicionais e cria designs clássicos com um toque moderno.",
          instagram: null,
          facebook: null,
          portfolio: null,
        },
      ],
    };
  },
};
</script>

<style scoped>
.artists-page {
  padding: 20px;
  margin-top: 7em;
}

.page-title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5rem;
  font-weight: bold;
}

.artists-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
}

.artist-card {
  border: none;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.artist-card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}

.artist-image-container {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.artist-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.artist-info {
  padding: 20px;
}

.artist-name {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.artist-specialty {
  font-size: 1.2rem;
  color: #777;
  margin-bottom: 15px;
}

.artist-description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
  text-align: justify;
}

.artist-social-links {
  display: flex;
  justify-content: flex-start;
}

.social-link {
  display: inline-block;
  margin-right: 15px;
  color: #555;
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: #f5b74f;
}
</style>