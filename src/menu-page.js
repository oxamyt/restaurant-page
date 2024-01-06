
const renderMenuPage = () => {
  const content = document.querySelector(".content");

  const container = document.createElement("div");
  container.classList.add("container");
  container.innerHTML = `<div class="header">
    <div class="name"><h1 class="header-name">Borscht & Brews</h1></div>
    <div class="links">
      <ul class="link-list">
        <li class="home-choice">Home</li>
        <li class="menu-choice">Menu</li>
        <li class="contact-choice">Contact us</li>
      </ul>
    </div>
  </div>
  <div class="dish-content">
    <div class="main-dish-content">
      <div class="dish">
        <img
          class="dish-photo"
          alt="picture of Borscht"
          src="assets/Borscht.jpeg"
        />
        <h1 class="dish-name">Borscht</h1>
        <p class="description">
          This vibrant beetroot soup is a true Ukrainian icon. Its rich
          broth, simmered with vegetables, meat, and herbs, is bursting
          with flavor and nutrients. Each region has its own twist on the
          recipe, so you're sure to find a version you love.
        </p>
      </div>
      <div class="dish">
        <img
          class="dish-photo"
          alt="picture of Borscht"
          src="assets/varenyki.jpg"
        />
        <h1 class="dish-name">Varenyki</h1>
        <p class="description">
          These delightful dumplings are like little pockets of comfort.
          They come in a variety of savory and sweet fillings, from potato
          and cheese to cherries and berries. Traditionally, they're
          boiled and then pan-fried in butter, giving them a crispy,
          golden edge.
        </p>
      </div>
      <div class="dish">
        <img
          class="dish-photo"
          alt="picture of Borscht"
          src="assets/holubtsi.jpg"
        />
        <h1 class="dish-name">Holubtsi</h1>
        <p class="description">
          These cabbage rolls are a hearty and satisfying dish. Savory
          fillings like rice, meat, and vegetables are wrapped in tender
          cabbage leaves and simmered in a flavorful broth. They're often
          served with sour cream and dill for an extra touch of tang.
        </p>
      </div>
      <div class="dish">
        <img
          class="dish-photo"
          alt="picture of Borscht"
          src="assets/deruny.jpg"
        />
        <h1 class="dish-name">Deruny</h1>
        <p class="description">
          These potato pancakes are a delicious and versatile side dish.
          Grated potatoes are mixed with onions, eggs, and spices, then
          pan-fried until golden brown. They can be enjoyed plain, topped
          with sour cream or apple sauce, or even filled with savory
          ingredients like mushrooms or cheese.
        </p>
      </div>
      <div class="dish">
        <img
          class="dish-photo"
          alt="picture of Borscht"
          src="assets/syrnyki.jpg"
        />
        <h1 class="dish-name">Syrnyki</h1>
        <p class="description">
          These cottage cheese pancakes are a popular breakfast or dessert
          option. The cheese is mixed with eggs, flour, and sugar, then
          pan-fried until golden. They're often served with sour cream,
          fruit, or honey for a touch of sweetness.
        </p>
      </div>
      <div class="dish">
        <img
          class="dish-photo"
          alt="picture of Borscht"
          src="assets/beer.jpg"
        />
        <h1 class="dish-name">Craft Beer</h1>
        <p class="description">
          Beyond mass-produced blandness lies a world of craft beer, where
          hops unleash citrusy sunshine, malts whisper tales of caramel,
          and brewers unleash their passion, pouring it into every
          glorious sip. So join the vibrant community, raise a glass, and
          let the flavor adventure begin.
        </p>
      </div>
    </div>
  </div>
  <div class="footer">
    <p class="author">
      <a class="author" href="https://github.com/oxamyt">Oxamyt</a>
    </p>
    <img
      class="github-logo"
      src="assets/github-mark-white.svg"
      alt="github-logo"
    />
  </div>
</div>`;

  content.appendChild(container);
};

export { renderMenuPage };
