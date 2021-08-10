let button = document.querySelector("#submit");
let username = document.querySelector("#usernameEntry");
let title = document.querySelector("#titleEntry");
let content = document.querySelector("#contentEntry");
let blogPost = document.querySelector("#blogList");

let database = firebase.database().ref();

button.onclick = function updateDB(event){
    event.preventDefault();

    user = username.value;
    titl = title.value;
    contnt = content.value;
    username.value ="";
    title.value = "";
    content.value = "";
    
    let value = {
        USERNAME: user,
        TITLE: titl,
        CONTENT: contnt,
    }
    database.push(value);
}