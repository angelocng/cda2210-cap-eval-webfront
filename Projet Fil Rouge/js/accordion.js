let acc=document.getElementsByClassName("accordionButton");
let panel = document.getElementsByClassName("panel");

acc[0].addEventListener("click", ()=> {
    let expanded=acc[0].getAttribute("aria-expanded");
    if (expanded=="true"){
        panel[0].hidden=true;
        acc[0].textContent="Afficher la description de l'image"
        acc[0].setAttribute("aria-expanded",false);
    }
    else if (expanded=="false"){
        panel[0].hidden=false;
        acc[0].textContent="Masquer la description de l'image"
        acc[0].setAttribute("aria-expanded",true);
    }
  });

