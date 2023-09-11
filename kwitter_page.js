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
    

// Atividade: guardar numa variável o nome do usuário
var user_name = localStorage.getItem ("user_name");
// Atividade: guardar numa variável o nome da sala
var room_name = localStorage.getItem ("room_name");
// Atividade: crie a função send
function send (){
msg = document.getElementById ("msg").value;
firebase.database ().ref (room_name).push ({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById ("msg").value = "";
}
function logout (){

      localStorage.removeItem ("user_name");
      localStorage.removeItem ("room_name");
      window.location = "index.html";
      }
      



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log (firebase_message_id);
         console.log (message_data);
         name = message_data ["name"];
         message = message_data ["message"];
         like = message_data ["like"];
         name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";//guarda o nome como tag e a imagem do verificado
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";//guarda a mensagem como tag
         like_button = "<button class='btn btn-warning' id='" + firebase_message_id + "' value='" + like + "' onclick='updateLike(\"" + firebase_message_id + "\")'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";//guarda o desenho do like
         row = name_with_tag + message_with_tag + like_button + span_with_tag;
         document.getElementById("output").innerHTML += row;
      } });  }); }
getData();

// Atividade: crie a função updateLike
function updateLike (message_id){
       console.log("CLICARAM NO BOTÃO!!!");
       button_id = message_id;
       likes = document.getElementById (button_id).value;
       update_likes = Number (likes)+1;
       console.log(update_likes);
       firebase.database().ref(room_name).child (button_id).update ({
            like:update_likes
       })
}