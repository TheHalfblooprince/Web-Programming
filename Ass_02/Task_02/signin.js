import {PersonInfo} from './signup';

document.getElementById('signInForm').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        alert('Please fill in all fields for Sign In.');
        event.preventDefault();
    }

    verification(username,password)

    const verification = (username,password)=> {
        if(username === PersonInfo.username && password===PersonInfo.password){
            alert(`Sign-In credentials met`)
        }
        else {
            alert(`Please Sign-Up first`)
        }
    }
    
});

