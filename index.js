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
const dateRe = document.querySelector('#date-re')


const button = document.querySelector('button');

button.addEventListener('click', 
function age() {
    var first_date = document.getElementById('date').value;
    var first_month = document.getElementById('month').value;
    var first_year = document.getElementById('year').value;
  
    var date = new Date();
    var second_date = date.getDate();
    var second_month = 1 + date.getMonth();
    var second_year = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    if(first_date > second_date){
        second_date = second_date + month[second_month - 1];
        second_month = second_month - 1;
    }
    if(first_month > second_month){
        second_month = second_month + 12;
        second_year = second_year - 1;
    }
    var d = second_date - first_date;
    var m = second_month - first_month;
    var y = second_year - first_year;
    let d_status = false, m_status = false, y_status = false;
    if (first_date === '') {
        showError.innerHTML = 'Date cannot be blank';
        label1.style.color = 'red'
    }
    else if (isNaN(first_date)) {
        showError.innerHTML = 'You must enter date in numbers only';
        label1.style.color = 'red'
    }
    else if (first_date <= 0 || (first_date >= 32)) {
        showError.innerHTML = 'Your input must be greater than zero and less the 32';
        label1.style.color = 'red'
    }
    else {
        showError.innerHTML = '';
        label1.style.color = ''
        d_status = true;

    }
    if (first_month === '') {
        showError2.innerHTML = 'Month cannot be blank';
        label2.style.color = 'red'
    }
    else if (isNaN(first_month)) {
        showError2.innerHTML = 'You must enter month in numbers only';
        label2.style.color = 'red'
    }
    else if (first_month <= 0 || (first_month >= 13)) {
        showError2.innerHTML = 'Your input must be greater than zero and less the 13';
        label2.style.color = 'red'
    }
    else {
        showError2.innerHTML = '';
        label2.style.color = ''
        m_status = true;

    }
    if (first_year === '') {
        showError3.innerHTML = 'Year cannot be blank';
        label3.style.color = 'red'
    }
    else if (isNaN(first_year)) {
        showError3.innerHTML = 'You must enter year in numbers only';
        label3.style.color = 'red'
    }
    else {
        showError3.innerHTML = '';
        label3.style.color = ''
        y_status = true;

    }

    if (d_status && m_status && y_status) {

        dash.remove();
        dash1.remove();
        dash2.remove();
        
        yearRe.innerHTML = y;
        monthRe.innerHTML = m;
        dateRe.innerHTML = d;
    

    }



    button = document.querySelector('button').style.background = 'black'
});