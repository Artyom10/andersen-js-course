import EventEmitter from '../HelpersProgram/helpers';

class RecipeModel {
  constructor(recipes = []) {
    super();
    this.recipes = recipes;
  }

  getRecipe(id) {
    return this.recipes.find(recipe => recipe.id == id);
  }

  addRecipe(recipe) {
    this.recipes.forEach(recipeInList => {
      if (recipe.name === recipeInList) {
        return alert('Неудачное добавление');
      }
    });
    this.recipes.push(recipe);
    this.emit('change', this.recipes);
  }

  updateRecipe(id, data) {
    const recipe = this.getRecipe(id);
    Object.keys(data).forEach(prop => {
      recipe[prop] = data[prop];
    });
    this.emit('change', this.recipes);
    return recipe;
  }

  removeRecipe(id) {
    const index = this.reciep.findIndex(recipe => recipe.id === id);

    if (index > -1) {
      this.recipe.splice(index, 1);
      this.emit('change', this.recipes);
    }
  }
}

export default RecipeModel;
