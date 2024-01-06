
const renderHomePage = () => {
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
  <div class="main-content">
    <div class="info">
      <div class="invite">
        Come to us for some delicious ukrainian cuisine!
      </div>
      <button class="order">Order now!</button>
    </div>
  </div>
  <div class="footer">
    <p class="author"><a class="author" href="https://github.com/oxamyt">Oxamyt</a></p>
    <img
      class="github-logo"
      src="assets/github-mark-white.svg"
      alt="github-logo"
    />
  </div>`;

  content.appendChild(container);
};

export { renderHomePage };
