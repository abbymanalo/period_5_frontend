import { pythonURI, fetchOptions } from "./api/config.js";

async function generateImage(int) {
    try {
        const postApiUrl = `${pythonURI}/api/id/nestImgFetch`
        const postApiRequest = await fetch(postApiUrl, {
            ...fetchOptions,
            method: 'POST',
            body: JSON.stringify({"imageID": int})
        });

        if (!postApiRequest.ok) {
            throw new Error('Failed to fetch image API source: ' + postApiRequest.statusText);
        }
        const postData = await postApiRequest.json();
        return postData
    } catch (error) {
        // Catches errors
        console.error('Error fetching data:', error);
    }
}


export async function createImagePost(postObj) {
    
    const imageData = await generateImage(postObj.id)
    const imageUrl = imageData.postImg
    const caption = postObj.title;
    const user = postObj.user_name;
    const datePosted = "10/10/10";

   
    const postContainer = document.createElement("div");
    postContainer.classList.add("postFeed");

 
    const imageDiv = document.createElement("div");
    imageDiv.classList.add("imageContainer");
    const imageElement = document.createElement("img");
    imageElement.src = `data:image/jpeg;base64,${imageUrl}`;
    imageDiv.appendChild(imageElement);

   
    const captionDiv = document.createElement("div");
    captionDiv.classList.add("textContainer");
    const captionElement = document.createElement("h3");
    captionElement.innerHTML = caption;
    captionDiv.append(captionElement)
    
    
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("textInfo");
    const datePostedElement = document.createElement("p");
    datePostedElement.innerHTML = "Date Posted: " + datePosted;
    infoDiv.append(datePostedElement);
    const userPostedElement = document.createElement("p");
    userPostedElement.innerHTML = "Posted by: " + user
    infoDiv.append(userPostedElement);
    
   
    postContainer.appendChild(imageDiv);
    postContainer.appendChild(captionDiv);
    postContainer.appendChild(infoDiv);
    
    return postContainer
}