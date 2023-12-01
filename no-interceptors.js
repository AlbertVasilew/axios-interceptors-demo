import axios from 'axios';

console.log("> Starting loading indicator");

axios.get("http://localhost:5121/get-questions")
    .then(response => {
        console.log("Retrieved data: ", response?.data);
        console.log("> Stopping loading indicator");
    })
    .catch(error => {
        console.log(error.code)
        console.log("> Stopping loading indicator");
    });