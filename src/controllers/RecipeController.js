class RecipeController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
  
      view.on('add', this.addRecipe.bind(this));
      view.on('remove', this.removeRecipe.bind(this));
  
      view.showRecipes(model.recipes);
    }
  
    addRecipe(name) {
      const recipe = this.model.addRecipe({
        id: Date.now(),
        name,
        items: this.view.getNecessaryItems(),
      });
      this.view.addRecipe(recipe);
    }
  
    removeRecipe(id) {
      this.model.removeRecipe(id);
      this.view.removeRecipe(id);
    }
  }
  