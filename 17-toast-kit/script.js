let toastBox =document.getElementById("toastBox");
let successMsg ='successfully submitted'
let errorMsg ='please fix the error'
let invalidMsg ='invalid input,check again' 

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML =msg;
    toastBox.appendChild(toast);

}




showToast(successMsg);   
showToast(errorMsg);     
showToast(invalidMsg); 