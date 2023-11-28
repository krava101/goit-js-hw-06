'use strict';

class Storage {
    constructor(items) {
        this.items = items
    }

    getItems() {
        return this.items
    }

    addItem(newItem) {
        this.items.push(newItem)
    }

    removeItem(removedItem) {
        if (this.items.includes(removedItem)) {
            this.items = [...this.items.slice(0, this.items.indexOf(removedItem)),
                ...this.items.slice(this.items.indexOf(removedItem) + 1)]
        }
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]