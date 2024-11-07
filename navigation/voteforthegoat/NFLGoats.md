---
layout: post
title: Vote for the GOATs of the NFL
description: Made By Noah H, James E, and Zafeer A
permalink: /voteforthegoat/nflgoats
comments: true
---


# Welcome to "Vote for the GOAT"

This site allows you to vote for your favorite football players and engage in discussions. You can express your preferences on who you believe is the greatest of all time. After voting, feel free to leave comments and debate your selections with others!

There are five different polls where you vote for the greatest Quarterback, Wide Receiver, Defensive Player, Running Back, and NFL Division of all time. Each player (or division) has their own digitally crafted card with a picture and statistics from their career. You vote for the player by clicking on the card, then there should be a section below that allows you to submit a comment along with a username.


## Quarterback Voting

<script>
  // Function to select a player and show the comment section for that category
  function selectPlayer(playerName, category) {
      // Display the selected player name
      document.getElementById(`selectedPlayer${category}`).innerHTML = `You selected: ${playerName}`;
      
      // Show the appropriate comment section based on the category
      document.getElementById(`commentSection${category}`).style.display = 'block';
  }

  // Function to add a comment for a specific category
  function addComment(category) {
      // Get the username and comment input elements based on the category
      const usernameInput = document.getElementById(`usernameInput${category}`);
      const commentInput = document.getElementById(`commentInput${category}`);

      // Check if both fields have input
      if (usernameInput.value.trim() === "" || commentInput.value.trim() === "") {
          alert("Please enter both a username and a comment.");
          return;
      }

      // Get the comment list for the category
      const commentList = document.getElementById(`commentList${category}`);

      // Create a new div for the comment
      const newComment = document.createElement('div');
      newComment.innerHTML = `<strong>${usernameInput.value}:</strong> ${commentInput.value}`;

      // Append the new comment to the comment list
      commentList.appendChild(newComment);

      // Clear the input fields after adding the comment
      usernameInput.value = "";
      commentInput.value = "";
  }
</script>


<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Tom Brady', 'QB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/Tom_Brady.png" alt="Tom Brady" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Joe Montana', 'QB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/Joe_Montana.png" alt="Joe Montana" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Johnny Unitas', 'QB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/Johnny_Unitas.png" alt="Johnny Unitas" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Peyton Manning', 'QB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/Peyton_Manning.png" alt="Peyton Manning" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Brett Favre', 'QB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/Brett_Farve.png" alt="Brett Favre" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Dan Marino', 'QB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/Dan_Marino.png" alt="Dan Marino" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Steve Young', 'QB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/Steve_Young.png" alt="Steve Young" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('John Elway', 'QB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/John_Elway.png" alt="John Elway" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Drew Brees', 'QB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/Drew_Brees.png" alt="Drew Brees" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Aaron Rodgers', 'QB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/Aaron_Rodgers.png" alt="Aaron Rodgers" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Ben Roethlisberger', 'QB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/Ben_Roethlisberger.png" alt="Ben Roethlisberger" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Fran Tarkenton', 'QB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/Fran_Tarkenton.png" alt="Fran Tarkenton" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Patrick Mahomes', 'QB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/Patrick_Mahomes.png" alt="Patrick Mahomes" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Troy Aikman', 'QB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/Troy_Aikman.png" alt="Troy Aikman" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Eli Manning', 'QB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Quarterbacks/Eli_Manning.png" alt="Eli Manning" style="width: 100%;">
  </div>
</div>

<div id="selectedPlayerQB" style="color: #333; margin-top: 20px;"></div>

<div class="comment-section" id="commentSectionQB" style="display: none;">
    <h3>Leave a Comment (Quarterbacks):</h3>
    <input type="text" id="usernameInputQB" placeholder="Enter your username" style="width: 80%; padding: 8px; margin-bottom: 5px;">
    <input type="text" id="commentInputQB" placeholder="Enter your comment" style="width: 80%; padding: 8px;">
    <button onclick="addComment('QB');" class="comment-button">Submit</button>
    <div class="comment-list" id="commentListQB" style="margin-top: 10px;"></div>
</div>

