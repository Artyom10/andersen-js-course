import EventEmitter from '../HelpersProgram/helpers';
import { allowDrop, drag, drop, addDrag } from '../HelpersProgram/DragAndDrop';

class ItemView extends EventEmitter {
  constructor() {
    super();
    this.form = document.getElementById('createItemPlace');
    this.input = document.getElementById('createItemInput');
    this.listOfItems = document.getElementById('listOfItems');

    this.placeForNewCreateWand = document.getElementById('dropPlace');
    this.listOfWand = document.getElementById('listOfWands');
    this.createWandButton = document.getElementById('buttondWand');
    this.deleteCraftTable = docyument.getElementById('buttonWaste');

    this.form.addEventListener('submit', this.handleAdd.bind(this));
    this.addEventsListener();
  }

  createItem(createdItem) {
    const item = document.createElement('li');
    item.className = 'ItemElem';
    item.setAttribute('data-id', createdItem.id);
    item.textContent = createdItem.name;
    addDrag(item);
    this.listOfItems.appendChild(item);

    const removeButton = document.createElement('button');
    removeButton.className = 'remove';
    removeButton.textContent = 'RM';
    item.appendChild(removeButton);
    return this.addEventRemoveButton(item);
  }

  showItems(items) {
    items.forEach(item => {
      const listItem = this.createItem(item);
      this.listOfItems.appendChild(listItem);
    });
  }

  addEventRemoveButton(item) {
    const deleteButton = item.querySelector('.remove');
    deleteButton.addEventListener('click', this.handleRemove.bind(this));
    return item;
  }

  addEventsListener() {
    Array.from(this.listOfItems).forEach(item => {
      item.addEventListener('drop', drop);
      item.addEventListener('dragover', allowDrop);
    });
  }

  findListItem(id) {
    return this.listOfItems.querySelector(`[data-id="${id}"]`);
  }

  addItem(item) {
    const newItem = this.createItem(item);
    this.input.value = '';
    this.listOfItems.appendChild(newItem);
  }

  removeItem(id) {
    const item = this.findListItem(id);
    this.listOfItems.removeChild(item);
  }

  handleAdd(event) {
    event.preventDefault();
    if (!this.input.value) {
      return alert('Вы не добавили элемент');
    }
    this.emit('add', this.input.value);
  }

  handleRemove({ target }) {
    const item = target.parentNode;
    this.emit('remove', item.getAttribute('data-id'));
  }

  showItems(items) {
    items.forEach(item => {
      const listItem = this.createItem(item);
      this.listOfItems.appendChild(listItem);
    });
  }
}

export default ItemView;
