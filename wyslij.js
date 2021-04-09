function wyslij(){
    var Email = document.formularz.email.value
    var Temat = document.formularz.temat.value
    var Wiadomosc = document.formularz.wiad.value

    if (Email != ""){
        document.getElementById("wynik").innerHTML="Email: "+ Email
        document.getElementById("wynik").innerHTML="Temat: "+ Temat
        document.getElementById("wynik").innerHTML="wiadomość: "+ Wiadomosc
        }

}