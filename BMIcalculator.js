let button = document.getElementById('butn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_stat=false, weight_stat=false;

    if(height == '' || isNaN(height) || (height <= 0)){
        document.getElementById('nullheight').innerHTML = 'Please enter height';
    }else{
        document.getElementById('nullheight').innerHTML = '';
        height_stat=true;
    }

    if(weight == '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('nullweight').innerHTML = 'Please enter weight';
    }else{
        document.getElementById('nullweight').innerHTML = '';
        weight_stat=true;
    }

    if(height_stat && weight_stat){
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        if (bmi < 18.5){
            result.innerHTML = bmi + ' '+ 'You are under weight';
        }else if(bmi >= 18.5 && bmi < 25){
            result.innerHTML = bmi + ' '+ 'You are at normal weight';
        }else{
            result.innerHTML = bmi + ' ' + 'You are over weight';
        }
    
    }else{
        alert('There is an error');
        result.innerHTML = '';
    }
})