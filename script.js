
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !mobile || !message) {
        alert('Please fill out all fields!');
        return;
    }

    alert('Thank you for your message!');
    this.reset();
});
