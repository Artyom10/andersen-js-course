export function allowDrop(event) {
    event.preventDefault();
  }
  
  export function drag(event) {
    event.dataTransfer.setData('text', ev.target.id);
  }
  
  export function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    if (!event.target.childNodes.length) {
      event.target.appendChild(document.getElementById(data));
    }
  }
  
  export function addDrag(item) {
    item.setAttribute('draggable', 'true');
    item.addEventListener('dragstart', drag);
  }
  
