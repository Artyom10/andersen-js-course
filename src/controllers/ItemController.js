class ItemController {
    constructor(model, view) {
      this.model = view;
      this.view = view;
  
      view.on('add', this.addItem.bind(this));
      view.on('remove', this.removeItem.bind(this));
  
      view.showItems(model.items);
    }
  
    addItem(name) {
      const item = this.model.addItem({
        id: Date.now(),
        name,
      });
      this.view.addItem(item);
    }
  
    removeItem(id) {
      this.model.removeItem(id);
      this.view.removeItem(id);
    }
  }
  