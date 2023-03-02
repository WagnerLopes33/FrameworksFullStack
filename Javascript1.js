function Enviar(){

    var nome = document.getElementById("nomeid");
    var fone = document.getElementById("foneid");
    var email = document.getElementById("emailid");
    

    if (nome.value != ""){
        alert('obrigado sr(a)' + nome.value + 'os seus dados foram encaminhados com sucesso');
        
    }
    alert('nome: ' + nome.value + 'telefone: ' + fone.value + 'email: ' + email.value)

}

function Mudanca(){
    var nome = document.getElementById("nomeid");
    var email = document.getElementById("emailid");
    document.getElementById('emailid').value = nome.value
}
