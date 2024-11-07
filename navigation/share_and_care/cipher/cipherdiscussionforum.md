---
layout: base
title: CipherDiscussion
search_exclude: true
permalink: share_and_care/cipherdiscussion
---
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
            background-color: #2C3E50;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            color: #ECF0F1;
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
            background-color: #34495E;
            color: #ECF0F1;
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
            background-color: #34495E;
            color: #ECF0F1;
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