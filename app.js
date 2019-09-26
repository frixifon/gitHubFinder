loadEventListeners();

function loadEventListeners(){
    document.addEventListener("DOMContentLoaded", getObject);
}

function getObject(){
    const gitHub = new GitHub;
    gitHub.getUser("frixifon")
    .then(data=>{
        console.log(data);
    })
}