const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (but) {
    console.log(but);
    but.addEventListener( 'click', function(event){
       console.log(event);
       console.log(event.target);
        if(event.target.id === "grey"){
            body.style.backgroundColor = event.target.id;
        }

         if(event.target.id === "Yellow"){
            body.style.backgroundColor = event.target.id;
        }
         if(event.target.id === "White"){
            body.style.backgroundColor = event.target.id;
        }
         if(event.target.id === "green"){
            body.style.backgroundColor = event.target.id;
        }
    })
})