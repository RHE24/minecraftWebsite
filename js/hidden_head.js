var banner = document.getElementById("banner");
var headroom = new Headroom(banner, {
  "tolerance": 5,
  "offset": 100,
  "classes": {
    "initial": "animated",
    "pinned": "slideInDown",
    "unpinned": "slideOutUp"
  }
});
headroom.init();
