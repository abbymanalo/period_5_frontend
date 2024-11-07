---
layout: post
title: Shared Interests - AGK
search_exclude: true
permalink: /shared_interests/agk/agk
menu: nav/shared_interests.html
author: Mihir, Pradyun, Derek, Ansh
---

<style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #FDF5E6;
        }
        .header {
            background-color: #001F3F; 
            color: #FFD700;
            text-align: center;
            padding: 20px;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        .category {
            margin: 20px 0;
            padding: 15px;
            border: 2px solid #C5B358;
            border-radius: 8px;
            background-color: #001F3F;
            color: white;
        }
        .post {
            margin: 10px 0;
            padding: 15px;
            border: 1px solid #C5B358;
            border-radius: 5px;
            background-color: #4CAF50; 
        }
        .chatroom-link {
            display: block;
            text-align: center;
            margin: 20px 0;
            padding: 10px;
            background-color: #FFD700;
            color: black;
            text-decoration: none;
            border-radius: 5px;
        }
        .chatroom-link:hover {
            background-color: #C5B358;
        }
</style>

<style>
    body {
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: #FDF5E6;
    }
    .chatroom-container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        border: 2px solid #C5B358;
        border-radius: 8px;
        background-color: #001F3F;
    }
    .chatroom-header {
        text-align: center;
        color: #FFD700;
    }
    .chat-area {
        height: 400px;
        overflow-y: auto;
        background-color: #228B22;
        border: 2px solid #C5B358;
        border-radius: 8px;
        padding: 10px;
        margin-bottom: 20px;
        color: white;
        display: flex;
        flex-direction: column; /* Align messages vertically */
    }
    .message {
        max-width: 80%;
        margin: 10px 0;
        padding: 10px;
        border-radius: 20px;
        position: relative;
    }
    .message.sent {
        background-color: #FFD700;
        color: black;
        align-self: flex-end;
        position: relative;
        margin-bottom: 0px;
    }
    .message-form {
        display: flex;
    }
    #messageInput {
        flex: 1;
        padding: 10px;
        border: 2px solid #C5B358;
        border-radius: 5px;
    }
    button {
        background-color: #FFD700;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
    }
    button:hover {
        background-color: #C5B358;
    }
</style>
<div class="chatroom-container">
        <header class="chatroom-header">
            <h1>Activity Chatroom</h1>
            <p>Discuss your favorite activities!</p>
        </header>
        <div class="chat-area" id="chatArea">
            <!-- Messages will appear here -->
        </div>
        <form class="message-form" id="messageForm">
            <input type="text" id="messageInput" placeholder="Enter your message..." required>
            <button type="submit">Send</button>
        </form>
</div>
<script>
    const chatArea = document.getElementById('chatArea');
    const messageForm = document.getElementById('messageForm');
    const messageInput = document.getElementById('messageInput');
    messageForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const messageText = messageInput.value.trim();
        if (messageText !== "") {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', 'sent');
            messageElement.textContent = messageText;
            chatArea.appendChild(messageElement);
            messageInput.value = "";
            chatArea.scrollTop = chatArea.scrollHeight; // Auto-scroll to the newest message
        }
    });
</script>

<div class="container">
    <div class="form-container">
        <form id="postForm">
            <br/>
            <label>Please select a group:</label>
            <select id="group_id" name="group_id" required>
                <option value="">Select a group</option>
            </select>
            <br/>
            <label>Please select a channel:</label>
            <select id="channel_id" name="channel_id" required>
                <option value="">Select a channel</option>
            </select>
            <button type="submit">Show Posts</button> 
        </form>
    </div>
</div>

<script type="module">
    import { pythonURI, fetchOptions } from '/flocker_frontend/assets/js/api/config.js';

   
    async function fetchGroups() {
        try {
            const response = await fetch(`${pythonURI}/api/groups`, fetchOptions);
            if (!response.ok) {
                throw new Error('Failed to fetch groups: ' + response.statusText);
            }
            const groups = await response.json();
            const groupSelect = document.getElementById('group_id');
            groups.forEach(group => {
                const option = document.createElement('option');
                option.value = group.id;
                option.textContent = group.name;
                groupSelect.appendChild(option);
            });

            const s = await fetch(`${pythonURI}/api/channels`, fetchOptions);
            if (!s.ok) {
                throw new Error('Failed to fetch channels: ' + s.statusText);
            }
            const g = await s.json();
            const groupS = document.getElementById('channel_id');
            g.forEach(group => {
                const opt = document.createElement('option');
                opt.value = group.id;
                opt.textContent = group.name;
                groupS.appendChild(opt);
            });
        
        } catch (error) {
            console.error('Error fetching groups:', error);
        }
    }
