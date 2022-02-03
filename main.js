
// Função generica de metodo POST
function fazPost(url, body){
    console.log(body);
    let request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(body));

    request.onload = function(){
        console.log(this.responseText);
    }

    return request.responseText;
}

// Função para logar
function cadastraUsuario(){
    event.preventDefault();
    let url =  "http://localhost:3000/users/auth";
    let login = document.getElementById("email").value;
    let password = document.getElementById("senha").value;
    console.log(login, password);

    let body = 
    {
        "login": login,
        "password": password
    }
    fazPost(url, body);




}
// login = programar@gmail.com
// senha = Pr_123456789