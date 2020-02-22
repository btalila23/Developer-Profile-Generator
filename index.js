const inquirer = require('inquirer');
const pdf = require("pdf-creator-node");
const axios = require('axios');
const url = "https://api.github.com/users/";
inquirer
.prompt([{
    name:"username"
    message: "What is your Github username?"
}])
.then(answer=>{
    axios.get(url + answers.username).then(response=>{
        console.log(response);
        //create pdf here
    }

    
})