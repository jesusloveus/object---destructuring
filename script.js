const teaOrder = {
    variety: 'oolong',
    teaName: 'winter sprout',
    origin: 'taiwan',
    price: 12.99,
    hasCaffeine: true,
    quantity: 3
    
};
// const price = teaOrder.price;
// const quantity = teaOrder.quantity;
// const teaName = teaOrder.teaName;


// DISTRUCTURING OBJECTS 
// const { price, quantity, teaName, ...others } = teaOrder;
// const { brewTemp: temp = 175 } = teaOrder;
// const { teaName: tea } = teaOrder;

// function checkout ( tea )
// { 
//     const { quantity, price } = tea;
//     return quantity * price;
// }
// checkout( teaOrder );

// ARRAY DESTRUCTURING
const students = [
    { name: 'Drake', gpa: 4.6 },
    { name: 'henrietta', gpa: 4.4 },
    { name: 'tuna', gpa: 4.0 },
    { name: 'Harry', gpa: 3.8 },
    { name: 'Ant', gpa: 3.2 }
];
// 
const [ first, ...losers ] = students;

// FUNCTION DESTRUCTURING

// DESTRUCTURING- SWAP
let delicious = 'Mayonnaise';
let disgusting = 'Whipped Cream';
// let both = [ delicious, disgusting ];
// [ disgusting, delicious ] = both;
[ disgusting, delicious ] = [ delicious, disgusting ];

let love = 'Romance';
let hate = 'fight';
[ love, hate ] = [ hate, love ];

// #
let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;

console.log( numPlanets ); // 8
console.log( yearNeptuneDiscovered ); // 1846

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
};

let { numPlanets, ...discoveryYears } = planetFacts;

console.log( discoveryYears );
// {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

function getUserData ( { firstName, favoriteColor = "green" } )
{
    return `Your name is ${ firstName } and you like ${ favoriteColor }`;
}

getUserData( { firstName: "Alejandro", favoriteColor: "purple" } );
// Your name is Alejandro and you like purple

getUserData( { firstName: "Melissa" } );
// Your name is Melissa and you like green

getUserData( {} );
// Your name is undefined and you like green
let [ first, second, third ] = [ "Maya", "Marisa", "Chi" ];

console.log( first ); // Maya
console.log( second ); // Marisa
console.log( third ); // Chi


