const committeeChairs = [
  {
    title: "General chairs",
    names: [
      "Vanessa Evers",
      "Mor Naaman"
    ],
    email: "chairs2018@cscw.acm.org"
  },
  {
    title: "Paper chairs",
    names: [
      "Karahalios, Karrie",
      "Geraldine Fitzpatrick"
    ],
    email: "papers2018@cscw.acm.org"
  },
  {
    title: "Workshop co-chairs",
    names: [
      "Chiara Rossitto",
      "Brian Keegan"
    ],
    email: "workshops2018@cscw.acm.org"
  },
  {
    title: "Posters co-chairs",
    names: [
      "Ido Guy",
      "Xianghua (Sharon) Ding"
    ],
    email: "posters2018@cscw.acm.org"
  },
  {
    title: "Demos co-chairs",
    names: [
      "Malte Jung",
      "Naomi Yamashita"
    ],
    email: "demos2018@cscw.acm.org"
  },
  {
    title: "Doctoral Colloquium Co-Chairs",
    names: [
      "Kate Starbird",
      "Astrid Weiss"
    ],
    email: "dc2018@cscw.acm.org"
  },
  {
    title: "Panels co-chairs",
    names: [
      "Airi Lampinen",
      "TBD"
    ],
  },
  {
    title: "Treasurers",
    names: [
      "Jeremy Birnholtz",
      "Matt Bietz"
    ],
    email: "treasurers2018@cscw.acm.org"
  },
  {
    title: "Communication and Outreach co-chairs",
    names: [
      "Casey Fiesler",
      "Yuvi Panda"
    ],
    email: "comm2018@cscw.acm.org"
  },
  {
    title: "Proceedings and Publications co-chairs",
    names: [
      "Alyson Young (IUPUI)",
      "TBD"
    ],
  },
  {
    title: "Local Arrangements co-chairs",
    names: [
      "Victoria Sosik",
      "TBD"
    ],
  },
  {
    title: "Design and Web co-chairs",
    names: [
      "Sanjay Kairam (Twitch)",
      "Hannah Xue (Cornell Tech)"
    ],
    email: "web2018@cscw.acm.org"
  },
  {
    title: "Student Volunteer Co-Chairs",
    names: [
      "Xiao Ma",
      "Christina Zaga"
    ],
    email: "sv2018@cscw.acm.org"
  }
].map((c) => {
  c.names = c.names.map((n) => {
    n = marked(n);
    return n;
  });
  return c;
});
