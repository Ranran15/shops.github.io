<!--- ## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/Ranran15/shops.github.io/edit/master/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files. --->

### product details:
[A](https://ranran15.github.io/shops.github.io/images/a.png)

[B](https://ranran15.github.io/shops.github.io/images/b.png)

[C](https://ranran15.github.io/shops.github.io/images/c.png)

### List of Products 

<form onsubmit="alertBuy()">
  <fieldset>
    <legend>The Alphabet:</legend>
  <input id="productInput" type="radio" name="product" value="A" checked > A  , price: $10<br>
  <input id="productInput" type="radio" name="product" value="B" > B  , price $20<br>
  <input id="productInput" type="radio" name="product" value="C" > C   , price $30<br>
  
  Number of Products: 
  <select id="numSelect" name="num">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
  </select><br><br>
  
  ## Please help us click "Buy"! (don't worry, we don't charge you any $ :-) )
  <br>
  <input type="submit" name="submit_btn" value="Buy">
 </fieldset>
</form>


<script src="script.js"></script>
<script>
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version="2.0";n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,"script","https://connect.facebook.net/en_US/fbevents.js");
// If you want to add your own JS, add something like
fbq('init', '3771134922928632');
// Don't use fbq('track')! You might interfere with other people's pixels as you browse the web. Instead,
// if you need to experiment with pixel fires, use fbq('trackSingle', '3771134922928632', 'PageView');
//fbq('trackSingle', '3771134922928632', 'PageView');
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
</script>
