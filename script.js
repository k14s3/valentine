function answer(response) {
    if (response === 'yes') {
        document.getElementById('valentineImage').src = 'heart.jpg';
        document.getElementById('response').innerText = 'Yay! You said YES!';
    } else if (response === 'no') {
        document.getElementById('response').innerText = 'Not an option. It was just there for decoration.';
    }
}
