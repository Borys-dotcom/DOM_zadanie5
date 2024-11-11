let allAgreements = document.getElementById('allAgreements');
let form = document.querySelector('form');

allAgreements.addEventListener("click", setAgreements);
form.addEventListener("submit", validate);


function setAgreements(){
    let agreement1 = document.getElementById('agreement1');
    let agreement2 = document.getElementById('agreement2');

    if (allAgreements.checked){
        agreement1.checked = true;
        agreement1.disabled = true;
        agreement2.checked = true;
        agreement2.disabled = true;
    }
    else{
        agreement1.checked = false;
        agreement1.disabled = false;
        agreement2.checked = false;
        agreement2.disabled = false;
    }
}

function validate(event){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let agreement1 = document.getElementById('agreement1').checked;
    let abort = false;
    let message = "";
    let form = document.querySelector('form');

    if (name.value === ""){
        message += "Nie podano imienia i nazwiska!\n";
        abort = true;
    }
    
    if (email.value === ""){
        message += "Nie podano adresu email!\n";
        abort = true;
    }
    else if (email.value.indexOf("@") === -1){
        message += "W adresie email brakuje znaku @!\n";
        abort = true;
    }
    
    if (!agreement1){
        message += "Nie zaznaczono zgody nr. 1!\n";
        abort = true;
    }

    if (abort) {
        event.preventDefault();

        if (!form.firstElementChild.classList.contains('redParagraph')){
            let alertParagraph = document.createElement('p');
            alertParagraph.classList.add('redParagraph');
            form.firstElementChild.insertAdjacentElement("beforebegin", alertParagraph);
            alertParagraph.innerText = message;
        }
        else{
            let alertParagraph = document.getElementsByClassName('redParagraph')[0];
            console.log(alertParagraph);
            alertParagraph.innerText = message;
        }
    }
}
