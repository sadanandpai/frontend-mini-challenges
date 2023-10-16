var firstname,lastname,phoneno,email,password,tnc;

function callvariables() {
    firstname= document.getElementById("firstname").value;
    lastname = document.getElementById("lastname").value;
    phoneno= document.getElementById("phoneno").value;
    email= document.getElementById("email").value;
    password= document.getElementById("password").value;
    tnc = document.getElementById("tnc").value;

    checkvariables();
}

var firstcheck = 0, lastcheck = 0, phonecheck = 0, emailcheck = 0, passcheck= 0;

function checkvariables(){
      var atvalue=0, atindex= 0, dotvalue= 0, uppercase= 0, numeric= 0, passdigits=0, phonedigit=0;

      if (firstname != ""){
        firstcheck=1;
      }
      if (lastname != ""){
        lastcheck= 1;
      }
      
      if ((phoneno.length==10)&&(phoneno.charAt(0) != 0)){
        phonecheck=1;
      }

      for(let i=0; i<=email.length; i++){
        if(email.charAt(i)=='@'){
            atvalue++;
            atindex = i;
        }
      }
      for (let j=atindex; j<=email.length; j++){
        if(email.charAt(j)=='.'){
            dotvalue++;
        }
      }

      if ((atvalue==1)&&(dotvalue==1)){
        emailcheck=1;
      }

      for(let k = 0; k<=password.length;k++){
        if((password.charAt(k)>='A')&&(password.charAt(k)<='Z')){
            uppercase++;
        }
        if((password.charAt(k)>='0')&&(password.charAt(k)<='9')){
            numeric++;
        }
        passdigits++;
      }
      if ((passdigits>=8)&&(uppercase>=1)&&(numeric>=1)){
        passcheck=1;
      }

      if (firstcheck==0){
        alert("Enter a first name")
      }
      if (lastcheck==0){
        alert("Enter a last name")
      }
      if (phonecheck==0){
        alert("Enter a valid Phone No.")
      }
      if (emailcheck==0){
        alert("Enter a valid email id")
      }
      if (passcheck==0){
        alert("Enter a valid password. Use a uppercase and a numeric value")
      }

      if((firstcheck==1)&&(lastcheck==1)&&(phonecheck==1)&&(emailcheck==1)&&(passcheck==1)){
        alert("Form Submitted Successfully");

        console.log(firstname)
        console.log(lastname)
        console.log(phoneno)
        console.log(email)
        console.log(password)

        firstcheck=0;
        lastcheck=0;
        phonecheck=0;
        emailcheck=0;
        passcheck=0;
          }

}
