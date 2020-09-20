import EventEmitter from '../HelpersProgram/helpers';
import { allowDrop, drag, drop, addDrag } from '../HelpersProgram/DragAndDrop';

class RecipeView extends EventEmitter {
  constructor() {
    super();
    this.form = document.getElementById('createRecipePlace');
    this.inputNameRecipe = document.getElementById('nameOfNewRecipe');
    this.inputsOfItems = document.getElementsByClassName('createRecipeInput');
    this.listOfRecipes = document.getElementById('listOfRecipe');

    this.form.addEventListener('submit', this.handleAdd.bind(this));
    this.addEventsListener();
  }

  createRecipe(createdRecipe) {
    const recipe = document.createElement('li');
    item.className = 'recipeElem';
    item.setAttribute('data-id', createdRecipe.id);
    item.textContent = createdRecipe.name;
    addDrag(recipe);
    this.listOfRecipes.appendChild(recipe);

    const removeButton = document.createElement('button');
    removeButton.className = 'remove';
    removeButton.textContent = 'RM';
    recipe.appendChild(removeButton);
    return this.addEventRemoveButton(item);
  }

  showRecipes(recipes) {
    recipes.forEach(recipe => {
      const listRecipe = this.createRecipe(recipe);
      this.listOfRecipes.appendChild(listRecipe);
    });
  }

  getNecessaryItem() {
    Array.from(this.inputsOfItems).reduce((pl, item) => {
      item.value ? [...pl, item.value] : pl, [];
    });
  }

  addEventRemoveButton(item) {
    const deleteButton = item.querySelector('.remove');
    deleteButton.addEventListener('click', this.handleRemove.bind(this));
    return item;
  }

  addEventsListener() {
    Array.from(this.listOfRecipes).forEach(recipe => {
      recipe.addEventListener('drop', drop);
      recipe.addEventListener('dragover', allowDrop);
    });
  }

  findListRecipe(id) {
    return this.listOfRecipes.querySelector(`[data-id="${id}"]`);
  }

  addRecipe(recipe) {
    const newRecipe = this.createRecipe(recipe);
    this.input.value = '';
    this.listOfRecipes.appendChild(newRecipe);
  }

  removeRecipe(id) {
    const recipe = this.findListRecipe(id);
    this.listOfRecipes.removeChild(recipe);
  }

  handleAdd(event) {
    event.preventDefault();
    if (
      !this.inputNameRecipe.value ||
      !this.inputsOfItems[0].value ||
      !this.inputsOfItems[1].value
    ) {
      return alert('Введите все поля');
    }
    this.emit('add', this.inputNameRecipe.value);
  }

  handleRemove({ target }) {
    const recipe = target.parentNode;
    this.emit('remove', listItem.getAttribute('data-id'));
  }

  showRecipes(recipes) {
    recipes.forEach(recipe => {
      const listRecipe = this.createRecipe(recipe);
      this.listOfRecipes.appendChild(listRecipe);
    });
  }
}

export default RecipeView;
