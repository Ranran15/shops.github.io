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
      fbq('track', 'Purchase', {currency: "USD", value: price, content_type:"product", contents:[
      {id:"DB_1",
      quantity:1},{id:"DB_2",quantity:2}]});
  fbq('track', 'Purchase', {
      value: 10,
      currency: 'USD',
      contents: [
        {
          id: 'DB_1',
          quantity: 1
        },
        {
          id: 'DB_2',
          quantity: 2
        }],
      content_type: 'product',
    });
  alert("You've just bought " + productNum + " " + product + "(s)!");
}
