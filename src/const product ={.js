const product ={
    name: "Quan lot khe nu",
    inventory: [
        {
            id: 1,
            size: 'xs',
            color: 'red',
            quantity: 1000,
            price: 700000,
        },
        {
            id: 2,
            size: 'xs',
            color: 'blue',
            quantity: 200,
            price: 100000,
        },
        {
            id: 3,
            size: 'm',
            color: 'red',
            quantity: 0,
            price: 100000,
        },
        {
            id: 4,
            size: 'm',
            color: 'blue',
            quantity: 100,
            price: 200000,
        },
    ]
};
function onlyUnique(value, index, array) {
return array.indexOf(value) === index;
}
const allSizes = product.inventory.map(item => item.size).filter(onlyUnique); // => [xs], [m] => selectedSize =  xs
const allColors = product.inventory.map(item => item.color).filter(onlyUnique); // => [red], [blue] => selectedColor =  red
const selected = product.inventory.filter(item => item.size === selectedSize && item.color === selectedColor);
// selected =  {
//     id: 1,
//     size: 'xs',
//     color: 'red',
//     quantity: 100,
//     price: 700000,
// }
