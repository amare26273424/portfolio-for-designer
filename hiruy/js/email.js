
const namex = document.getElementById('name')
const emailx = document.getElementById('email')
const textareax = document.getElementById('textarea')
const submit = document.getElementById('submit')

// to validate the email  



    submit.addEventListener("click",()=>{
        console.log('hi')
      if (!namex.value || !emailx.value || !textareax.value ) {
         // e.preventDefault();
       alert('Please fill in all required fields.');
      }
      else if(! emailx.checkValidity()){
         alert("enter valid email")
      }
      
      else{ 
         
        
         
       var formData = {
          from_name:namex.value,
         email_id:emailx.value,
         message:textareax.value
      };
      // send the email
      
    
      emailjs.send('service_1kun2ba', 'template_of5whtr', formData)
         .then( function(response) {
            alert('SUCCESS!', response.status, response.text);
            namex.value = '';
            emailx.value=''
            textareax.value=''


         }, function(error) {
            console.log(error)
            alert('FAILED...', error);
         });

        }    

    })