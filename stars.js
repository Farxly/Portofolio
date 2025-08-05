
const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 100; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    vx: -0.5 + Math.random(),
    vy: -0.5 + Math.random()
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#ffffff';

  for (let i = 0; i < stars.length; i++) {
    const s = stars[i];
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    ctx.fill();

    s.x += s.vx;
    s.y += s.vy;

    if (s.x < 0 || s.x > canvas.width || s.y < 0 || s.y > canvas.height) {
      s.x = Math.random() * canvas.width;
      s.y = Math.random() * canvas.height;
    }
  }

  requestAnimationFrame(drawStars);
}

drawStars();
