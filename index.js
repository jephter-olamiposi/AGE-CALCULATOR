const button = document.querySelector('button');
button.addEventListener('click', () => {

    const dash = document.querySelector('#dash');
    const dash1 = document.querySelector('#dash1');
    const dash2 = document.querySelector('#dash2');
    const label1 = document.querySelector('#l1');
    const label2 = document.querySelector('#l2');
    const label3 = document.querySelector('#l3');

    const showError = document.querySelector('#small');
    const showError2 = document.querySelector('#small1');
    const showError3 = document.querySelector('#small2');
    const yearRe = document.querySelector('#year-re');
    const monthRe = document.querySelector('#month-re');
    const dateRe = document.querySelector('#date-re');
    const firstDate = document.querySelector('#date').value;
    const firstMonth = document.querySelector('#month').value;
    const firstYear = document.querySelector('#year').value;


    let d_status = false, m_status = false, y_status = false;
    if (firstDate === '') {
        showError.innerHTML = 'Date cannot be blank';
        label1.style.color = 'red'
    }
    else if (isNaN(firstDate)) {
        showError.innerHTML = 'You must enter date in numbers only';
        label1.style.color = 'red'
    }
    else if (firstDate <= 0 || (firstDate >= 32)) {
        showError.innerHTML = 'Your input must be greater than zero and less the 32';
        label1.style.color = 'red'
    }
    else {
        showError.innerHTML = '';
        label1.style.color = ''
        d_status = true;

    }
    if (firstMonth === '') {
        showError2.innerHTML = 'Month cannot be blank';
        label2.style.color = 'red'
    }
    else if (isNaN(firstMonth)) {
        showError2.innerHTML = 'You must enter month in numbers only';
        label2.style.color = 'red'
    }
    else if (firstMonth <= 0 || (firstMonth >= 13)) {
        showError2.innerHTML = 'Your input must be greater than zero and less the 13';
        label2.style.color = 'red'
    }
    else {
        showError2.innerHTML = '';
        label2.style.color = ''
        m_status = true;

    }
    if (firstYear === '') {
        showError3.innerHTML = 'Year cannot be blank';
        label3.style.color = 'red'
    }
    else if (isNaN(firstYear)) {
        showError3.innerHTML = 'You must enter year in numbers only';
        label3.style.color = 'red'
    }
    else {
        showError3.innerHTML = '';
        label3.style.color = ''
        y_status = true;

    }


    const date = new Date();

    const secondDate = date.getDate();
    const secondMonth = date.getMonth();
    const secondYear = date.getFullYear();

    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (firstDate > secondDate) {
        secondDate = secondDate + month[secondMonth - 1];
        secondMonth = secondMonth - 1;
    }
    if (firstMonth > secondMonth) {
        secondMonth = secondMonth + 12;
        secondYear = secondYear - 1;
    }
    if (d_status && m_status && y_status) {
        d = secondDate - firstDate;
        m = secondMonth - firstMonth;
        y = secondYear - firstYear;


        dash.remove();
        dash1.remove();
        dash2.remove();

        yearRe.innerHTML += y;
        monthRe.innerHTML += m;
        dateRe.innerHTML += d;
    }
    else {

    }

    button = document.querySelector('button').style.background = 'black'

})