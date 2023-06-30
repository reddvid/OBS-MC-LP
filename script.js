window.onload = async function () {
  // load chapter 1 videos
  // document.getElementById('lc').appendChild(element);
  //  <video src="red-intro-logo-bg.mp4" class="vid" controls type="video/mp4"></video>
  let div1 = document.getElementById("video-container-1");

  // parse json
  const response = await fetch("./list.json");
  const json = await response.json();
  // .then((res) => res.json())
  // .then((data) => {
  //   // Make List
  //   jsonFile = JSON.stringify(data);
  // });

  console.log(json);
  for (let i = 0; i < json.length; i++) {
    for (let j = 0; j < json[i].video.length; j++) {
      console.log(json[i].video[j]);

      var div = document.getElementById("video-container-" + (i + 1));
      var h3 = document.createElement("h3");
      h3.textContent = `Chapter ${i + 1}.${j + 1} - ${json[i].video[j]}`;
      // <h3>Chapter 2.1 - Building a Basic Scene</h3>
      var video = document.createElement("video");
      video.src = `./output/Ch ${i + 1} - ${j + 1} - ${json[i].video[j]}.mp4`;
      video.classList.add("vid");
      video.controls = true;
      video.preload = "metadata";
      div.appendChild(h3);
      div.appendChild(video);
    }
  }
};
