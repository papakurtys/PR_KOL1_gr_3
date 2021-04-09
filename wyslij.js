function wyslij(){
    var Email = document.formularz.email.value
    var Temat = document.formularz.temat.value
    var Wiadomosc = document.formularz.wiad.value

    if (Email != ""){
        document.getElementById("wynik").innerHTML="Email: "+ Email
        document.getElementById("wynik2").innerHTML="Temat: "+ Temat
        document.getElementById("wynik3").innerHTML="wiadomość: "+ Wiadomosc
        }

}