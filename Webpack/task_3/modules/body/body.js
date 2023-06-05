import $ from 'jquery';
const _ = require('lodash');
import './body.css';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append(`<p id='count'></p>`);

$('button').on(
    'click',
    _.debounce(updatedCounter, 500, {
        leading: true,
    })
);

let count = 0;

function updatedCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
}