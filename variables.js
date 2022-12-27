const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  /* Creates a suffix ("e.g px") based on what is defined in the input tag */
  const suffix = this.dataset.changes || '';

  /* Sets the property based on the :root properties in the CSS */
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

/* adjusts the image when the slider is changes */
inputs.forEach(input => input.addEventListener('change', handleUpdate));

/* adjusts the images based on mouse movement, not just after release */
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
