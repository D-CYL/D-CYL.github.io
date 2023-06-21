
const input = document.querySelector('.send')
const textArea = document.querySelector('.text-area')
let male = true

input.addEventListener('keydown', function (event) {
    console.log(event);
    console.log(event.key);
    console.log(event.target.value);
    if (event.key == 'Enter') {
        send(event.target.value);
    }
});



function send(msg) {
    console.log("TODO show on screen this msg: " + msg);
    // add the message to the text area
    const messageInput = document.createElement('div');
    if (male) {
        messageInput.innerHTML = chatBox(msg, '/img/user-icon.png');
        male = false;
    } else {
        messageInput.innerHTML = chatBox(msg, '/img/Chatbot-logo.png');
        male = true;
    }

    textArea.appendChild(messageInput);
    // clear the input field
    input.value = '';

    // Scroll to the bottom of the message container
    textArea.scrollTop = textArea.scrollHeight;

    if (msg.toLowerCase() === 'hello' || 'Hello') {
        // Display typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.innerHTML = chatBox("Typing...", '/img/Chatbot-logo.png');
        textArea.appendChild(typingIndicator);
        textArea.scrollTop = textArea.scrollHeight;

        // Simulate delay before sending the response
        setTimeout(function () {
            // Generate and send the response
            const response = "Hello there!";
            const responseInput = document.createElement('div');
            responseInput.innerHTML = chatBox(response, '/img/Chatbot-logo.png');
            textArea.appendChild(responseInput);
            textArea.scrollTop = textArea.scrollHeight;
            male = true;

            // Remove typing indicator
            textArea.removeChild(typingIndicator);
        }, 3000); // Delay of 1 second (1000 milliseconds)
    }
}


function chatBox(message, img) {
    const box = `
    <div class="col">
        <div class="card text-white bg-light small-width">
            <img class="card-img-top small-profile" src="${img}" alt="Title">
            <div class="card-body">
                <p class="card-text text-dark">${message}</p>
            </div>
        </div>
    </div>
    `
    return box
}