<script>
  // Function to select a player and show the comment section for Wide Receivers (WRs)
  function selectPlayer(playerName, category) {
      document.getElementById(`selectedPlayer${category}`).innerHTML = `You selected: ${playerName}`;
      document.getElementById(`commentSection${category}`).style.display = 'block';
  }

  // Function to add a comment for Wide Receivers (WRs)
  function addComment(category) {
      const usernameInput = document.getElementById(`usernameInput${category}`);
      const commentInput = document.getElementById(`commentInput${category}`);

      if (usernameInput.value.trim() === "" || commentInput.value.trim() === "") {
          alert("Please enter both a username and a comment.");
          return;
      }

      const commentList = document.getElementById(`commentList${category}`);
      const newComment = document.createElement('div');
      newComment.innerHTML = `<strong>${usernameInput.value}:</strong> ${commentInput.value}`;

      commentList.appendChild(newComment);
      usernameInput.value = "";
      commentInput.value = "";
  }
</script>


## Wide Receiver Voting

<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Jerry Rice', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/Jerry_Rice.png" alt="Jerry Rice" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Randy Moss', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/Randy_Moss.png" alt="Randy Moss" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Terrell Owens', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/Terrell_Owens.png" alt="Terrell Owens" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Larry Fitzgerald', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/Larry_Fitzgerald.png" alt="Larry Fitzgerald" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Calvin Johnson', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/Calvin_Johnson.png" alt="Calvin Johnson" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Davante Adams', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/Davante_Adams.png" alt="Davante Adams" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Chris Carter', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/Chris_Carter.png" alt="Chris Carter" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Tyreek Hill', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/Tyreek_Hill.png" alt="Tyreek Hill" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('DeAndre Hopkins', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/DeAndre_Hopkins.png" alt="DeAndre Hopkins" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Julio Jones', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/Julio_Jones.png" alt="Julio Jones" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Antonio Brown', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/Antonio_Brown.png" alt="Antonio Brown" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Stefon Diggs', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/Stefon_Diggs.png" alt="Stefon Diggs" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('DK Metcalf', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/DK_Metcalf.png" alt="DK Metcalf" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('A.J. Brown', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/AJ_Brown.png" alt="A.J. Brown" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Amari Cooper', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/Amari_Cooper.png" alt="Amari Cooper" style="width: 100%;">
  </div>

  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Marvin Harrison', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/Marvin_Harrison.png" alt="Marvin Harrison" style="width: 100%;">
  </div>

  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Mike Evans', 'WR')">
    <img src="{{site.baseurl}}/images/nfl-icons/Wide Receivers/Mike_Evans.png" alt="Mike Evans" style="width: 100%;">
  </div>
</div>

<div id="selectedPlayerWR" style="color: #333; margin-top: 20px;"></div>

<div class="comment-section" id="commentSectionWR" style="display: none;">
    <h3>Leave a Comment (Wide Receivers):</h3>
    <input type="text" id="usernameInputWR" placeholder="Enter your username" style="width: 80%; padding: 8px; margin-bottom: 5px;">
    <input type="text" id="commentInputWR" placeholder="Enter your comment" style="width: 80%; padding: 8px;">
    <button onclick="addComment('WR');" class="comment-button">Submit</button>
    <div class="comment-list" id="commentListWR" style="margin-top: 10px;"></div>
</div>

<script>
  // Function to select a player and show the comment section for Defensive Players (DPs)
  function selectPlayer(playerName, category) {
      document.getElementById(`selectedPlayer${category}`).innerHTML = `You selected: ${playerName}`;
      document.getElementById(`commentSection${category}`).style.display = 'block';
  }

  // Function to add a comment for Defensive Players (DPs)
  function addComment(category) {
      const usernameInput = document.getElementById(`usernameInput${category}`);
      const commentInput = document.getElementById(`commentInput${category}`);

      if (usernameInput.value.trim() === "" || commentInput.value.trim() === "") {
          alert("Please enter both a username and a comment.");
          return;
      }

      const commentList = document.getElementById(`commentList${category}`);
      const newComment = document.createElement('div');
      newComment.innerHTML = `<strong>${usernameInput.value}:</strong> ${commentInput.value}`;

      commentList.appendChild(newComment);
      usernameInput.value = "";
      commentInput.value = "";
  }
</script>


## Defensive Player Voting

<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Lawrence Taylor', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/Lawrence_Taylor.png" alt="Lawrence Taylor" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Reggie White', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/Reggie_White.png" alt="Reggie White" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Dick Butkus', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/Dick_Butkus.png" alt="Dick Butkus" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Deion Sanders', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/Deion_Sanders.png" alt="Deion Sanders" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Ray Lewis', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/Ray_Lewis.png" alt="Ray Lewis" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Ed Reed', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/Ed_Reed.png" alt="Ed Reed" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Joe Greene', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/Joe_Greene.png" alt="Joe Greene" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Ronnie Lott', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/Ronnie_Lott.png" alt="Ronnie Lott" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('J.J. Watt', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/JJ_Watt.png" alt="J.J. Watt" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('T.J. Watt', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/TJ_Watt.png" alt="T.J. Watt" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Nick Bosa', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/Nick_Bosa.png" alt="Nick Bosa" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Aidan Hutchinson', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/Aidan_Hutchinson.png" alt="Aidan Hutchinson" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Fred Warner', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/Fred_Warner.png" alt="Fred Warner" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Derrick Thomas', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/Derrick_Thomas.png" alt="Derrick Thomas" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Mike Singletary', 'DP')">
    <img src="{{site.baseurl}}/images/nfl-icons/Defensive Players/Mike_Singletary.png" alt="Mike Singletary" style="width: 100%;">
  </div>
</div>

<div id="selectedPlayerDP" style="color: #333; margin-top: 20px;"></div>

<div class="comment-section" id="commentSectionDP" style="display: none;">
    <h3>Leave a Comment (Defensive Players):</h3>
    <input type="text" id="usernameInputDP" placeholder="Enter your username" style="width: 80%; padding: 8px; margin-bottom: 5px;">
    <input type="text" id="commentInputDP" placeholder="Enter your comment" style="width: 80%; padding: 8px;">
    <button onclick="addComment('DP');" class="comment-button">Submit</button>
    <div class="comment-list" id="commentListDP" style="margin-top: 10px;"></div>
</div>


<script>
  // Function to select a player and show the comment section for Running Backs (RBs)
  function selectPlayer(playerName, category) {
      document.getElementById(`selectedPlayer${category}`).innerHTML = `You selected: ${playerName}`;
      document.getElementById(`commentSection${category}`).style.display = 'block';
  }

  // Function to add a comment for Running Backs (RBs)
  function addComment(category) {
      const usernameInput = document.getElementById(`usernameInput${category}`);
      const commentInput = document.getElementById(`commentInput${category}`);

      if (usernameInput.value.trim() === "" || commentInput.value.trim() === "") {
          alert("Please enter both a username and a comment.");
          return;
      }

      const commentList = document.getElementById(`commentList${category}`);
      const newComment = document.createElement('div');
      newComment.innerHTML = `<strong>${usernameInput.value}:</strong> ${commentInput.value}`;

      commentList.appendChild(newComment);
      usernameInput.value = "";
      commentInput.value = "";
  }
</script>



## Runningback Voting

<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Jim Brown', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/Jim_Brown.png" alt="Jim Brown" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Barry Sanders', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/Barry_Sanders.png" alt="Barry Sanders" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Walter Payton', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/Walter_Payton.png" alt="Walter Payton" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Emmitt Smith', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/Emmitt_Smith.png" alt="Emmitt Smith" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Derrick Henry', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/Derrick_Henry.png" alt="Derrick Henry" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Christian McCaffrey', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/Christian_McCaffrey.png" alt="Christian McCaffrey" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Eric Dickerson', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/Eric_Dickerson.png" alt="Eric Dickerson" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Marshall Faulk', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/Marshall_Faulk.png" alt="Marshall Faulk" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Adrian Peterson', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/Adrian_Peterson.png" alt="Adrian Peterson" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('LaDainian Tomlinson', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/LaDainian_Tomlinson.png" alt="LaDainian Tomlinson" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Frank Gore', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/Frank_Gore.png" alt="Frank Gore" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Curtis Martin', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/Curtis_Martin.png" alt="Curtis Martin" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Jerome Bettis', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/Jerome_Bettis.png" alt="Jerome Bettis" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Tony Dorsett', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/Tony_Dorsett.png" alt="Tony Dorsett" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('Marshawn Lynch', 'RB')">
    <img src="{{site.baseurl}}/images/nfl-icons/Running Backs/Marshawn_Lynch.png" alt="Marshawn Lynch" style="width: 100%;">
  </div>
</div>

<div id="selectedPlayerRB" style="color: #333; margin-top: 20px;"></div>

<div class="comment-section" id="commentSectionRB" style="display: none;">
    <h3>Leave a Comment (Running Backs):</h3>
    <input type="text" id="usernameInputRB" placeholder="Enter your username" style="width: 80%; padding: 8px; margin-bottom: 5px;">
    <input type="text" id="commentInputRB" placeholder="Enter your comment" style="width: 80%; padding: 8px;">
    <button onclick="addComment('RB');" class="comment-button">Submit</button>
    <div class="comment-list" id="commentListRB" style="margin-top: 10px;"></div>
</div>

<script>
  // Function to select a division and show the comment section for Divisions (Ds)
  function selectPlayer(playerName, category) {
      document.getElementById(`selectedPlayer${category}`).innerHTML = `You selected: ${playerName}`;
      document.getElementById(`commentSection${category}`).style.display = 'block';
  }

  // Function to add a comment for Divisions (Ds)
  function addComment(category) {
      const usernameInput = document.getElementById(`usernameInput${category}`);
      const commentInput = document.getElementById(`commentInput${category}`);

      if (usernameInput.value.trim() === "" || commentInput.value.trim() === "") {
          alert("Please enter both a username and a comment.");
          return;
      }

      const commentList = document.getElementById(`commentList${category}`);
      const newComment = document.createElement('div');
      newComment.innerHTML = `<strong>${usernameInput.value}:</strong> ${commentInput.value}`;

      commentList.appendChild(newComment);
      usernameInput.value = "";
      commentInput.value = "";
  }
</script>


## NFL Divisions Votings

<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('NFC North', 'D')">
    <img src="{{site.baseurl}}/images/nfl-icons/Divisions/NFC_North.png" alt="NFC North" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('NFC East', 'D')">
    <img src="{{site.baseurl}}/images/nfl-icons/Divisions/NFC_East.png" alt="NFC East" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('NFC South', 'D')">
    <img src="{{site.baseurl}}/images/nfl-icons/Divisions/NFC_South.png" alt="NFC South" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('NFC West', 'D')">
    <img src="{{site.baseurl}}/images/nfl-icons/Divisions/NFC_West.png" alt="NFC West" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('AFC North', 'D')">
    <img src="{{site.baseurl}}/images/nfl-icons/Divisions/AFC_North.png" alt="AFC North" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('AFC East', 'D')">
    <img src="{{site.baseurl}}/images/nfl-icons/Divisions/AFC_East.png" alt="AFC East" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('AFC South', 'D')">
    <img src="{{site.baseurl}}/images/nfl-icons/Divisions/AFC_South.png" alt="AFC South" style="width: 100%;">
  </div>
  
  <div style="width: 30%; text-align: center; margin-bottom: 20px;" onclick="selectPlayer('AFC West', 'D')">
    <img src="{{site.baseurl}}/images/nfl-icons/Divisions/AFC_West.png" alt="AFC West" style="width: 100%;">
  </div>

<div id="selectedPlayerD" style="color: #333; margin-top: 20px;"></div>

<div class="comment-section" id="commentSectionD" style="display: none;">
    <h3>Leave a Comment (Divisions):</h3>
    <input type="text" id="usernameInputD" placeholder="Enter your username" style="width: 80%; padding: 8px; margin-bottom: 5px;">
    <input type="text" id="commentInputD" placeholder="Enter your comment" style="width: 80%; padding: 8px;">
    <button onclick="addComment('D');" class="comment-button">Submit</button>
    <div class="comment-list" id="commentListD" style="margin-top: 10px;"></div>
</div>