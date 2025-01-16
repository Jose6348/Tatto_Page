<template>
  <div class="container">
    <h1>O Estúdio</h1>
    <div class="studio-content">
      <div class="studio-description">
        <p>
          Bem-vindo ao nosso estúdio de tatuagem, um espaço onde a arte e a
          autoexpressão se encontram. Nossa equipe de artistas experientes e
          talentosos está dedicada a criar tatuagens únicas e personalizadas que
          você vai amar por toda a vida.
        </p>
        <p>
          Usamos apenas equipamentos esterilizados e de alta qualidade, e
          seguimos rigorosamente todos os protocolos de higiene e segurança
          para garantir a sua saúde e bem-estar. Nosso estúdio é um ambiente
          limpo, confortável e acolhedor, onde você pode se sentir à vontade
          para discutir suas ideias e inspirações com nossos artistas.
        </p>
        <p>
          Oferecemos uma ampla variedade de estilos de tatuagem, desde o
          tradicional até o contemporâneo, e trabalhamos em estreita colaboração
          com cada cliente para desenvolver um design que seja verdadeiramente
          único e significativo. Seja qual for a sua visão, estamos aqui para
          ajudá-lo a transformá-la em uma obra de arte corporal que você se
          orgulhará de exibir.
        </p>
      </div>
      <div class="studio-images">
        <img src="https://github.com/Jose6348/Images_Projects/blob/main/Tatto_page/estudio.jpg?raw=true" alt="Imagem do Estúdio 1" />
        <img src="https://github.com/Jose6348/Images_Projects/blob/main/Tatto_page/Image%20ferracin.jpg?raw=true" alt="Imagem do Estúdio 2" />
        <img src="https://github.com/Jose6348/Images_Projects/blob/main/Tatto_page/front%20estudio.jpg?raw=true" alt="Imagem do Estúdio 3" />
      </div>
    </div>
   
      
      </div>
  
</template>

<script>
export default {
  name: "MyEstudio",
};
</script>

<style scoped>
.container {
  padding: 20px;
  margin-top: 7em;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.studio-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.studio-description {
  width: 50%;
}

.studio-images {
  height: auto;
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.studio-images img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin: 10px;
  border-radius: 5px;
}

.artists-section {
  margin-top: 40px;
}

.artist-profiles {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.artist-profile {
  text-align: center;
  margin: 20px;
}

.artist-profile img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
}
</style>