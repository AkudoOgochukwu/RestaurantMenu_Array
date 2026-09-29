// Building a menu list using the array method and other functions.

const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $22.99', 'Oatmeal - $21.99', 'Frittata - $14'];
const mainCourseMenu = ['Steak - $25', 'Pasta - $18', 'Burger - $16', 'Salmon - $23'];
const dessertMenu = ['Cake - $8', 'Ice Cream - $7', 'Pudding - $23', 'Fruit Salad - $8'];


 const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
        document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

        // we are going to traverse mainCourseMenu array using the forEach array mthd
         let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;
 
// now for the desertMenu array using the for loop
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;

