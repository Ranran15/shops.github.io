function alertBuy() {
  var products = document.getElementsByName("product");
  var product = "A";
  var price = 10;
  var product_item_id = 11111;
  for (var i = 0, length = products.length; i < length; i++) {
    if (products[i].checked) {
      product = products[i].value;
      price += i*10;
      product_item_id *= (i+1);
      break;
    }
  }
  
  var productNum = document.getElementById("numSelect").value;
  
  fbq('track', 'Purchase', {currency: "USD", value: price, test_event_code: TEST36983, product_id: product_item_id});
  
  alert("You've just bought " + productNum + " " + product + "(s)!");
}