const channelId=1;
    document.getElementById('postForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        const loginData = {
    uId: 'toby',
    password: '123Toby!'
};
        //const loginResponse = await fetch(`${pythonURI}/api/authenticate?uid=toby&password=123Toby!`, fetchOptions);
//const loginDt = await loginResponse.json();

        const response = await fetch(`${pythonURI}/api/posts`,fetchOptions);
//   {,  method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ channel_id: channelId })
// });
const postData = await response.json();
const detailsDiv = document.getElementById('messages');

postData.forEach(postItem => {
    const postElement = document.createElement('div');
    postElement.className = 'post-item';
    postElement.innerHTML = `
        <h3>${postItem.title}</h3>
        <p><strong>Channel:</strong> ${postItem.channel_name}</p>
        <p><strong>User:</strong> ${postItem.user_name}</p>
        <p>${postItem.comment}</p>
    `;
    detailsDiv.appendChild(postElement);
});
    });

    fetchGroups();
</script>

<div class="messages" id="messages"></div>

<script>
    const sendButton = document.getElementById('sendButton');
    const messageInput = document.getElementById('messageInput');
    const messagesContainer = document.getElementById('messages');
    async function PostMessages() {
         // Extract data from form
        
         const title = document.getElementById('messageInput');; //document.getElementById('title').value;
        const content = document.getElementById('messageInput');; //document.getElementById('content').value;
        const group_id = 1; //document.getElementById('group_id').value;
       
        const comment = document.getElementById('messageInput');; //document.getElementById('content').value;
        const channel_id = 1; //document.getElementById('group_id').value;
        const messageText = messageInput.value;
        if (messageText.trim() !== '') {
            const messageElement = document.createElement('div');
            messageElement.textContent = messageText;
            messagesContainer.appendChild(messageElement);
            messageInput.value = '';
            messagesContainer.scrollTop = messagesContainer.scrollHeight; 
        }
// messageInput.addEventListener('keypress', (e) => {
    //     if (e.key === 'Enter') {
    //         sendButton.click();
    //     }
    // });
        // Create API payload
        const postData = {
            // title: title,
            // content: content,
            // group_id: group_id
            title: title,
            comment: comment,
            channel_id: channel_id

        };
        const loginData = {
            uid:'toby',
            password:'123Toby!'
        };
        // Trap errors
        try {
            // Send POST request to backend, purpose is to write to database
            if (location.hostname === "localhost") {
        pythonURI = "http://localhost:8887";
} else if (location.hostname === "127.0.0.1") {
       pythonURI = "http://127.0.0.1:8887";
} else {
        pythonURI =  "https://flocker.nighthawkcodingsociety.com";
}

const loginResponse = await fetch(`${pythonURI}/api/authenticate?uid=Toby&password=123Toby!`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                 body: JSON.stringify(loginData)
            });
//const loginDt = await loginResponse.json();
            const response = await fetch(`${pythonURI}/api/post`, {
                               method: 'POST',
                              mode: 'cors', // no-cors, *cors, same-origin
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, same-origin, omit
    headers: {
        'Content-Type': 'application/json',
        'X-Origin': 'client' // New custom header to identify source
    },
                body: JSON.stringify(postData)
            });

            if (!response.ok) {
                throw new Error('Failed to add post: ' + response.statusText);
            }

            // Succesfull post
            const result = await response.json();
            alert('Post added successfully!');
            document.getElementById('postForm').reset();
        } catch (error) {
            // Present alert on error from backend
            console.error('Error adding post:', error);
            alert('Error adding post: ' + error.message);
        }
        
    
    }

    sendButton.addEventListener('click', PostMessages);


</script>
