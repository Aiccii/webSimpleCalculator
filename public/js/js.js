const defScreen = document.getElementById('screen');

// get all buttons in the calculator
const buttons = document.querySelectorAll('#calculator button');

// loop over all buttons and give all the buttons an event listener
buttons.forEach(button => {

    button.addEventListener('click', () => {
        const btnValue = button.innerText;


        if (btnValue === 'AC') {
            defScreen.innerHTML = '0';
        }else if (btnValue === '=') {
            defScreen.innerHTML = eval(defScreen.innerHTML);
        }else {
            if (defScreen.innerHTML === '0'){
                defScreen.innerHTML = btnValue;
            }else {
                defScreen.innerHTML += btnValue;
            }
        }

    })

});

