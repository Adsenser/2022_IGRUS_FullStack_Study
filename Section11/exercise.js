// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
// 2) Output ("alert") the three variable values
// 3) Try "grouping" the three variables together and still output their values thereafter
// 4) Also output the second element in your "main goals" variable
// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
// 6) Execute your custom command from (5) and output ("alert") the result

let lecture = 'udemy';
let price = 10000;
let goal = ['just','do','it'];

alert(lecture);
alert(price);
alert(goal);

let group = {
    lecture: 'udemy',
    price: 10000,
    goal: ['just','do','it']
};

alert(group.goal[1]);

function totalPrice(a) {
    return a + 7000
};


alert(totalPrice(price));
alert(totalPrice(4000));
alert(totalPrice(3000));
alert(totalPrice(1000));
