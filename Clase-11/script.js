const baseURL = 'https://rickandmortyapi.com/api';

document.getElementById('getAllCharacters').addEventListener('click', getAllCharacters);
document.getElementById('filterCharacters').addEventListener('click', filterCharacters);

async function getAllCharacters() {
    try {
        displayError("")
        const response = await fetch(`${baseURL}/character`);
        const data = await response.json();
        displayCharacters(data.results);
    } catch (error) {
        displayError(error.message);
    }
}

async function filterCharacters() {
    const name = document.getElementById('nameInput').value;
    const status = document.getElementById('statusInput').value;
    const species = document.getElementById('speciesInput').value;
    const type = document.getElementById('typeInput').value;
    const gender = document.getElementById('genderInput').value;

    let url = `${baseURL}/character/?`;
    if (name) url += `name=${name}&`;
    if (status) url += `status=${status}&`;
    if (species) url += `species=${species}&`;
    if (type) url += `type=${type}&`;
    if (gender) url += `gender=${gender}&`;

    if (name || status || species || type || gender) {
        try {
            displayError("")
            const response = await fetch(url);
            const data = await response.json();
            displayCharacters(data.results);
        } catch (error) {
            displayError(error.message);
        }
    }
}

function displayCharacters(characters) {
    const charactersList = document.getElementById('charactersList');
    charactersList.innerHTML = '';
    characters.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.textContent = `${character.name} - ${character.status} - ${character.species}`;
        charactersList.appendChild(characterElement);
    });
}

function displayError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
}
