let MenuItem = function (name, price, isAvailable, spicy) {
  this.name = name;
  this.price = price;
  this.isAvailable = isAvailable;
  this.spicy = spicy;
};

let Menu = function (resturantName, menuItemList) {
  this.resturantName = resturantName;
  this.menuItemList = menuItemList;
  this.averageRates = function () {
    let sum = this.menuItemList.reduce((acc, element) => {
      acc + element.price;
    });
    return Number(sum / menuItemList.length);
  };
};

Menu.prototype.AddToMenu = function (menuItem) {
  this.menuItemList = [...this.menuItemList, menuItem];
};

Menu.prototype.RemoveFromMenu = function (menuItem) {
  let index = this.menuItemList.findIndex(
    (element) => element.name == menuItem.name
  );
  this.menuItemList = this.menuItemList.slice(index, 1);
};

let myRestaurantMenu = new Menu('Kinara', []);
myRestaurantMenu.AddToMenu(new MenuItem('Idli', 60, true, 'low'));
myRestaurantMenu.AddToMenu(new MenuItem('Dosa', 90, true, 'medium'));
myRestaurantMenu.AddToMenu(new MenuItem('Uttapam', 65, true, 'medium'));

console.log(myRestaurantMenu);
console.log(myRestaurantMenu.averageRates());
