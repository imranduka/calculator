document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            if (button.value === 'clear') {
                display.value = '';
            } else if (button.value === 'calculate') {
                display.value = eval(display.value);
            } else if (button.value === 'decimal') {
                if (!display.value.includes('.')) {
                    display.value += button.value;
                }
            } else {
                display.value += button.value;
            }
        });
    });
});
