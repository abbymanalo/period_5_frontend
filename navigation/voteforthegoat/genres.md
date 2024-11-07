---
layout: post
title: Genres
description: Pick Your Favorite Genre Out of These!
permalink: /voteforthegoat/genres/
comments: true
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music Genre Poll</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 0;
            background-color: pink;
            overflow-y: auto;
        }
        .container {
            text-align: center;
            padding: 20px;
            background-color: transparent;
        }
        .vinyl-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 20px;
        }
        .vinyl-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: transparent;
        }
        .vinyl-item button {
            background: transparent !important;
            border: none;
            cursor: pointer;
            outline: none;
        }
        .vinyl-item img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            transition: transform 0.3s;
            background-color: transparent;
            box-shadow: none;
        }
        .vinyl-item img:hover {
            transform: scale(1.1);
        }
        .vinyl-item span {
            margin-top: 8px;
            font-size: 16px;
            color: #FFF;
        }
        .chatroom-button {
            display: none; /* Initially hidden */
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 18px;
            background-color: #fc72f2;
            color: #fff;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            text-decoration: none;
            transition: background-color 0.3s;
        }
        .chatroom-button:hover {
            background-color: #FF4500;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="vinyl-grid">
            <div class="vinyl-item">
                <button onclick="vote('Rock')">
                    <img src="/flocker_frontend/images/vinyl2.png" alt="Rock Vinyl">
                </button>
                <span>Rock</span>
            </div>
            <div class="vinyl-item">
                <button onclick="vote('Pop')">
                    <img src="/flocker_frontend/images/vinyl2.png" alt="Pop Vinyl">
                </button>
                <span>Pop</span>
            </div>
            <div class="vinyl-item">
                <button onclick="vote('Hip-Hop')">
                    <img src="/flocker_frontend/images/vinyl2.png" alt="Hip-Hop Vinyl">
                </button>
                <span>Hip-Hop</span>
            </div>
            <div class="vinyl-item">
                <button onclick="vote('Jazz')">
                    <img src="/flocker_frontend/images/vinyl2.png" alt="Jazz Vinyl">
                </button>
                <span>Jazz</span>
            </div>
            <div class="vinyl-item">
                <button onclick="vote('Classical')">
                    <img src="/flocker_frontend/images/vinyl2.png" alt="Classical Vinyl">
                </button>
                <span>Classical</span>
            </div>
            <div class="vinyl-item">
                <button onclick="vote('Electronic')">
                    <img src="/flocker_frontend/images/vinyl2.png" alt="Electronic Vinyl">
                </button>
                <span>Electronic</span>
            </div>
        </div>
        <a href="/flocker_frontend/chatroom" class="chatroom-button" id="chatroom-button">Go to Chatroom</a>  
    </div>

    <script>
        function vote(genre) {
            alert(genre + " selected!");
            // Display the chatroom button after a genre is selected
            document.getElementById('chatroom-button').style.display = 'block';
        }
    </script>
</body>
</html>

<head><style> body { background-color: pink !important; } </style></head>