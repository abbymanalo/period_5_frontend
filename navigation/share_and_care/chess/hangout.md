---
layout: post
title: Chess Hangout
permalink: /chess/hangout
comments: true
authors: Ahaan, Xavier, Spencer, Vasanth
---

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Chess Hangout Zone - Chess Game with Chat</title>
    <style>
      /* General Styles */
      body {
        background-color: #2c3e50; /* Dark background for modern look */
        color: #ecf0f1; /* Lighter text color for contrast */
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        min-height: 100vh;
        margin: 0;
        padding: 0;
      }
      
      .container {
        text-align: center;
        margin-top: 20px;
        width: 100%;
        max-width: 1200px;
        padding: 20px;
      }

      h2 {
        color: #e67e22;
        font-size: 2em;
        margin-bottom: 10px;
      }

      /* Buttons */
      .btn {
        padding: 12px 24px;
        margin: 10px;
        cursor: pointer;
        background-color: #2980b9;
        color: #ecf0f1;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        transition: background-color 0.3s ease;
      }
      
      .btn:hover {
        background-color: #3498db;
      }

      /* Chessboard */
      .chessboard {
        display: grid;
        grid-template-columns: repeat(8, 70px);
        grid-template-rows: repeat(8, 70px);
        border: 3px solid #34495e;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
      }
      
      .chessboard div {
        width: 70px;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32px;
        font-weight: bold;
        cursor: pointer;
      }
      
      .yellow {
        background-color: #f7c6a5;
      }
      
      .orange {
        background-color: #e67e22;
      }

      /* Piece Colors */
      .white-piece {
        color: #f0f0f0; /* White pieces */
      }
      
      .black-piece {
        color: #333; /* Black pieces */
      }

      /* Chat Container */
      .chat-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 1200px;
        gap: 20px;
        margin-top: 20px;
      }
      
      .chat-box {
        width: 45%;
        background-color: #34495e;
        padding: 20px;
        border-radius: 12px;
        border: 2px solid #2c3e50;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
      }

      .chat-messages {
        height: 300px;
        overflow-y: auto;
        background-color: #2c3e50;
        padding: 12px;
        border-radius: 10px;
        border: 2px solid #34495e;
      }
      
      .message {
        margin: 8px 0;
        padding: 8px;
        font-size: 15px;
        color: #ecf0f1;
        border-radius: 10px;
      }
      
      .message.user-message {
        background-color: #2980b9;
        text-align: right;
      }
      
      .message.bot-message {
        background-color: #e67e22;
        text-align: left;
      }
      
      .channel-select {
        margin: 15px 0;
      }
      
      .message-input {
        display: flex;
        align-items: center;
        margin-top: 10px;
      }
      
      .message-input input[type="text"] {
        flex: 1;
        padding: 10px;
        border: 1px solid #34495e;
        border-radius: 8px;
        background-color: #2c3e50;
        color: #ecf0f1;
        font-size: 16px;
        margin-right: 10px;
      }

      .message-input input[type="text"]::placeholder {
        color: #95a5a6;
      }
    </style>
  </head>
  <body>
    <div class="container">
   
      <div class="game-mode">
        <button onclick="startGame('human')" class="btn">
          Play Against Human
        </button>
        <button onclick="startGame('bot')" class="btn">Play Against Bot</button>
      </div>

      <div class="chat-container">
        <div class="chessboard" id="chessboard"></div>
        <div class="chat-box">
          <h4>Chess-Themed Chat Room</h4>
          <div class="channel-select">
            <label for="channel">Channel:</label>
            <select id="channel" onchange="changeChannel()">
              <option value="general">General</option>
              <option value="chess-tips">Chess Tips</option>
              <option value="game-updates">Game Updates</option>
            </select>
          </div>
          <div id="chatMessages" class="chat-messages"></div>
          <div class="message-input">
            <input
              type="text"
              id="messageInput"
              placeholder="Type your message"
            />
            <button id="sendBtn" class="btn">Send</button>
          </div>
        </div>
      </div>
    </div>

    <script>
      const pieces = {
        R: "♖",
        N: "♘",
        B: "♗",
        Q: "♕",
        K: "♔",
        P: "♙",
        r: "♜",
        n: "♞",
        b: "♝",
        q: "♛",
        k: "♚",
        p: "♟",
      };
      const boardLayout = [
        ["r", "n", "b", "q", "k", "b", "n", "r"],
        ["p", "p", "p", "p", "p", "p", "p", "p"],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["P", "P", "P", "P", "P", "P", "P", "P"],
        ["R", "N", "B", "Q", "K", "B", "N", "R"],
      ];

      let selectedSquare = null;
      let gameMode = "human";
      const chatMessages = document.getElementById("chatMessages");
      const chessboard = document.getElementById("chessboard");
      let currentChannel = "general";

      function drawBoard() {
        chessboard.innerHTML = "";
        boardLayout.forEach((row, rowIndex) => {
          row.forEach((piece, colIndex) => {
            const square = document.createElement("div");
            square.classList.add((rowIndex + colIndex) % 2 === 0 ? "yellow" : "orange");
            square.textContent = pieces[piece] || "";
            
            // Apply the color class based on piece case
            if (piece === piece.toUpperCase()) {
              square.classList.add("white-piece"); // White pieces (uppercase)
            } else if (piece === piece.toLowerCase()) {
              square.classList.add("black-piece"); // Black pieces (lowercase)
            }
            
            square.addEventListener("click", () => selectSquare(rowIndex, colIndex));
            chessboard.appendChild(square);
          });
        });
      }

      function startGame(mode) {
        gameMode = mode;
        drawBoard();
        addMessage("bot", `Starting game against ${mode === "human" ? "Human" : "Bot"}!`);
      }

      function selectSquare(row, col) {
        const piece = boardLayout[row][col];
        if (selectedSquare) {
          movePiece(row, col);
          selectedSquare = null;
        } else if (piece) {
          selectedSquare = { row, col, piece };
        }
      }

      function movePiece(newRow, newCol) {
        const { row, col, piece } = selectedSquare;
        if (isMoveValid(row, col, newRow, newCol)) {
          boardLayout[newRow][newCol] = piece;
          boardLayout[row][col] = "";
          drawBoard();
          addMessage("bot", `Moved ${piece} to (${newRow}, ${newCol})`);
          if (gameMode === "bot") botMove();
        }
      }

      function isMoveValid(fromRow, fromCol, toRow, toCol) {
        // Placeholder for more advanced validation
        return boardLayout[toRow][toCol] === ""; // Basic rule: allow moves to empty squares only
      }

      function botMove() {
        // Placeholder: Bot will make a random move
        addMessage("bot", "Bot made a move.");
      }

      function addMessage(sender, message) {
        const messageDiv = document.createElement("div");
        messageDiv.className = `message ${sender === "user" ? "user-message" : "bot-message"}`;
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }

      function changeChannel() {
        currentChannel = document.getElementById("channel").value;
        addMessage("bot", `Switched to channel: ${currentChannel}`);
      }

      document.getElementById("sendBtn").addEventListener("click", () => {
        const messageInput = document.getElementById("messageInput");
        const message = messageInput.value.trim();
        if (message) {
          addMessage("user", `[${currentChannel}] ${message}`);
          messageInput.value = "";
          if (gameMode === "bot") addMessage("bot", "I'm thinking...");
        }
      });

      drawBoard();
    </script>
  </body>
