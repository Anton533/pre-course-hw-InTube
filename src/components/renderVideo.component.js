import { createElementWithClass } from "../helpers.js";

export function renderVideo(data, ele) {
  const playlistVidio = createElementWithClass("div", "playlist__vidio");
  const vidio = createElementWithClass("video", "video");
  const title = createElementWithClass("p", "vidio-title");
  const channel = createElementWithClass("span", "vidio-channel");
  const releaseDate = createElementWithClass("span", "vidio-release-date");

  vidio.src = data.fileUrl;
  vidio.poster = data.poster;
  vidio.type = "video/mp4";
  vidio.controls = "controls";
  title.innerText = data.title;
  channel.innerText = data.channel;
  if (data.isLive) {
    releaseDate.innerHTML = "&bull; Live Stream";
    releaseDate.style.color = "#FF2C91";
  } else {
    releaseDate.innerText = data.releaseDate;
  }

  playlistVidio.append(vidio, title, channel, releaseDate);
  ele.append(playlistVidio);
}
