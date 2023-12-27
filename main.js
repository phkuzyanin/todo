const todoForm = document.querySelector('.todo__form');
const todoList = document.querySelector('.todo__list');
todoForm.addEventListener('submit', function(event) {
  event.preventDefault(); 
  let newDiv = document.createElement('div');
  newDiv.classList.add('todo__item');
  newDiv.innerHTML = `
  <div class="todo__item-mask">
  	<form action="" class="todo__buttons">
		<buttons class="completed"><img src="./img/done.svg" alt="completed"></buttons>
		<buttons class="delete"><img src="./img/delete.svg" alt="delete"></buttons>
	</form>
    <h2 class="todo__item-header">${todoForm.querySelector('#todo__header').value || ''}</h2>
    <p class="todo__item-content">${todoForm.querySelector('#todo__content').value || ''}</p>
  <div class="todo__item-mask">
  `;
  todoList.appendChild(newDiv);
  	let completed = document.getElementsByClassName('completed');
	let deleted = document.getElementsByClassName('delete');
	for(let element of completed){
		element.addEventListener('click', function(event){
			element.closest('.todo__item-mask').classList.add('blurred');
			element.closest('.todo__item').style.borderColor= 'green';
		})
	}
	for(let element of deleted){
		element.addEventListener('click', function(event){
			element.closest('.todo__item').remove();
		})
}
});