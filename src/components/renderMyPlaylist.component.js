import { createElementWithClass } from "../helpers.js";

import { renderPlaylists } from "../components/renderPlaylists.component.js";

const main = document.getElementById("main");

export function renderMyPlaylist(playlists) {
  renderHeading();
  playlists.forEach((p) => renderPlaylists(p));
}

function renderHeading() {
  const heading = createElementWithClass("h1", "heading");
  heading.innerText = "My Playlists";
  main.append(heading);
}
