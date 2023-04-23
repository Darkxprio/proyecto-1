const stars = document.querySelectorAll('.star-container img');

function addShine() {
  this.classList.add('shine');
  let prevStar = this.previousElementSibling;
  while (prevStar) {
    prevStar.classList.add('shine');
    prevStar = prevStar.previousElementSibling;
  }
}

function removeShine() {
  this.classList.remove('shine');
  let prevStar = this.previousElementSibling;
  while (prevStar) {
    prevStar.classList.remove('shine');
    prevStar = prevStar.previousElementSibling;
  }
}

stars.forEach(star => star.addEventListener('mouseover', addShine));
stars.forEach(star => star.addEventListener('mouseout', removeShine));
