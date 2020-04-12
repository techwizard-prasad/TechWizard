// When the user clicks on the button, open the modal
function showModalPopup(modal) {
  document.getElementById(modal).style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal(modal) {
  document.getElementById(modal).style.display = "none";
}

//To mail contact form 
function ContactMe(event) {
  var name= document.getElementById("name").value; 
  var email= document.getElementById("email").value; 
  var message= document.getElementById("message").value; 

  var url = `mailto:prasadnaik0543@gmail.com?Subject=Message%20From%20${name}%20-%20${email}&body=${message}`
    setTimeout(function(){window.location = url;}, 0); 
}