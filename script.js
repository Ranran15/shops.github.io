function alertBuy() {
  var products = document.getElementsByName("product");
  var product = "A";
  var price = 10;
  for (var i = 0, length = products.length; i < length; i++) {
    if (products[i].checked) {
      product = products[i].value;
      price += i*10;
      break;
    }
  }
  
  var productNum = document.getElementById("numSelect").value;
  
  fbq('track', 'Purchase', {currency: "USD", value: price});
  
  alert("You've just bought " + productNum + " " + product + "(s)!");
}
