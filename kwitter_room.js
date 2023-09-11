// Atividade: cole o link do firebase aqui
const firebaseConfig = {
  apiKey: "AIzaSyCvYCT5PkD7AWh_fnbOIeSsR-nCtl2opDs",
  authDomain: "uauuuuuuuu-redee-sociallllllll.firebaseapp.com",
  databaseURL: "https://uauuuuuuuu-redee-sociallllllll-default-rtdb.firebaseio.com",
  projectId: "uauuuuuuuu-redee-sociallllllll",
  storageBucket: "uauuuuuuuu-redee-sociallllllll.appspot.com",
  messagingSenderId: "478625191787",
  appId: "1:478625191787:web:7673de45330ffcda4cde2e"
};
firebase.initializeApp (firebaseConfig);//essa linha inicializa o firebase 

//Atividade: guardar numa variável o nome do usuário
var user_name = localStorage.getItem ("user_name"); 
//Atividade: mudar o texto da tela para desejar boas vindas ao usuário
document.getElementById ("user_name").innerHTML = "BEM VINDO(A)"+user_name + "!!!";
function addRoom()
{
//Atividade: guardar numa variável o nome da sala
room_name = document.getElementById ("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionar sala"
  });

    localStorage.setItem("room_name", room_name);

}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row; 
    });
  });

}
//Atividade: chamar a função getData
getData ();
//Atividade: criar a função redirectToRoomName
function redirectToRoomName (name){
localStorage.setItem ("room_name",name);
window.location = "kwitter_page.html";
}
//Atividade: criar a função logout
function logout (){

localStorage.removeItem ("user_name");
localStorage.removeItem ("room_name");
window.location = "index.html";
}
