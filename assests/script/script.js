var s = skrollr.init({ forceHeight: false});


document.getElementById("menubar").addEventListener("click", function(){
    document.getElementById("x1").style.display = "block";
    document.getElementById("logo").classList.add("logo-style");
});
document.getElementById("btn").addEventListener("click", function(){
    document.getElementById("x1").style.display = "none";
    document.getElementById("logo").classList.remove("logo-style");
});


// Feature Active Class Toggle
let browse = document.getElementsByClassName('browse');
let articles = document.getElementsByClassName('item');
for(let i = 0 ; i < browse.length ; i++){
    
    browse[i].addEventListener('click',function(){

        for(let j = 0 ; j  < articles.length ; j++){   
            articles[j].style.display = "none";        
            if (i == j){              
                browse[i].classList.add('active');    
                articles[i].style.display = "block";  
            }else{
                browse[j].className = browse[j].className.replace("active", " ");
            }
             
        }           
    });  
}

//Question Code

const contentBox = document.getElementsByClassName('content');

for(let y = 0; y < contentBox.length; y++){
    contentBox [y].addEventListener('click',function(){
        contentBox[y].classList.toggle('show');
    });
}

//Validation




function EmailValidation(){
    event.preventDefault();
    const userEmail = document.getElementById('userEmail').value;
     let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     let result = regex.test(userEmail);
     let message = document.getElementById('validMessage');
     if(result){
        message.innerHTML = "Valid Email";
        message.style.color="#fff";
     }else{       
        message.innerHTML = "Please insert a valid email";
        message.style.color="hsl(0, 94%, 66%)";
        return (false)
     }  

}



/*x.addEventListener("click", function(){
    event.preventDefault();
     let userEmail = document.getElementById('useremail').value;
     let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     let result = regex.test(userEmail);
     if(result){
        alert(true);
     }else{
        let message = document.getElementById('validMessage');
        message.innerHTML = "Please insert a valid email";
        return (false)
     }    
 });*/

