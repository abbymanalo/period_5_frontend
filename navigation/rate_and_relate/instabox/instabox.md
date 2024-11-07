---
layout: post 
title: Instabox
search_exclude: true
permalink: rate_and_relate/instabox
menu: nav/rate_and_relate.html
author: Aadi, Aaditya, Aditya, Kanhay
---

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
<style>
    body {
        font-family: "Poppins", sans-serif;
        background-color: #333;
        color: white;
        margin: 0;
        padding: 0;
    }
    hr {
        border-color: #333;
    }
    /* Navbar styling */
    .navbar {
        padding: 10px;
        display: flex;
        align-items: center;
    }
    .navbar a {
        color: white;
        text-decoration: none;
        padding: 10px 20px;
        font-size: 18px;
    }
    .navbar a:hover {
        background-color: #6a59a3;
        border-radius: 5px;
    }
    .container {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        height: calc(100vh - 60px);
    }
    /* Added margin for each box */
    .leaderboard-box,
    .instabox-box {
        margin: 10px;
    }
    .leaderboard-box {
        background-color: #444;
        border-radius: 10px;
        padding: 10px;
        height: 100%;
        /* overflow-y: scroll; */
        box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    }
    .instabox-box {
        background-color: #555;
        border-radius: 10px;
        padding: 20px;
        width: 65%;
        display: flex;
        flex-direction: column;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    }
    /* Instabox chatbox */
    .instabox {
        flex-grow: 1;
        overflow-y: auto;
        padding: 20px;
        background-color: #666;
        border-radius: 5px;
    }
    .instabox p {
        margin: 10px 0;
    }
    .chatinput{
        background-color: #121212;
        resize: none;
        width: 100%;
        height: 85px;
        padding: 10px;
        border-radius: 5px;
        border: none;
        font-size: 16px;
        overflow: hidden;
        text-overflow: none;
    }
    #charCount {
        bottom: 5px;
        right: 10px;
        font-size: 12px;
        color: #aaa;
    }
    .leaderboard-box h2 {
        text-align: center;
        margin-bottom: 10px;
    }
    .leaderboard ul li {
        padding: 10px;
        border-bottom: 1px solid #777;
    }
    .leaderboard ul {
        list-style: none;
        padding: 0;
    }
    /* Responsive design */
    @media (max-width: 768px) {
        .container {
            flex-direction: column;
            align-items: center;
        }
        .leaderboard-box {
            width: 100%;
            height: auto;
            margin-bottom: 20px;
        }
        .instabox-box {
            width: 100%;
        }
    }
</style>
<body>
    <hr>
    <!-- Navbar -->
    <div class="navbar">
        <a href="">Home</a>
        <a href="{{site.baseurl}}/rate_and_relate/instabox/profile">Profile</a>
        <a href="{{site.baseurl}}/rate_and_relate/instabox/settings">Settings</a>
    </div>
    <div class="container">
        <!-- Instabox chatbox -->
        <div class="instabox-box">
            <h2>Instabox 💬</h2>
            <div class="instabox" id="chat-messages">
                <p>Chat Messages: </p>
                <div id="messages-container"></div>
            </div>
            <br>
            <div class="chatinput" id="chatinput" contenteditable="true"></div>
            <br>
            <span id="charCount">100</span>
        </div>
        <!-- Leaderboard box -->
        <div class="leaderboard-box">
            <h2>Leaderboard 🏆</h2>
            <div class="leaderboard">
                <ul>
                    <li>🥇 Rama Kama Jamabama - 63</li>
                    <li>🥈 Jenneth Jabberson - 159</li>
                    <li>🥉 Googly Moogly - 203</li>
                    <li>🔺 Shannon Cannonball - 443</li>
                    <li>🔺 Shish Kabob - 652</li>
                    <li>🔺 Frenk Bonobo - 654</li>
                    <li>🔺 Galvin Ized-Steel - 730</li>
                </ul>
            </div>
        </div>
    </div>
    <script>
        const instabox = document.getElementById("instabox");
        const chatInput = document.getElementById("chatinput");
        // Restore all message on window load
        window.onload = function() {
            for (let i = 1; i <= parseInt(localStorage.getItem("messageCount")); i++) {
                const messageElement = document.createElement("p");
                messageElement.innerHTML = `<strong>Me:</strong> ${localStorage.getItem("message" + JSON.stringify(i))}`;
                instabox.appendChild(messageElement);
            }
        };
        // Limit input to 100 characters
        chatInput.addEventListener("input", function () {
            // Calculate remaining characters
            const remainingChars = Math.max(100 - chatInput.textContent.length, 0);
            charCount.textContent = remainingChars;
            // Change the color if fewer than 10 characters remain
            charCount.style.color = remainingChars < 10 ? "#ca3433" : "#aaa";
            // Limit the text to 100 characters
            if (chatInput.textContent.length > 100) {
                chatInput.textContent = chatInput.textContent.substring(0, 100);
                // Move the caret to the end of the text
                const range = document.createRange();
                const selection = window.getSelection();
                range.selectNodeContents(chatInput);
                range.collapse(false);
                selection.removeAllRanges();
                selection.addRange(range);
            }
        });
        chatInput.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                e.preventDefault();
                // Get the current text content of the chat input
                const newMessage = chatInput.textContent.trim();
                if (localStorage.getItem("messageCount")) {
                    localStorage.setItem("messageCount", parseInt(localStorage.getItem("messageCount")) + 1);
                } else {
                    localStorage.setItem("messageCount", 1);
                }
                localStorage.setItem("message" + localStorage.getItem("messageCount"), newMessage);
                // Create a new paragraph element for the message
                if (newMessage != "") {
                    const messageElement = document.createElement("p");
                    messageElement.innerHTML = `<strong>Me:</strong> ${newMessage}`;
                    // Append the new message to the instabox
                    instabox.appendChild(messageElement);
                    // Clear the chat input
                    chatInput.textContent = "";
                    // Scroll to the latest message
                    instabox.scrollTop = instabox.scrollHeight;
                    // Reset character count to 100
                    charCount.textContent = "100";
                    charCount.style.color = "#aaa";
                }
            }
        });
    </script>
</body>


<script>
// fetch and display chat messages
function fetchMessages() {
    fetch('http://localhost:8887/api/messages') // fetch
        .then(response => response.json())
        .then(data => {
            const messagesContainer = document.getElementById('messages-container'); //in the id defined earlier
            messagesContainer.innerHTML = '';

            data.messages.forEach(message => { // for loop to have divs for messages, organized??? <-- we will check with aadi bhat and kanhay patil :)
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('message');
                messageDiv.textContent = message;
                messagesContainer.appendChild(messageDiv); // add to messages container
            });
        });
}


window.onload = fetchMessages; // use and run the script
</script>
