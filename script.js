document.addEventListener("DOMContentLoaded", function () {
  // Select the first option by default
  let firstOption = document.querySelector('.option');
  if (firstOption) {
      selectOption(firstOption);
  }
});

document.querySelectorAll('.option').forEach(option => {
  option.addEventListener("mouseover", function () {
      updateSelection(option);
  });

  option.addEventListener("click", function () {
      selectOption(option);
  });
});

function updateSelection(element) {
  console.log('element', element);
  // Reset all other options
  document.querySelectorAll('.option').forEach(opt => opt.classList.remove('hovered', 'selected'));

  // Highlight the hovered one
  element.classList.add('hovered', 'selected');
  element.querySelector("input").checked = true;

  updatePrice(element);

}

function selectOption(element) {
  // Reset all other options
  document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));

  // Mark the clicked one
  element.classList.add('selected');
  element.querySelector("input").checked = true;

  updatePrice(element);

}


// this function is use to without discount amount show
function updatePrice(element) {
  // Ensure data-price is set before updating the total price
  let price = parseFloat(element.getAttribute("data-price")) || 0;

  document.getElementById('total').innerText = price.toFixed(2);

}

