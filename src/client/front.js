const SERVER = 'http://localhost:3000';

const blockList = document.querySelector('.block__list');
const addButton = document.querySelector('.block__form-btn');

const idInput = document.getElementById('idInput');
const nameInput = document.getElementById('nameInput');
const wealthInput = document.getElementById('wealthInput');



function createPerson(id, name, wealth) {
  const mainP = document.createElement('p');
  mainP.className = 'block__list-elem';
  mainP.textContent = `${id}:${name} - ${wealth}`;


  const deleteButton = document.createElement('button');
  deleteButton.className = 'block__list-delete';
  deleteButton.textContent = 'delete';

  deleteButton.addEventListener('click', function(){
    await fetch(`${SERVER}/${url}/${id}`,{
        method: 'DELETE',
        headers:{
          'Content-Type': 'application/json'
      }
    });
    blockList.removeChild(mainP);
})

  newP.appendChild(deleteButton);
  return newP;
}

async function newPerson(url = 'people') {
  const id = idInput.nodeValue;
  const name = nameInput.nodeValue;
  const wealth = wealthInput.nodeValue;

  const newP = createPerson(id, name, wealth);
  blockList.appendChild(newP);
  await fetch(`${SERVER}/${url}`,{
      method: 'POST',
      body: JSON.stringify({
          id,
          name,
          wealth,
      }),
      headers:{
        'Content-Type': 'application/json'
    }
  });
}


async function loadPeopleFromServer(url = 'people') {
  const response = await fetch(`${SERVER}/${url}`);
  const people = await response.json();
  people.forEach(({ id, name, wealth }) => blockList.appendChild(createPerson(id, name, wealth)));
}
loadPeopleFromServer();

addButton.addEventListener('click', newPerson);

