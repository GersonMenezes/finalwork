let buttonlist = document.querySelector('.buttonMenu');
let lista = document.querySelector('.option');

buttonlist.addEventListener('click', function(){
	lista.classList.toggle("ativo");   /* ClassList adiciona classe no CSS
																			// o Nome desse menu é Drapdown*/
})
