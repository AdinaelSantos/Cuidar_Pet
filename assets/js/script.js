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
