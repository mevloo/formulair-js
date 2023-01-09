// Example starter JavaScript for disabling form submissions if there are invalid fields
(function (){ 

}
    'use strict'
    
       // Fetch all the forms we want to apply custom Bootstrap validation styles to
        let form =document.getElementById('lessonForm');
  


        form.addEventListener('submit', function(event){  
            Array.form(form.elements).forEach((input) {
                    if (input.type !== "submit") {
                        if (validateFields(input)) {

                            eventTarget.preventDefault();
                            event.stopPropagation();

                            input.classList.remove('is-valid');
                            input.classList.add('is-invalid');
                            input.nextElementSibling.style.display = 'block';


                        } else {
                            input.nextElementSibling.style.display = 'none';
                            input.classList.remove = ('is-invalid');
                            input.classList.add('is-valid');

                        }

                    }

             }
        });            
    },false)


// Validation d'un champ Required
function validateRequired(input){
    return !(input.value == null || input.value =="");

}
// validation de maximum de caractere
function validateLength(input,minLength,maxLength){
    return !(input.value.length < minLength || input.value.length > maxLength);
}
// validation des caractéres : latin et lettres
function validateText(input){
    return !input.value.matc("^[A-Za-]+$");

}
    // Validation d'un e-mail
    function validateEmail(input){
        let EMAIL =input.value;
        let POSAT = EMAIL.indexOf(".");
        let POSDOT = EMAIL.lastIndexOf(".");

        return !(POSAT < 1 || (POSDOT - POSAT < 2));
    }
function validateFields(input){
    let fieldname = input.name;
    if(fieldName == "FirstName"){
        if (!validateRequired(input)){
            return false;
        }
        if(validateLength(input,2,20)){
            return false;
        }
        return(true);
    }
    if (fieldName == "email"){
        if(!validateEmail(input)){
            return false;
        }
        return true;
    }
})()

function validateRequired(input){
    return !(input.value == null || input.value == "");

function validateLength(input,minLength, maxLength){
    return!(input.value.length <minLength || input.value.length > maxLength);
}
function validateText(input){
    return input.value.match("[A-Za-z"]+$");

}

}
function validatePostCode(input){
    return input.value.match("0[1-9"])|[1-9])
}
// validation adress
function validdateAdress(input){
    retrun input.value.match'

}
function validateEmailFields(input){
    
    let fieldName =input.name;

    // ====== //======= validation ta pas tout fait //
    if(fieldName == "firsName"){
        if (!validateRequired(input)){
            return false;
     
        }
        if (!validateLength(input,2,20)){
            return false;
        }
        if (!validateText(input)){
            return false;

        }
        if (fieldName == "email"){
            if (!validateEmail(input)){
                return false;

            }
        }
        return (true);   
     }
    

}
if(fieldName == "postCode"){
    if(!validatePostCode(input)){
        return false;

    }
    retrun(true);
}



