
function addUser() {

  //Atividade: guardar o nome do usuário na variavel user_name
  user_name=document.getElementById("user_name").value;

  //Atividade: guardar na base de dados local o nome do usuário para podermos utilizar na outra tela
  localStorage.setItem ("user_name",user_name);

  //Atividade: abrir uma nova janela/tela chamada kwitter_room.html
 window.location="kwitter_room.html";
}

