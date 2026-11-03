// ✏️ EDIT THIS FILE to change names, messages and photos. No other file needs touching.
window.CONFIG = {
  name: "MG",                         // her name
  title: "Happy Birthday",                // big intro title
  music: "music/birthday.mp3",            // put your song here (optional)

  // Text on each step: [heading, button label]
  steps: {
    intro:   ["It's Your Special Day", "NEXT"],
    ready:   ["Ready for your surprise?", "LET'S GO"],
    music:   ["Music makes it better...", "♫ PLAY MUSIC"],
    balloon: ["Let the colors fly!", "🎈 FLY BALLOONS"],
    message: ["Almost there...", "✦ SHOW THE MESSAGE"]
  },

  // Slide 2: the growing heart tree (optional - delete this block to use the defaults)
  tree: {
    lines: [
      "Hey you 💕", "Happy Birthday 🎈", "May God bless you 🍀", "And give u many happiness 💞",
      "Just saying... you're pretty awesome 💗", "Sending good vibes and maybe a wink 😉", "Hope u have a great day today 💖"
    ],
    button: "CONTINUE ❤",
    since: "",                 // optional, e.g. "2024-02-14T00:00:00" shows a live "together for X days" counter
    sinceText: "Together for"
  },

  // The message card
  messageTitle: "My Dearest MG,",
  message: "Today isn't just a date on the calendar; it's a celebration of the light you bring into my life. Every moment with you is like a frame from a beautiful movie, and I'm so lucky to be your co-star. May this year be filled with as much magic as you give to everyone around you.",
  memoriesButton: "OUR MEMORIES",

  // Gallery: put photos in the /images folder and list them here (6 looks best, add as many as you like)
  galleryTitle: "Moments in Time",
  photos: [
    { file: "images/1.jpg", caption: "You make my world beautiful" },
    { file: "images/2.jpg", caption: "Our memories are forever" },
    { file: "images/3.jpg", caption: "That smile ❤" },
    { file: "images/4.jpg", caption: "Pure magic" },
    { file: "images/5.jpg", caption: "My favourite person" },
    { file: "images/6.jpg", caption: "Always and forever" }
  ]
};
