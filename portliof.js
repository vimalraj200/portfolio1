const form = document.querySelector('#form')
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();

})

function validateInputs(){
    const usernameval=username.Value.trim()
    const emailval=username.Value.trim();
    const passwordval=username.Value.trim();
    const cpasswordval=username.Value.trim();

    let success=true

    if(usernameval===''){
        success=false;
        seterror(username,'username is required')
    }
    else{
        setsuccess(username)
    }
    if(emailval===''){
        success=false;
        seterror(email,'email is required')
    }
    else{
        setsuccess(email)
    }
    if(passwordval===''){
        success=false;
        seterror(password,'password  is required')
    }
    else{
        setsuccess(password)
    }
    if(cpasswordval===''){
        success=false;
        seterror(cpassword,'cpassword is required')
    }
    else{
        setsuccess(cpassword)
    }

}


function seterror(element,mesage){
    const inputgroup =element.parentelement;
    const errorelement =inputgroup.querySelector('.error');

    errorelement.innertext = message;
    inputgroup.classlist.add('error')
    inputgroup.classlist.remove('success')



}
function seterror(element){
    const inputgroup =element.parentelement;
    const errorelement =inputgroup.querySelector('.error');

    errorelement.innertext = '';
    inputgroup.classlist.add('success')
    inputgroup.classlist.remove('error')
}
const validateemail=(email)=>{
    return String(email)
    .toLowerCase()
    .match( /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

}