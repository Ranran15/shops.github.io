## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/Ranran15/shops.github.io/edit/master/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### List of Products
* A
![Image of A](/images/a.png)

* B
![Image of B](/images/b.png)

* C
![Image of C](/images/c.png)





<form onsubmit="alertBuy()">
  <fieldset>
    <legend>The Alphabet:</legend>
  <input id="productInput" type="radio" name="product" value="A" checked> A<br>
  <input id="productInput" type="radio" name="product" value="B"> B<br>
  <input id="productInput" type="radio" name="product" value="C"> C<br>
  
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
  
  Please help us click "Buy"! (don't worry, we don't charge you any $ :-) )
  <br>
  <input type="submit" name="submit_btn" value="Buy">
  </fieldset>
</form>

<script src="script.js"></script>
