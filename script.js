let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}


// Espera o documento carregar completamente
document.addEventListener('DOMContentLoaded', () => {

  // Seleciona todos os elementos necessários
  const modal = document.getElementById('modal-tabela');
  const modalImg = document.getElementById('img-tabela-modal');
  const closeModalBtn = document.querySelector('.modal-close');
  const potesClicaveis = document.querySelectorAll('.pote-sabor.clickable');

  // Função para abrir o modal
  function abrirModal(imgPath) {
    modalImg.src = imgPath; // Define a imagem correta
    modal.style.display = 'flex'; // Mostra o modal
  }

  // Função para fechar o modal
  function fecharModal() {
    modal.style.display = 'none'; // Esconde o modal
    modalImg.src = ''; // Limpa o caminho da imagem
  }

  // Adiciona um evento de clique para cada pote
  potesClicaveis.forEach(pote => {
    pote.addEventListener('click', () => {
      // Pega o caminho da imagem do atributo 'data-tabela'
      const tabelaPath = pote.dataset.tabela;
      abrirModal(tabelaPath);
    });
  });

  // Adiciona evento de clique para o botão de fechar
  closeModalBtn.addEventListener('click', fecharModal);

  // Adiciona evento para fechar o modal se clicar fora da imagem (no fundo escuro)
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      fecharModal();
    }
  });

  // (Opcional) Adiciona evento para fechar o modal com a tecla 'Esc'
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      fecharModal();
    }
  });
});