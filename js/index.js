$(document).ready(function(){

//DOM Elements
var body = document.body
$(body).css('overflow', 'auto')

var header = document.getElementsByClassName('header')
$(header).css('display', 'none')

var scrolldownbutton = document.getElementsByClassName('button')
var me = document.getElementById('first')
var about = document.getElementById('second')

//Scrolling
var viewheight = window.innerHeight

$(scrolldownbutton).on('click', function() {
    me.scrollTo({top: about.scrollHeight, behavior: 'smooth'});
})

})
