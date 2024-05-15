document.addEventListener("DOMContentLoaded", function() {
  const products = document.querySelectorAll(".card"); 

  // Add event listeners to each product card
  products.forEach(product => {
    const plusBtn = product.querySelector(".fa-plus-circle"); 
    const minusBtn = product.querySelector(".fa-minus-circle"); 
    const deleteBtn = product.querySelector(".fa-trash-alt");
    const likeBtn = product.querySelector(".fa-heart"); 
    const quantitySpan = product.querySelector(".quantity"); 
    const unitPrice = parseFloat(product.querySelector(".unit-price").innerText.replace("$", "")); 
    let quantity = parseInt(quantitySpan.innerText); // Initial quantity
    let totalPrice = parseFloat(document.querySelector(".total").innerText.replace("$", "")); 

    // Event listener for the plus button
    plusBtn.addEventListener("click", function() {
      quantity++;
      quantitySpan.innerText = quantity;
      totalPrice += unitPrice;
      document.querySelector(".total").innerText = totalPrice.toFixed(2) + " $";
    });

    // Event listener for the minus button
    minusBtn.addEventListener("click", function() {
      if (quantity > 0) {
        quantity--;
        quantitySpan.innerText = quantity;
        totalPrice -= unitPrice;
        document.querySelector(".total").innerText = totalPrice.toFixed(2) + " $";
      }
    });

    // Event listener for the delete button
    deleteBtn.addEventListener("click", function() {
      const cardBody = product.querySelector(".card-body");
      cardBody.parentNode.removeChild(cardBody); 
      totalPrice -= unitPrice * quantity;
      document.querySelector(".total").innerText = totalPrice.toFixed(2) + " $";
    });

    // Event listener for the like button
    likeBtn.addEventListener("click", function() {
        likeBtn.style.color = "red"; 
    });
    
  });
});
