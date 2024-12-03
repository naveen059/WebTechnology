// async.js: Asynchronous JavaScript Techniques

// 1. Basic Promise
const fetchUserData = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { 
                id: userId, 
                name: 'John Doe', 
                email: 'john@example.com' 
            };
            resolve(user);
        }, 1000);
    });
};

// 2. Async/Await with Error Handling
async function getUserDetails(userId) {
    try {
        const user = await fetchUserData(userId);
        console.log('User Details:', user);
        return user;
    } catch (error) {
        console.error('Error fetching user:', error);
    }
}

// 3. Multiple Promise Handling
const fetchMultipleResources = async () => {
    try {
        const [users, posts, comments] = await Promise.all([
            fetch('/api/users').then(res => res.json()),
            fetch('/api/posts').then(res => res.json()),
            fetch('/api/comments').then(res => res.json())
        ]);
        
        return { users, posts, comments };
    } catch (error) {
        console.error('Error fetching resources:', error);
    }
};

// 4. Promise Chaining
fetchUserData(123)
    .then(user => {
        console.log('Initial User:', user);
        return fetch(`/api/profile/${user.id}`);
    })
    .then(profileResponse => profileResponse.json())
    .then(profile => {
        console.log('User Profile:', profile);
    })
    .catch(error => {
        console.error('Error in promise chain:', error);
    });

// 5. Async Iterator
const asyncGenerator = async function* () {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
};

// 6. Cancellable Fetch with AbortController
const cancelableFetch = (url, timeout = 5000) => {
    const controller = new AbortController();
    const signal = controller.signal;

    const timeoutId = setTimeout(() => controller.abort(), timeout);

    return fetch(url, { signal })
        .then(response => response.json())
        .finally(() => clearTimeout(timeoutId));
};