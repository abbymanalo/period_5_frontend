---
toc: true
layout: post
title: Update the Nest
description:
permalink: /rate_and_relate/update_the_nest/
menu: nav/rate_and_relate.html
---
<style>
.feedContainer {
    transform: translateY(-90px);
}
.postFeed {
    border: 6px solid black;
    background-color: #FBC3C3;
    border-color: #F5E1E7;
    border-radius: 50px;
    height: 350px;
    margin-bottom: 12px;
    margin-left: 12px;
    margin-right: 12px;
}
.textContainer {
    transform: translateY(20px)
}
.textInfo {
    transform: translateY(30px)
}
.imageContainer {
    height: auto;
    display: inline;
    float: left;
    width: 55%;
    transform: translateX(5px) translateY(50px);
    text-align: center;
}
.imageContainer > img {
    width: 80%;
    display: inline-block;
}
.feed {
    border: 10px solid black;
    border-radius: 50px;
    background-color: pink;
    text-align: center;
    padding: 100px 0 3px 0;
    height: auto;
    font-family: 'Playfair Display', serif;
    float: left;
}
.header {
        border: 10px solid black;
        border-radius: 50px;
        background-color: pink;
        text-align: center;
        padding: 5px 0 3px 0;
        height: 200px;
        font-family: 'Playfair Display', serif;
    }
.headerImage > img {
    height: auto;
    display: inline;
    width: 15%;
    float: left;
    transform: translateX(30px) translateY(-80px);
}
.styled-button {
            background-color: #4CAF50;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 12px;
            transition: background-color 0.3s, transform 0.2s;
            transform: translateX(-70px) translateY(10px);
}
 .upload_box {
    position: fixed;            
    top: 50%;                   
    left: 50%;                
    transform: translate(-50%, -50%);
    background-color: #FBC3C3;
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 50px;
    height: auto;
    display: none;
    text-align: center;
}
.upload_box #textInput {
    width: 100%; 
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc; 
    border-radius: 4px; 
    margin-bottom: 10px; 
}
.upload_box .post-button {
   transform: translateX(240px)
}
.exit-button {
   transform: translateX(200px) translateY(-535px);
}
.upload_media {
    position: fixed;             /* Use fixed positioning */
    top: 50%;                   /* Center vertically */
    left: 50%;                  /* Center horizontally */
    transform: translate(-50%, -50%); /* Adjust back by half of div’s size */
    background-color:  #FBC3C3;
    padding: 20px;
    border: 1px solid #ccc;
    visibility: hidden;         /* Hidden initially */
    text-align: center;
}
</style>

<div style="text-align: center;" class="header">
    <h1> Update the Nest </h1>
    <div class="headerImage">
        <img src="{{site.baseurl}}/images/rate_and_relate/update_the_nest/update_the_nest.png" style="display: block; margin: 0 auto;" alt="Logo">
    </div>
    <div class="headerText">
        <button class="styled-button" onclick="closeDiv()">Upload Media</button>
    </div>
</div>

<div class="feed">
    <div class="feedContainer" id="feedContainer">
    <h1> Feed </h1>
        <div class="postFeed">
            <div class="imageContainer">
                <img src="{{site.baseurl}}/images/rate_and_relate/update_the_nest/temp_photo.jpg">
            </div>
            <div class="textContainer">
                <h3>Caption</h3><br>
                <div class="textInfo">
                    <p>Posted by: Abby Manalo</p><p>Date Posted: 10/25/24</p>
                </div>
            </div>
        </div>
</div>

<div class="upload_box" id="upload_box">
    <img class="toggle-button" onclick="toggleDiv()" src="{{site.baseurl}}/images/upload_imagebutton.png" width=500> <br>
    <text class="content-div"></text>
    <label for="textInput">Enter caption:</label>
    <input type="text" id="textInput" placeholder="Type something...">
    <button class="post-button">post</button>
    <button class="exit-button" onclick="closeDiv()">x</button>
</div>

<div class="upload_media" id="mediaUploader">
    <select id="cameraSelect"><option style="text-align:center">---- Choose Camera ----</option></select>
    <video id="video" width="400" height="300" style="display:none" autoplay></video>
    <canvas id="canvas" width="400" height="300" style="display:none;"></canvas><br>
    <button id="capture" onclick="captureImage()" style="display:none">Capture Image</button><br>
    <img id="photo" alt="Captured Image" width="400" height="300" style="display:none">
        <button id="retakePhoto" style="display:none" onclick="retakePhoto()">Retake Photo</button>
        <button id="confirmPhoto" style="display:none" onclick="toggleDiv()">Use Photo</button>
</div>

