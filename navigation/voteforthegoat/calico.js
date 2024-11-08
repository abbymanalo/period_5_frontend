import { pythonURI, fetchOptions } from '../../assets/js/api/config.js';

console.log("we talk")
document.querySelectorAll('.sidebar-button').forEach(button => {
    button.addEventListener('click', () => {
        const houseName = button.getAttribute('data-house');
        const channelId = button.getAttribute('data-channel-id');

        // Store selected house in localStorage
        localStorage.setItem('selectedHouse', houseName);
        localStorage.setItem('selectedChannelId', channelId);

        // Update the UI for the selected house
        setBackground(houseName);
        renderHousePage(houseName);
        
        // Fetch posts for the selected channel
        fetchPosts(channelId);
    });
});
const groupId = "Calico Vote";


/**
     * Fetch groups for dropdown selection
     * User picks from dropdown
     */
async function fetchGroups() {
    try {
        const response = await fetch(`${pythonURI}/api/groups/filter`, {
            ...fetchOptions,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ section_name: "Home Page" }) // Adjust the section name as needed
        });
        if (!response.ok) {
            throw new Error('Failed to fetch groups: ' + response.statusText);
        }
        const groups = await response.json();
        const groupSelect = document.getElementById('group_id');
        groups.forEach(group => {
            const option = document.createElement('option');
            option.value = group.name; // Use group name for payload
            option.textContent = group.name;
            groupSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching groups:', error);
    }
}

/**
 * Fetch channels based on selected group
 * User picks from dropdown
 */
async function fetchChannels(groupName) {
    try {
        const response = await fetch(`${pythonURI}/api/channels/filter`, {
            ...fetchOptions,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ group_name: groupName })
        });
        if (!response.ok) {
            throw new Error('Failed to fetch channels: ' + response.statusText);
        }
        const channels = await response.json();
        const channelSelect = document.getElementById('channel_id');
        channelSelect.innerHTML = '<option value="">Select a channel</option>'; // Reset channels
        channels.forEach(channel => {
            const option = document.createElement('option');
            option.value = channel.id;
            option.textContent = channel.name;
            channelSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching channels:', error);
    }
}

/**
  * Handle group selection change
  * Channel Dropdown refresh to match group_id change
  */
document.getElementById('group_id').addEventListener('change', function() {
    const groupName = this.value;
    if (groupName) {
        fetchChannels(groupName);
    } else {
        document.getElementById('channel_id').innerHTML = '<option value="">Select a channel</option>'; // Reset channels
    }
});

/**
 * Handle form submission for selection
 * Select Button: Computer fetches and displays posts
 */
document.getElementById('selectionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const groupId = document.getElementById('group_id').value;
    const channelId = document.getElementById('channel_id').value;
    if (groupId && channelId) {
        fetchData(channelId);
    } else {
        alert('Please select both group and channel.');
    }
});

/**
 * Handle form submission for adding a post
 * Add Form Button: Computer handles form submission with request
 */
document.getElementById('postForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Extract data from form
    const title = document.getElementById('title').value;
    const comment = document.getElementById('comment').value;
    const channelId = document.getElementById('channel_id').value;

    // Create API payload
    const postData = {
        title: title,
        comment: comment,
        channel_id: channelId
    };

    // Trap errors
    try {
        // Send POST request to backend, purpose is to write to database
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

        // Successful post
        const result = await response.json();
        alert('Post added successfully!');
        document.getElementById('postForm').reset();
        fetchData(channelId);
    } catch (error) {
        // Present alert on error from backend
        console.error('Error adding post:', error);
        alert('Error adding post: ' + error.message);
    }
});

/**
 * Fetch posts based on selected channel
 * Handle response: Fetch and display posts
 */
async function fetchData(channelId) {
    try {
        const response = await fetch(`${pythonURI}/api/posts/filter`, {
            ...fetchOptions,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ channel_id: channelId })
        });
        if (!response.ok) {
            throw new Error('Failed to fetch posts: ' + response.statusText);
        }

        // Parse the JSON data
        const postData = await response.json();

        // Extract posts count
        const postCount = postData.length || 0;

        // Update the HTML elements with the data
        document.getElementById('count').innerHTML = <h2>Count ${postCount}</h2>;

        // Get the details div
        const detailsDiv = document.getElementById('details');
        detailsDiv.innerHTML = ''; // Clear previous posts

        // Iterate over the postData and create HTML elements for each item
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
        
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Fetch groups when the page loads
fetchGroups();