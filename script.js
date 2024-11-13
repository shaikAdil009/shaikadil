let index = 0;
const slides = document.querySelectorAll('.slide');

function showSlide() {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });
    index = (index + 1) % slides.length;
}

setInterval(showSlide, 3500);

const boxes = [
    { id: "box1", end: 80, speed: 30 },
    { id: "box2", end: 4, speed: 100 },
    { id: "box3", end: 75, speed: 50 },
    { id: "box4", end: 98, speed: 40 },
  ];
  
  boxes.forEach((box) => {
    const element = document.querySelector(`#${box.id} .number`);
    let currentValue = 0;
  
    const updateNumber = () => {
      if (currentValue < box.end) {
        currentValue++;
        element.textContent = String(currentValue).padStart(2, "0"); // Ensures leading zeros
        setTimeout(updateNumber, box.speed);
      }
    };
  
    updateNumber();
  });
