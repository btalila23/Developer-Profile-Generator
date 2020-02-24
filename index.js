const inquirer = require("inquirer");
const {easy, medium, hard} = require('./generateHTML');
const axios = require('axios');
function getUserInput() {
    return inquirer.prompt ([{
        type: 'input'
        message: 'Input your github username'
        default: 'btalila23'
        name: 'username',


    }])
}

async function main() {
    const response = await getUserInput();
    easy(username, color);
}