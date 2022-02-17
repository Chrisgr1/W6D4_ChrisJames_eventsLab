document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

// SUBMIT EVENT
  // Setting up containers to submit info
const handleFormSubmit = function (event) {
  event.preventDefault()
  const newItem = document.createElement('div');
  newItem.classList.add('bookContainer');

// grab read list - conect to newItem / div
  const readingList = document.querySelector('#reading-list');
  readingList.appendChild(newItem);

  //h1
  const title = document.createElement('h1')
  newItem.appendChild(title)
  title.textContent = `${event.target.title.value}`;

  // title.classList.add('title')
  // //h2
  const subtitle = document.createElement('h2')
  newItem.appendChild(subtitle)
  subtitle.textContent = `${event.target.author.value}`;
  subtitle.classList.add('subtitle')
  // //p
  const para = document.createElement('p')
  newItem.appendChild(para)
  para.textContent = `${event.target.category.value}`;
  para.classList.add('para')


const reset = document.getElementById('new-item-form').reset();
//

}

const form = document.querySelector('#new-item-form')
form.addEventListener('submit', handleFormSubmit)

const deleteAll = document.querySelector('#delete-all')
const nuke_it = document.querySelector('#reading-list')
const handleDeleteAll = function () {
  
  nuke_it.innerHTML = ''
}
deleteAll.addEventListener('click', handleDeleteAll)



})
