---
layout: page
title: Underground Music
description: Share music with others!
permalink: /undgdmusic/test
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Underground Music Vibes</title>
    <style>
        /* General Styling */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: Arial, sans-serif;
            background-color: #181818;
            color: #e0e0e0;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            overflow-x: hidden;
        }
        header { 
            padding: 20px;
            width: 100%;
            max-width: 1000px;
            background-color: #1f1f1f;
            text-align: center;
            border-bottom: 3px solid #f2b600;
        }
        header h1 { 
            font-size: 2.5rem; 
            color: #f2b600; 
            text-shadow: 0px 2px 8px rgba(255, 209, 102, 0.6);
        }
        header p { 
            color: #888; 
            font-size: 1rem; 
        }
        .top-sections-wrapper {
            display: flex;
            justify-content: space-between;
            width: 100%;
            max-width: 1000px;
            gap: 20px;
            margin-top: 20px;
        }
        .posts-wrapper, .post-form-container, .chatroom-container {
            background-color: #2b2b2b;
            padding: 20px;
            border-radius: 8px;
            border: 2px solid #f2b600;
            flex: 1;
        }
        .posts-wrapper h2, .post-form-container h3, .chatroom-container h2 {
            color: #f2b600;
            text-align: center;
            margin-bottom: 10px;
            text-shadow: 0px 2px 8px rgba(255, 209, 102, 0.6);
        }
        .post-form-container input, .post-form-container textarea, #username, #message {
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            border-radius: 4px;
            border: 1px solid #333;
            background-color: #333;
            color: #e0e0e0;
        }
        .post-form-container button, .message-form button {
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 4px;
            background-color: #f2b600;
            color: #1b1b1b;
            font-weight: bold;
            cursor: pointer;
            text-shadow: 0px 2px 8px rgba(255, 209, 102, 0.6);
        }
        .reaction-icons { margin-top: 10px; }
        .emoji { cursor: pointer; margin-right: 15px; }
    </style>
</head>
<body>

<header>
    <h1>Welcome to the Underground Vibes!</h1>
    <p>Share your thoughts, discover artists, and chat with others!</p>
</header>

<div class="top-sections-wrapper">
    <div class="posts-wrapper" id="postsWrapper">
        <h2>Flocker Posts</h2>
        <!-- Posts will be dynamically loaded here -->
    </div>
    <div class="post-form-container">
        <h3>Add a New Post</h3>
        <form id="postForm">
            <input type="text" id="usernameInput" placeholder="Enter your username" required>
            <textarea id="postInput" placeholder="What's on your mind?" required></textarea>
            <button type="submit">Post</button>
        </form>
    </div>
</div>

<div class="chatroom-container">
    <h2>Flocker Chatroom</h2>
    <div class="chat-area" id="messages">
        <!-- Messages will appear here -->
    </div>
    <form class="message-form" id="chat-form">
        <input type="text" id="username" placeholder="Your Name" required>
        <input type="text" id="message" placeholder="Type a message..." maxlength="200" required>
        <button type="submit">Send</button>
    </form>
</div>

<script>
    // JavaScript functions for local storage and event listeners remain the same
</script>

</body>
</html>
<script>
    function getLocalStorageData(key) {
        return JSON.parse(localStorage.getItem(key)) || [];
    }
    function setLocalStorageData(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }
    function renderPosts(posts, reactions) {
        document.getElementById('postsWrapper').innerHTML = posts.map(post => {
            const { thumbsUp = 0, heart = 0, fire = 0 } = reactions[post.id] || {};
            return `
                <div class="post" data-post-id="${post.id}">
                    <div class="post-header">
                        <span class="post-username">${post.username}</span>
                    </div>
                    <p>${post.content}</p>
                    <div class="reaction-icons">
                        <span class="emoji" onclick="addReaction('${post.id}', 'thumbsUp')">👍 <span class="thumbsUp-count">${thumbsUp}</span></span>
                        <span class="emoji" onclick="addReaction('${post.id}', 'heart')">❤️ <span class="heart-count">${heart}</span></span>
                        <span class="emoji" onclick="addReaction('${post.id}', 'fire')">🔥 <span class="fire-count">${fire}</span></span>
                    </div>
                </div>`;
        }).join('');
    }
    function addReaction(postId, reactionType) {
        const reactions = getLocalStorageData('reactions');
        reactions[postId] = reactions[postId] || { thumbsUp: 0, heart: 0, fire: 0 };
        reactions[postId][reactionType]++;
        setLocalStorageData('reactions', reactions);
        renderPosts(getLocalStorageData('posts'), reactions);
    }
    document.addEventListener('DOMContentLoaded', () => {
        const posts = getLocalStorageData('posts');
        const reactions = getLocalStorageData('reactions');
        const messages = getLocalStorageData('chatMessages');
        renderPosts(posts, reactions);
        document.getElementById("messages").innerHTML = messages.join('');
        document.getElementById('postForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('usernameInput').value;
            const content = document.getElementById('postInput').value;
            const newPost = { username, content, id: Date.now().toString() };
            const updatedPosts = [...posts, newPost];
            setLocalStorageData('posts', updatedPosts);
            renderPosts(updatedPosts, reactions);
            event.target.reset();
        });
        document.getElementById('chatForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const message = document.getElementById('message').value;
            const timestamp = new Date().toLocaleTimeString();
            const messageHtml = `<p><span class="username">${username}</span>: ${message}<span class="timestamp">[${timestamp}]</span></p>`;
            const updatedMessages = [...messages, messageHtml];
            setLocalStorageData('chatMessages', updatedMessages);
            document.getElementById("messages").innerHTML += messageHtml;
            event.target.reset();
        });
    });
</script>
