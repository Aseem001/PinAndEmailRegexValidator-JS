const prompt = require('prompt-sync')();
let pin = prompt('Enter pin: ');
validatePin(pin);
function validatePin(pin)
{
    let pinRegExp = RegExp('^[0-9]{6}$');
    if (pinRegExp.test(pin))
        console.log("Valid pin")
    else
        console.log("Invalid pin!")
}