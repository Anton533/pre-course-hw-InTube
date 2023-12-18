import { createElementWithClass } from "../helpers.js";

import { renderVideo } from "../components/renderVideo.component.js";

export function renderPlaylists(data) {
  const playlist = createElementWithClass("div", "playlist");
  const playlistTitle = createElementWithClass("h2", "playlist__title");
  const playlistVidios = createElementWithClass("div", "playlist__vidios");

  playlistTitle.innerText = data.title;
  playlist.append(playlistTitle, playlistVidios);
  data.vidios.forEach((video) => {
    renderVideo(video, playlistVidios);
  });

  main.append(playlist);
}
