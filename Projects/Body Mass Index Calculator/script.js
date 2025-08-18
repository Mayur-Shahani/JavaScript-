const form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#result');
     
    if(isNaN(height) && isNaN(weight) ){
        results.innerHTML = "Please give Valid weight and Height"
    }
     else if(height === "" || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`
    }
     else if(weight === "" || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`
    }
    else{
         const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    

   if(bmi < 18.6){
            results.innerHTML = `Your BMI is ${bmi} (Underweight)`;
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            results.innerHTML = `Your BMI is ${bmi} (Normal Range)`;
        }
        else {
            results.innerHTML = `Your BMI is ${bmi} (Overweight)`;
        }
    }
})