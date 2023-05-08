const cuerpopagina=document.querySelector("body")
const selectOpcionesColor=document.querySelector("select");
const opcionesImagenes=document.querySelector("#opcion-imagen");

const IMG_1 ="https://th.bing.com/th/id/R.470e315024c63edb8654add0f6b36ec6?rik=dStU0UMwaFzezw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-eeWqm0MTdwE%2fUBRMlMAdRuI%2fAAAAAAAAB9A%2fxZF50MD9FFU%2fs1600%2fpared_blanca.jpg&ehk=mIUkBLBFjh1L3TUaxI%2fGCcaaY2LLh6ZvhfSv%2fvonF5U%3d&risl=&pid=ImgRaw&r=0";
const IMG_2 ="https://th.bing.com/th/id/OIP.Rn-q9rtbJBnMtyiPDYYQ7AHaEc?pid=ImgDet&rs=1";
const IMG_3 ="https://th.bing.com/th/id/OIP.aev-c69GKJyzCwjsXmCe9wHaJQ?pid=ImgDet&rs=1";

function cambiarColorTexto(){

    console.log();
    cuerpopagina.style.color="white";

    switch (parseInt(selectOpcionesColor.value)) {
        case 1:
            cuerpopagina.style.color= "white";
            cuerpopagina.style.backgroundColor= "black";
            selectOpcionesColor.style.color="white";
            opcionesImagenes.src = IMG_1;
            break;
        case 2:
            cuerpopagina.style.color= "violet";
            cuerpopagina.style.backgroundColor= "yellow";
            selectOpcionesColor.style.color="violet";
            opcionesImagenes.src =IMG_2;
            break;
        case 3:
            cuerpopagina.style.color= "pink";
            cuerpopagina.style.backgroundColor= "red";
            selectOpcionesColor.style.color="pink";
            opcionesImagenes.src =IMG_3;
            break;

        default:
            alert ("ERROR")
    
    } 
}