/*
    Este evento adiciona ou remove o atributo 'id' ao s-card-article.
    mouseenter: ao entrar no s-card-article remove o 'id='diamnic-card'.
    mouseout: ao sair do s-card-article adiciona o 'id='diamnic-card'
*/

const sCardArticle = document.querySelectorAll('.s-cards-article');

for(let i=0;i<sCardArticle.length;i++){
    sCardArticle[i].addEventListener('mouseenter', ()=>{
            sCardArticle[0].removeAttribute('id');

    })
}
for(let i=0;i<sCardArticle.length;i++){
    sCardArticle[i].addEventListener('mouseout', ()=>{
        sCardArticle[0].setAttribute('id', 'diamnic-card');
    })
}

/*=======================CONTADORES=======================*/
/*
ESTE EVENTO DE SER ACIONADO QUANDO ROLAR O SCROOL
PENDENTE DE IMPLEMENTAÇÃO
*/
function contagem(){
    const pessoas = document.querySelector('.pessoas').firstElementChild;
    const profissinais = document.querySelector('.profissinais').firstElementChild;
    const Pordutos = document.querySelector('.Pordutos').firstElementChild;
    const animais = document.querySelector('.animais').firstElementChild;

    let cont =  0,
        cont_1 =0,
        cont_2 =0,
        cont_3 =0;
    const totalPessoas = setInterval(()=>{
        if(cont === 532){
            clearInterval(totalPessoas);
        }
        pessoas.textContent = `${cont}`;
        cont++;
    },10)

    const totalProfissinais = setInterval(()=>{
        if(cont_1 === 1244){
            clearInterval(totalProfissinais);
        }
        profissinais.textContent = `${cont_1}`;
        cont_1++;
    },1)

    const totalPordutos = setInterval(()=>{
        if(cont_2 === 256){
            clearInterval(totalPordutos);
        }
        Pordutos.textContent = `${cont_2}`;
        cont_2++;
    },20)

    const totalanimais = setInterval(()=>{
        if(cont_3 === 48){
            clearInterval(totalanimais);
        }
        animais.textContent = `${cont_3}`;
        cont_3++;
    },100)

    }
document.addEventListener('DOMContentLoaded', contagem); 
