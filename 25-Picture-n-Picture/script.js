const videoElement = document.getElementById("video");
const button = document.getElementById("button");

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia()
  } catch (error) {
    console.log("Error+++>>>", error);
  }
}

//on load
selectMediaStream();
