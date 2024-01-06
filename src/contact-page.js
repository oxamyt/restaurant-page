
const renderContactPage = () => {
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
    <div class="contact-info">
      <div class="contact-card">
        <img class="svg" src="../assets/phone-call-svgrepo-com.svg" alt="phone svg">
        <p class="contact-text">0980565793</p>
      </div>
      <div class="contact-card">
        <img class="svg" src="../assets/location-pin-svgrepo-com.svg" alt="location svg">
        <p class="contact-text">66, Velyka Vasylkivska Street, Kyiv, 03150</p>
      </div>
      <div class="contact-card">
        <img class="location-photo" src="../assets/map.png" alt="location on map">
      </div>
    </div>
  </div>
  <div class="footer">
    <p class="author"><a class="author" href="https://github.com/oxamyt">Oxamyt</a></p>
    <img
      class="github-logo"
      src="../assets/github-mark-white.svg"
      alt="github-logo"
    />
  </div>`;
  
    content.appendChild(container);
  };
  
  export { renderContactPage };
  