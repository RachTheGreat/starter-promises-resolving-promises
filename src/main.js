const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const promise = welcome();

console.log(promise);

const question = "Will the weather be nice today?";
const tellPromise = tell(question);
// use a then() function to log the fortune's response 
tellPromise.then((fortune) => {
    console.log(question);
    console.log(fortune);
});

// use external variables!
// remember that you can use variables outside of the scope
// of the then() callback function




