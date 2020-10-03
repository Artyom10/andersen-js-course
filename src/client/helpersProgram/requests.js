const SERVER = 'http://localhost:3000';

async function connectServer() {
  const response = await fetch(SERVER);
  return response.json();
}

async function deleteOperation(necessaryPerson, url = 'people') {
  await fetch(`${SERVER}/${url}/${necessaryPerson.id}`, {
    method: 'DELETE',
    body: JSON.stringify(necessaryPerson),
    headers: {
      'Content-Type': ' application/json',
    },
  });
}

async function postPeople(people) {
  await fetch(`${SERVER}`, {
    method: 'POST',
    body: JSON.stringify(people),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

async function patchPerson(necessaryPerson, url = 'people') {
  await fetch(`${SERVER}/${url}/${necessaryPerson.id}`, {
    method: 'PATCH',
    body: JSON.stringify(necessaryPerson),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
