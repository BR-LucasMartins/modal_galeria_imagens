let imagens= document.querySelectorAll('.small_img');  //seleciona todas as imagens com a classe "small_img"
let modal = document.querySelector('.modal'); //seleciona o container  do modal
let modalImg = document.querySelector('#modal_img');  //seleciona a tag image que fica dentro do modal
let btClose = document.querySelector('#bt_close');  //seleciona o botão de fechar modal 
let srcVal="";

for(let i =0; i<imagens.length;i++){

    //para cada imagem adiciona um evento de click que adiciona o modal 
    imagens[i].addEventListener('click',function(){
        
        srcVal = imagens[i].getAttribute('src');  //pega o caminho absoluto da imagem do loop e atrbui a variavel scrVal
        modalImg.setAttribute('src', srcVal);   //atribui o cmainho da imagem atual no modal 
        modal.classList.toggle('modal_active'); //abre o modal 
    });
    
}

//fecha o modal 
btClose.addEventListener('click', function(){
    modal.classList.toggle('modal_active');
});
