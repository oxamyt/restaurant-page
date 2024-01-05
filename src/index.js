import { renderHomePage } from "./home-page";
import { renderMenuPage } from "./menu-page";

renderHomePage()

const clearRender = () => {
  const content = document.querySelector(".content");
  const container = document.querySelector(".container");
  content.removeChild(container);
};


document.querySelector('.content').addEventListener('click', function(event){
    const target = event.target;
    if (target.classList.contains('menu-choice')){
        clearRender();
        renderMenuPage();
    }
    else if (target.classList.contains('home-choice')){
        clearRender();
        renderHomePage();
    }
    
})

export{addEventsListeners}
