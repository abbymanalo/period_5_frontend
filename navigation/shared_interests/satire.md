---
layout: base
title: Satire
permalink: /shared_interests/satire/
menu: nav/shared_interests.html
author: Bailey, Travis, Leon, Anyi
---

<!-- FOR THE NAV MENU AS IT IS NOT WORKING ON YOUR PAGE -->
<table>
    <tr>
        <td id="sharedinterests">
            <a href="{{site.baseurl}}/shared_interests/home">
                <img src="{{site.baseurl}}/images/school_logo.png" alt="logo" width="150" height="150">
            </a>
        </td>
        <td id="Limitless Connections"><a href="{{site.baseurl}}/shared_interests/limitconnect">Limitless Connections</a></td>
        <td id="DNHS Football"><a href="{{site.baseurl}}/shared_interests/football">DNHS Football</a></td>
        <td id="School Subjects"><a href="{{site.baseurl}}/shared_interests/jupyter/chatroom">School Subjects</a></td>
        <td id="Music"><a href="{{site.baseurl}}/music/">Music</a></td>
        <td id="Satire"><a href="{{site.baseurl}}/shared_interests/satire">Satire</a></td>
        <td id="PLACEHOLDER6"><a href="{{site.baseurl}}/shared_interests/agk.html">AGK</a></td>
    </tr>
</table>
<!-- END OF NAV MENU -->

DNHS Satire Home Page

<style>
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Background and text color */
  html {
    font-family: Arial, sans-serif;
    background-color: #1e1e1e; /* Dark background */
    color: #e0e0e0; /* Light text */
  }

  /* Container to center everything */
  .container {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
  }

  /* Banner */
  .banner {
    width: 100%;
    background-color: #3b5998; /* Deep blue */
    padding: 20px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 15px;
    border-radius: 10px;
  }

  /* Intro Blurb */
  .intro-blurb {
    background-color: #2b2b2b; /* Dark grey */
    padding: 15px;
    text-align: center;
    font-size: 18px;
    color: #cccccc;
    border-radius:10px;
  }

  /* Main layout - Sidebar and Feed */
  .main-layout {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    gap: 15px;
    margin-top: 15px;
  }

  /* Left Sidebar */
  .left-sidebar {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    padding: 15px;
    background-color: #333333;
    border-radius: 8px;
  }

  .add-post {
    background-color: #3b5998 !important;
    color: white;
    font-size: 24px;
    padding: 5px;
    width: 50px;
    height: 50px;
    margin: 0 auto;
    vertical-align: middle;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.5s;
  }
  .add-post:hover{
    background-color: #5c79f8 !important;
  }

  .search-bar input {
    padding: 10px;
    width: 100%;
    background-color: #444444;
    border: 1px solid #555;
    border-radius: 5px;
    color: #ffffff;
  }

  /* Add Post Form */
  .post-form {
    display: none;
    flex-direction: column;
    gap: 10px;
    background-color: #333333;
    padding: 15px;
    border-radius: 8px;
    color: #ffffff;
    width: 100%;
  }

  .post-form textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #555;
    background-color: #444444;
    color: #ffffff;
  }

  .post-form button {
    background-color: #ff5722;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  /* Center Feed */
  .feed {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .post {
    background-color: #333333;
    padding: 20px;
    border-radius: 8px;
    font-size: 18px;
    color: #e0e0e0;
  }

  .post-actions {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 10px;
  }

  .post-actions button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: #ffffff;
  }

  .like {
    background-color: #ff4081;
  }

  .comment {
    background-color: #1e88e5;
  }

  .share {
    background-color: #7e57c2;
  }

  /* Right Sidebar */
  .right-sidebar {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
    background-color: #444444;
    border-radius: 8px;
  }

  .profile {
    background-color: #d81b60;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    color: #ffffff;
  }

  .profile-pic {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #e91e63;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #ffffff;
    margin-bottom: 10px;
  }

  .activity, .followers-following {
    width: 100%;
  }

  .activity button, .followers-following button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #333333;
    color: #ffffff;
    margin-bottom: 10px;
  }

  #postButton{
    cursor: pointer;
    transition: background-color 0.5s;
  }
  #postButton:hover{
    background-color:#407540 !important;
  }

  .like{
    transition: background-color 0.5s;
    background-color:#555555 !important;
  }
  .like:hover{
    background-color:#655555 !important;
  }

  .comment{
    transition: background-color 0.5s;
    background-color:#555555 !important;
  }
  .comment:hover{
    background-color:#606060 !important;
  }

  .share{
    transition: background-color 0.5s;
    background-color:#555555 !important;
  }
  .share:hover{
    background-color:#555565 !important;
  }


</style>

