document.getElementById('healthForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const waterIntake = parseFloat(document.getElementById('waterIntake').value);
    const steps = parseInt(document.getElementById('steps').value);

    if (isNaN(waterIntake) || isNaN(steps)) {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
    } else {
        document.getElementById('result').innerText = `You drank ${waterIntake} oz of water and took ${steps} steps today.`;
    }
});

document.getElementById('mealForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const mealName = document.getElementById('meal').value;
    const calories = parseInt(document.getElementById('calories').value);

    if (!mealName || isNaN(calories)) {
        alert('Please enter valid meal and calories.');
        return;
    }

    const mealItem = document.createElement('li');
    mealItem.innerText = `${mealName}: ${calories} calories`;

    document.getElementById('mealList').appendChild(mealItem);

    document.getElementById('meal').value = '';
    document.getElementById('calories').value = '';
});
