---
layout: base
title: Create and Compete - Reality Room Game
search_exclude: true
permalink: /create_and_compete/reality_game
author: Yash, Nikhil, Rohan, Neil
---

<div class="sidebar">
    <a href="/flocker_frontend/create_and_compete/realityroom-home" class="sidebar-btn">🏠 Home</a>
    <a href="/flocker_frontend/create_and_compete/reality_game" class="sidebar-btn">🎮 Game</a>
    <a href="/flocker_frontend/create_and_compete/reality-room-about" class="sidebar-btn">❓ About</a>
    <a href="/flocker_frontend/create_and_compete/reality-room-terms" class="sidebar-btn">📄 Terms</a>
</div>

<style>
    body {
        background-image: url("../../images/background9674.png");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }

    /* Sidebar */
    .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        width: 150px;
        height: 100%;
        background-color: #121212 !important;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;
        color: white;
        border-right: 1px solid gray;
    }
    .sidebar-btn {
        background-color: #121212;
        color: white !important;
        border: 2px solid gray;
        margin: 10px 0;
        padding: 10px;
        border-radius: 8px;
        font-size: 16px;
        width: 120px;
        text-align: center;
        cursor: pointer;
        text-decoration: none;
    }
</style>

<table class="sub-menu">
    <tr>
        <td>
            <label class="switch">
                <input type="checkbox" id="toggle-switch" onclick="toggleRedirect()">
                <span class="slider round"></span>
            </label>
        </td>
    </tr>
</table>

<div id="main-content">
    <div id="chatPanel">
        <h3>Game</h3>
        <div id="outputDiv"></div>
        <form>
            <button class="plus-button" onclick="triggerFileUpload()">+</button>
            <input type="file" id="file-input">
            <input placeholder="Enter message to send:" type="text" id="messageBox" name="message">
        </form>
    </div>
</div>

<style>
    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
    }
    th, td {
        padding: 5px;
        text-align: left;
    }
    .small {
        font-size: 8px;
    }
    h3 {
        margin-bottom: 20px;
    }
    #main-content {
        display: flex;
        align-content: space-between;
    }
    #userPanel {
        margin-left: auto;
        width: 30%;
    }
    #chatPanel {
        position: relative;
        width: 700px;
        height: 500px;
    }
    #messageBox {
        width: 85%;
        height: 40px;
        padding: 15px 20px;
        font-size: 16px;
        border: 1px solid #ddd;
        outline: none;
        background-color: #f3f3f3;
        border-radius: 30px;
        box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
        color: #333;
    }
    #outputDiv {
        flex-grow: 1;
        overflow-y: auto;
        max-height: calc(100% - 135px);
    }
    form {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 10px 0;
    }
    .message-bubble {
        background-color: #218aff;
        padding: 10px;
        border-radius: 10px;
        margin: 5px 0;
        max-width: 80%;
        word-wrap: break-word;
    }
    .ai-bubble {
        background-color: #e0e0e0;
        padding: 10px;
        border-radius: 10px;
        margin: 5px 0;
        max-width: 80%;
        word-wrap: break-word;
        color: #333;
    }
    .cell {
        display: flex;
    }
    .cell-content {
        margin-left: 10px;
    }
    .profile-photo {
        border-radius: 30px;
    }
    .plus-button {
        width: 40px;
        height: 40px;
        color: white;
        border: none;
        border-radius: 50%;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-size: 24px;
        outline: none;
    }
    input[type="file"] {
        display: none;
    }
</style>

<style>
    @keyframes screenFlash {
        0% {
            background-color: white;
        }
        50% {
            background-color: #8B0000;
        }
        100% {
            background-color: white;
        }
    }

    .flash {
        animation: screenFlash 2.5s ease-out;
        height: 100vh;
        width: 100vw;
    }
</style>

<style>
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: #2196F3;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    .slider.round {
        border-radius: 35px;
    }

    .slider.round:before {
        border-radius: 50%;
    }
</style>

<script>
    // Function to send message to Gemini API and display response
    async function sendToGeminiAPI(userMessage) {
    const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBOUekV-txUye0_jpkGlfRe3PMk7Q9GHic";

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{ text: userMessage }]
                }]
            })
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        return data.candidates[0].content.parts[0].text; // Adjusted to match Postman response structure
    } catch (error) {
        console.error('Error communicating with Gemini API:', error);
        return "An error occurred while communicating with the AI.";
    }
    }

    // Chat functionality
    document.getElementById('messageBox').addEventListener('keypress', async function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent page refresh
        const userMessage = event.target.value;

        // Display user message in chat
        const userMessageElement = document.createElement('p');
        userMessageElement.classList.add('message-bubble');
        userMessageElement.textContent = userMessage;
        document.getElementById('outputDiv').appendChild(userMessageElement);

        event.target.value = ''; // Clear input box

        // Get response from Gemini API
        const aiResponse = await sendToGeminiAPI(userMessage);

        // Display AI response in chat
        const aiMessageElement = document.createElement('p');
        aiMessageElement.classList.add('ai-bubble');
        aiMessageElement.textContent = aiResponse;
        document.getElementById('outputDiv').appendChild(aiMessageElement);

        // Scroll to the bottom of the chat
        const messagesDiv = document.getElementById('outputDiv');
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
    });

    // Additional existing JavaScript code (e.g., file upload, redirect toggle)
    function triggerFileUpload() {
    document.getElementById('file-input').click();
    }

    function toggleRedirect() {
    const checkbox = document.getElementById('toggle-switch');
    if (checkbox.checked) {
        window.location.href = '{{site.baseurl}}/create_and_compete/realityroom';
    }
    }
</script>
