const texts = [
  "Frontend Web Developer",
  "Creative Web Designer",
  "UI-Focused JavaScript Developer"
];

let i = 0, j = 0, del = false;
const el = document.getElementById("typed-text");

setInterval(() => {
  if (!del) {
    el.textContent = texts[i].slice(0, ++j);
    if (j === texts[i].length) del = true;
  } else {
    el.textContent = texts[i].slice(0, --j);
    if (j === 0) {
      del = false;
      i = (i + 1) % texts.length;
    }
  }
}, 120);

function hireMe(){
  const msg = "Hello Shahrukh, I am interested in your frontend development work.";
  window.open(
    `https://wa.me/917011694701?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
}
