document.getElementById('verify-btn').addEventListener('click', function() {
    const birthdateInput = document.getElementById('birthdate').value;
    const messageBox = document.getElementById('message-box');
    
    
    if (!birthdateInput) {
        showMessage("Please select your date of birth.", "error");
        return;
    }

    const birthDate = new Date(birthdateInput);
    const today = new Date();
    
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    
   
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    
    const minimumAge = 18;

    if (age >= minimumAge) {
        showMessage("Access Granted! Welcome to the website.", "success");
        
    } else {
        showMessage(`Access Denied. You must be at least ${minimumAge} years old.`, "error");
    }
});


function showMessage(text, status) {
    const messageBox = document.getElementById('message-box');
    messageBox.textContent = text;
    messageBox.className = `message-box ${status}`; 
}
