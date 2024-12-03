// ajax-techniques.js: AJAX and API Interaction Techniques

// 1. Basic GET Request
$.ajax({
    url: 'https://api.example.com/data',
    method: 'GET',
    success: function(response) {
        console.log('Data received:', response);
    },
    error: function(xhr, status, error) {
        console.error('Error:', error);
    }
});

// 2. Fetch User Data
function fetchUsers() {
    $.get('https://jsonplaceholder.typicode.com/users', function(users) {
        users.forEach(function(user) {
            $('#userList').append(`<li>${user.name}</li>`);
        });
    });
}

// 3. POST Request
function createUser(userData) {
    $.ajax({
        url: 'https://api.example.com/users',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(userData),
        success: function(response) {
            console.log('User created:', response);
        }
    });
}

// 4. Promise-based AJAX
function fetchData(url) {
    return $.ajax({
        url: url,
        method: 'GET'
    });
}

// Chaining requests
fetchData('https://api.example.com/users')
    .then(function(users) {
        return fetchData(`https://api.example.com/posts?userId=${users[0].id}`);
    })
    .done(function(posts) {
        console.log('User posts:', posts);
    })
    .fail(function(error) {
        console.error('Error:', error);
    });