</html>




<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Post with Group Selection</title>
    <style>
        /* Container and form styling */
        .container {
            display: flex;
            justify-content: center;
            width: 100%;
            max-width: 1200px;
            padding: 20px;
            box-sizing: border-box;
        }
        .form-container {
            display: flex;
            flex-direction: column;
            max-width: 800px;
            width: 100%;
            background-color: #2c3e50;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            color: #ecf0f1;
        }
        .form-container label {
            margin-bottom: 5px;
        }
        /* Style for the dropdown */
        .form-container select {
            margin-bottom: 10px;
            padding: 10px;
            border-radius: 5px;
            border: none;
            width: 100%;
            background-color: #34495e;
            color: #ecf0f1;
            font-size: 16px;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            outline: none;
        }
        /* Button styling */
        .form-container button {
            padding: 10px;
            border-radius: 5px;
            border: none;
            background-color: #34495e;
            color: #ecf0f1;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="form-container">
            <h2>Select Group and Create Post</h2>
            <form id="postForm">
                <label for="group_id">Group:</label>
                <select id="group_id" name="group_id" required>
                    <option value="">Select a group</option>
                </select>
                
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" required>
                
                <label for="content">Content:</label>
                <textarea id="content" name="content" required></textarea>
                
                <button type="submit">Add Post</button>
            </form>
            <div id="details"></div>
        </div>
    </div>

    <script type="module">
        // Import server URI and standard fetch options
        const pythonURI = "https://flocker.nighthawkcodingsociety.com";
        const fetchOptions = {
            headers: {
                'Authorization': 'Bearer YOUR_AUTH_TOKEN' // Replace with actual auth token if required
            }
        };

        // Function to fetch groups for dropdown selection
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
            } catch (error) {
                console.error('Error fetching groups:', error);
            }
        }

        // Handle form submission
        document.getElementById('postForm').addEventListener('submit', async function(event) {
            event.preventDefault();

            // Extract data from form
            const title = document.getElementById('title').value;
            const content = document.getElementById('content').value;
            const group_id = document.getElementById('group_id').value;

            // Create API payload
            const postData = {
                title: title,
                content: content,
                group_id: group_id
            };

            try {
                // Send POST request to backend to add the new post
                const response = await fetch(`${pythonURI}/api/post`, {
                    ...fetchOptions,
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(postData)
                });

                if (!response.ok) {
                    throw new Error('Failed to add post: ' + response.statusText);
                }

                alert('Post added successfully!');
                document.getElementById('postForm').reset();
            } catch (error) {
                console.error('Error adding post:', error);
                alert('Error adding post: ' + error.message);
            }
        });

        // Fetch groups when the page loads
        fetchGroups();
    </script>
</body>
</html>