<script>
    // Iniital decleration of variables
    const myDiv = document.getElementById("mediaUploader");
    const mySecondDiv = document.getElementById("upload_box");
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const photo = document.getElementById('photo');
    const captureButton = document.getElementById('capture');
    const cameraSelect = document.getElementById('cameraSelect');
    const retakeButton = document.getElementById('retakePhoto');
    const confirmButton = document.getElementById('confirmPhoto');
    let currentStream = null;
    let freshPage = true;
    function getCameraStream(deviceId) {
        // Checks if currentStream exists
        if (currentStream) {
            // Stop the previous stream if there's any
            currentStream.getTracks().forEach(track => track.stop());
        }
        // Creates local variable constraints which sets video taking device
        const constraints = {
            // Checks if deviceId exists, if it does set 'exact' to deviceId, then use default
            video: { deviceId: deviceId ? { exact: deviceId } : undefined }
        };
        // Access the camera stream based on selected deviceId
        navigator.mediaDevices.getUserMedia(constraints)
            // 'stream' is equal to the object output by 'getUserMedia'
            .then(function (stream) {
                currentStream = stream;
                // Sets the video elements source to the stream
                video.srcObject = stream;
            })
            // If it fails to receive an object this returns an error
            .catch(function (err) {
                // err is a variable returned by getUserMedia when it fails
                console.log("Error accessing the camera: " + err);
            });
    };
    function toggleDiv() {
        // Checks if myDiv is visible
        const myDivVisibility = window.getComputedStyle(myDiv).visibility
        if (myDivVisibility == "hidden") {
            // Makes myDiv visible and removes the ability to scroll the page
            myDiv.style.visibility = "visible";
            document.body.style.overflow = "hidden";
            if (!freshPage) {
                retakePhoto();
            }
        } else {
            myDiv.style.visibility = "hidden";
            document.body.style.overflow = "visible";
            currentStream.getTracks().forEach(track => track.stop());
    }};
    function captureImage() {
        // Hides the photo taking elements
        freshPage = false;
        video.style.display = "none";
        captureButton.style.display = "none";
        cameraSelect.style.display = "none";
        photo.style.display = "block";
        retakeButton.style.display = "inline-block";
        confirmButton.style.display = "inline-block";
        // Sets image parameter to be 2d
        const context = canvas.getContext('2d');
        // Creates the image, with a width and height equal to the canvas
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        // imageData variable is set to the canvas current urt
        const imageData = canvas.toDataURL('image/png');
        // Sets the image element to the canvas image.
        photo.setAttribute('src', imageData);
        currentStream.getTracks().forEach(track => track.stop());
    };
    function retakePhoto() {
        video.style.display = "block";
        captureButton.style.display = "inline-block";
        cameraSelect.style.display = "inline-block";
        photo.style.display = "none";
        retakeButton.style.display = "none";
        confirmButton.style.display = "none";
        getCameraStream(cameraSelect.value);
    }
    // Creates a list of options for possible video input devices
    navigator.mediaDevices.enumerateDevices().then(function (devices) {
        devices.forEach(function (device) {
            // Checks if the device is a video input device
            if (device.kind === 'videoinput') {
                // Creates a dropdown list of options
                const option = document.createElement('option');
                // Sets initial value of dropdown to the currently selected deviceId
                option.value = device.deviceId;
                // Sets initial label of dropdown to currently selected device name or 'Camera (number)'
                option.text = device.label || `Camera ${cameraSelect.length + 1}`;
                // Adds the adds the option element to page to the select element with id = "cameraSelect"
                cameraSelect.appendChild(option);
            }
        });
    });
    // When the selected camera changes, update the video stream
    cameraSelect.onchange = function() {
        // Reruns the getCameraStream function with new value
        getCameraStream(cameraSelect.value);
    };
    // Automatically start with the first available camera
    cameraSelect.addEventListener('change', function() {
        getCameraStream(cameraSelect.value);
        video.style.display = "block";
        captureButton.style.display = "inline-block"
    });
    //function for close out post div
    function closeDiv() {
        // Checks if myDiv is visible
        const mySecondDivVisibility = window.getComputedStyle(mySecondDiv).display;
        if (mySecondDivVisibility == "none") {
            // Makes myDiv visible and removes the ability to scroll the page
            mySecondDiv.style.display = "block";
            document.body.style.overflow = "hidden";
        } else {
            mySecondDiv.style.display = "none";
            document.body.style.overflow = "visible";
    }};
</script>  

<script type="module">
import { createImagePost } from '{{site.baseurl}}/assets/js/createRateAndRelateFeedList.js';
import { pythonURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';

const postApiUrl = `${pythonURI}/api/nestPost`;

async function generatePosts() {
    try {
        // Define the fetch requests
        const postApiRequest = fetch(postApiUrl, fetchOptions);
        // Run all fetch requests concurrently
        const [postApiResponse] = await Promise.all([
            postApiRequest
        ]);
        // Check for errors in the responses
        if (!postApiResponse.ok) {
            throw new Error('Failed to fetch post API links: ' + postApiResponse.statusText);
        }        
        // Parse the JSON data
        const postData = await postApiResponse.json();

        // Iterate over the postData and create HTML elements for each item
        const feedList = document.getElementById("feedContainer")
        // Create an array of promises
        const postPromises = [];

        postData.forEach(postItem => {
            // Use imported function
            postPromises.push(createImagePost(postItem).then(postElement => {
                feedList.appendChild(postElement);
            }));
        });
        await Promise.all(postPromises);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
// 
// async function sendPosts() {
//     try {
//         
// 
//         const postApiRequest = await fetch(PostApiUrl, {
//             ...fetchOptions,
//             method: 'post',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify()
//         })
//         if (!postApiRequest.ok) {
//             throw new Error('Failed to fetch image API source: ' + postApiRequest.statusText);
//         }
//     }
// }
generatePosts()
</script>