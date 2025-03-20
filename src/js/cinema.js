// const items = document.querySelector('.items');
// let index = 0;
// const totalSlides = document.querySelectorAll('.item').length;

// function moveCarrossel() {
//     index++;
//     if (index === totalSlides) {
//         setTimeout(() => {
//             items.style.transition = "none"; 
//             items.style.transform = "translateX(0)"; 
//             index = 0;
//         }, 500); // Tempo da transição antes de resetar
//     } else {
//         items.style.transition = "transform 0.5s ease-in-out"; 
//         items.style.transform = `translateX(-${index * 100}%)`;
//     }
// }

// setInterval(moveCarrossel, 3000); // Tempo entre cada slide (3 segundos)
