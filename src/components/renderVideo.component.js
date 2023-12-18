import { createElementWithClass } from "../helpers.js";

export function renderVideo(data, ele) {
  const playlistVidio = createElementWithClass("div", "playlist__vidio");
  const vidio = createElementWithClass("video", "video");
  const vidioInfo = createElementWithClass("div", "video-info");
  const title = createElementWithClass("p", "vidio-title");
  const channel = createElementWithClass("span", "vidio-channel");
  const releaseDate = createElementWithClass("span", "vidio-release-date");

  vidio.src = data.fileUrl;
  vidio.poster = data.poster;
  vidio.type = "video/mp4";
  vidio.controls = "controls";
  if (data.title.length > 55) {
    title.innerText = data.title.slice(0, 55) + "...";
  } else {
    title.innerText = data.title;
  }
  channel.innerText = data.channel;
  if (data.isLive) {
    releaseDate.innerHTML = "&bull; Live Stream";
    releaseDate.style.color = "#FF2C91";
  } else {
    releaseDate.innerText = data.releaseDate;
  }
  vidioInfo.append(title, channel, releaseDate);
  playlistVidio.append(vidio, vidioInfo);
  ele.append(playlistVidio);
}
