const playlists = [
  {
    title: "Education Videos",
    vidios: [
      {
        fileUrl: "./videos/java-script-2.mp4",
        poster: "./img/java-script-2.png",
        title:
          "JavaScript - Way of the Samurai, Browser, first program, foreign language learning simulator",
        channel: "It-Kamasutra",
        releaseDate: "",
        isLive: true,
      },
      {
        fileUrl: "./videos/java-script-3.mp4",
        poster: "./img/java-script-3.png",
        title:
          "JavaScript - The Way of the Samurai, installing VS code, code editor",
        channel: "It-Kamasutra",
        releaseDate: "1 week ago",
        isLive: false,
      },
      {
        fileUrl: "./videos/java-script-3.mp4",
        poster: "./img/back-end.png",
        title:
          "JavaScript - The Way of the Samurai, installing VS code, code editor",
        channel: "It-Kamasutra",
        releaseDate: "2 week ago",
        isLive: false,
      },
    ],
  },
  {
    title: "Watch Later",
    vidios: [
      {
        fileUrl: "./videos/flexbox.mp4",
        poster: "./img/flexbox.jpeg",
        title:
          "FLEXBOX. Учимся верстать на флексах. Флексбокс уроки. Часть первая - свойства flex-контейнера",
        channel: "Фрілансер по життю",
        releaseDate: "4 года назад",
        isLive: false,
      },
      {
        fileUrl: "./videos/java-script-ninja.mp4",
        poster: "",
        title: "Учись реальности!",
        channel: "JavaScript.Ninja",
        releaseDate: "13 дней назад",
        isLive: false,
      },
      {
        fileUrl: "./videos/grid.mp4",
        poster: "./img/grid.jpeg",
        title: "Learn CSS Grid the easy way",
        channel: "Kevin Powell",
        releaseDate: "2 года назад",
        isLive: false,
      },
    ],
  },
];

const main = document.getElementById("main");

(function createHeading() {
  const heading = createEle("h1", "heading");
  heading.innerText = "My Playlists";
  main.append(heading);
})();
playlists.forEach((p) => renderPlaylists(p));

function renderPlaylists(data) {
  const playlist = createEle("div", "playlist");
  const playlistTitle = createEle("h2", "playlist__title");
  const playlistVidios = createEle("div", "playlist__vidios");

  playlistTitle.innerText = data.title;
  playlist.append(playlistTitle, playlistVidios);

  data.vidios.forEach((video) => {
    renderVideo(video, playlistVidios);
  });

  main.append(playlist);
}

function renderVideo(data, ele) {
  const playlistVidio = createEle("div", "playlist__vidio");
  const vidio = createEle("video", "video");
  const title = createEle("p", "vidio-title");
  const channel = createEle("span", "vidio-channel");
  const releaseDate = createEle("span", "vidio-release-date");

  vidio.src = data.fileUrl;
  vidio.poster = data.poster;
  vidio.width = "352";
  vidio.height = "252";
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

function createEle(tagName, className) {
  const ele = document.createElement(tagName);
  ele.classList.add(className);
  return ele;
}
