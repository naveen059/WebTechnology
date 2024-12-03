// jquery-basics.js: Core jQuery Techniques

// 1. Document Ready Function
$(document).ready(function() {
    console.log('Document is ready');
});

// 2. Selector Examples
$('#myElement').hide();           // Hide element by ID
$('.myClass').show();              // Show elements by class
$('p').text('New paragraph text'); // Modify text content

// 3. Event Handling
$('button').click(function() {
    alert('Button clicked!');
});

$('.hover-element').hover(
    function() { $(this).addClass('highlight'); },
    function() { $(this).removeClass('highlight'); }
);

// 4. DOM Manipulation
$('<div>New Element</div>').appendTo('body');
$('.container').append('<p>Appended paragraph</p>');

// 5. CSS Manipulation
$('#element').css({
    'color': 'red',
    'font-size': '20px'
});

// 6. Class Manipulation
$('.target').addClass('active');
$('.target').removeClass('inactive');
$('.target').toggleClass('selected');

// 7. Animation Methods
$('#element').fadeIn(1000);
$('#element').slideUp(500);
$('#element').animate({
    opacity: 0.5,
    left: '250px'
}, 1000);
