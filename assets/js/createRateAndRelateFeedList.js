import { pythonURI, fetchOptions } from "./api/config.js";

async function generateImage(int) {
    try {
        const postApiUrl = `${pythonURI}/api/id/nestImgFetch`
        const postApiRequest = await fetch(postApiUrl, {
            ...fetchOptions,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
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
