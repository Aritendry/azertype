const listMot=["Aritendry","Banane","Banana","Peah","mario","Luigi","lamborgabar","Ferrari","chevroletto"]


let InputEcriture = document.getElementById("inputecriture")
let BtnValidation = document.getElementById("btn_validation")
let MotaTrouver = document.querySelector("#motatrouver")
let SpanScore = document.querySelector("#zonescore span")

function motaleatoire(){
    const IndexListe = Math.floor(Math.random() * listMot.length)
    const MotAleatoire = listMot[IndexListe]
    MotaTrouver.textContent = MotAleatoire
}

BtnValidation.addEventListener("click",function(){
    // Pour recuperer la valuer saisie par l'utilisateur
    let MotSaisie=InputEcriture.value.trim()

    //Recuperer le mot a trouver
    let motATrouver=MotaTrouver.textContent.trim()

    if (MotSaisie == motATrouver){
        console.log("bien joue vous avez trouver le mot")
        SpanScore.textContent = parseInt(SpanScore.textContent)+1
    }
    else if(MotSaisie =="eggeggproteinmax"){
        console.log("Vous avez gagne plein de protein")
        SpanScore.textContent= parseInt(SpanScore.textContent)+10000
    }
    else{
        console.log("Dommage vous avez perdu")
        SpanScore.textContent = parseInt(SpanScore.textContent)-1
    }
    motaleatoire()
    InputEcriture.value=""
})