<!-- HTML Structure -->

  <!-- Intro Blurb -->
  <div class="intro-blurb">
    <h1>DNHS Satire Home Page</h1>
    <p>Login and explore our Satire hub for everything DNHS</p>
  </div>

  <!-- Banner Section -->
  <div class="banner">
    Skibidi Toilet
  </div>

  <!-- Main Layout with Sidebar and Feed -->
  <div class="main-layout">
    
  <!-- Left Sidebar (Add Post and Search Bar) -->
  <div class="left-sidebar">
      <button class="add-post" onclick="togglePostForm()"><img src="{{site.baseurl}}//images/p1group5images/plusicon.png"></button>
      <p>Add new post</p>
      <div class="search-bar">
        <input type="text" placeholder="Search...">
      </div>

<!-- Add Post Form -->
<div class="post-form" id="postForm">
  <textarea id="postContent" placeholder="What's on your mind?"></textarea>
  <button onclick="addPost()" id="postButton">Post</button>
  <button onclick="toggleHashtags()" id="hashtagButton"># Hashtag</button>
  
  <!-- Hashtag List (Hidden by default) -->
  <div id="hashtagList" style="display: none;">
    <button onclick="addHashtag('#Satire')">#Satire</button>
    <button onclick="addHashtag('#DNHS')">#DNHS</button>
    <button onclick="addHashtag('#Fun')">#Fun</button>
    <button onclick="addHashtag('#Community')">#Community</button>
    <!-- Add more hashtags as needed -->
  </div>
</div>
</div>

<script>
  function togglePostForm() {
    const form = document.getElementById("postForm");
    form.style.display = form.style.display === "flex" ? "none" : "flex";
  }

  function toggleHashtags() {
    const hashtagList = document.getElementById("hashtagList");
    hashtagList.style.display = hashtagList.style.display === "none" ? "block" : "none";
  }

  function addHashtag(hashtag) {
    const postContent = document.getElementById("postContent");
    postContent.value += " " + hashtag; // Add the hashtag to the post content
  }

  function addPost() {
    const content = document.getElementById("postContent").value;
    if (content.trim() === "") {
      alert("Please enter some content for your post!");
      return;
    }

    const feed = document.getElementById("feed");

    // Create a new post element
    const newPost = document.createElement("div");
    newPost.className = "post";
    newPost.textContent = content;

    // Add post actions (like, comment, share)
    const postActions = document.createElement("div");
    postActions.className = "post-actions";

    const likeButton = document.createElement("button");
    likeButton.className = "like";
    likeButton.textContent = "Like";

    const commentButton = document.createElement("button");
    commentButton.className = "comment";
    commentButton.textContent = "Comment";

    const shareButton = document.createElement("button");
    shareButton.className = "share";
    shareButton.textContent = "Share";

    postActions.appendChild(likeButton);
    postActions.appendChild(commentButton);
    postActions.appendChild(shareButton);

    // Append actions to the post and post to the feed
    newPost.appendChild(postActions);
    feed.prepend(newPost);

    // Clear the form and hide it
    document.getElementById("postContent").value = "";
    togglePostForm();
  }
</script>

  <!-- Center Feed (Posts) -->
  <div class="feed" id="feed">
      <!--<div class="post">This is a sample post content. Users can post here.</div>
      <div class="post-actions">
        <button class="like">Like</button>
        <button class="comment">Comment</button>
        <button class="share">Share</button>
      </div>-->
    </div>

  <!-- Right Sidebar (Profile and Activity) -->
   <div class="right-sidebar">
      <div class="profile">
        <div class="profile-pic">Profile</div>
        <p>Account Information + Satire Score + Age (click profile)</p>
      </div>
      <div class="activity">
        <button>Activity</button>
      </div>
      <div class="followers-following">
        <button>Followers/Following</button>
      </div>
    </div>
  </div>
</div>

<script>
  function togglePostForm() {
    const form = document.getElementById("postForm");
    form.style.display = form.style.display === "flex" ? "none" : "flex";
  }

  function addPost() {
    const content = document.getElementById("postContent").value;
    if (content.trim() === "") {
      alert("Please enter some content for your post!");
      return;
    }

    const feed = document.getElementById("feed");

    // Create a new post element
    const newPost = document.createElement("div");
    newPost.className = "post";
    newPost.textContent = content;

    // Add post actions (like, comment, share)
    const postActions = document.createElement("div");
    postActions.className = "post-actions";

    const likeButton = document.createElement("button");
    likeButton.className = "like";
    likeButton.textContent = "Like";

    const commentButton = document.createElement("button");
    commentButton.className = "comment";
    commentButton.textContent = "Comment";

    const shareButton = document.createElement("button");
    shareButton.className = "share";
    shareButton.textContent = "Share";

    postActions.appendChild(likeButton);
    postActions.appendChild(commentButton);
    postActions.appendChild(shareButton);

    // Append actions to the post and post to the feed
    newPost.appendChild(postActions);
    feed.prepend(newPost);

    // Clear the form and hide it
    document.getElementById("postContent").value = "";
    togglePostForm();
  }
</script>
