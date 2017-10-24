const committeeChairs = [
  {
    title: "General chairs",
    names: [
      "Vanessa Evers (University of Twente)",
      "Mor Naaman (Cornell Tech)"
    ],
    email: "chairs2018@cscw.acm.org"
  },
  {
    title: "Paper chairs",
    names: [
      "Karrie Karahalios (University of Illinois)",
      "Geraldine Fitzpatrick (Vienna University of Technology)",
      "Andrés Monroy-Hernández (Snap, Inc.)"
    ],
    email: "papers2018@cscw.acm.org"
  },
  {
    title: "Workshop co-chairs",
    names: [
      "Chiara Rossitto (Stockholm University)",
      "Brian Keegan (University of Colorado)"
    ],
    email: "workshops2018@cscw.acm.org"
  },
  {
    title: "Posters co-chairs",
    names: [
      "Ido Guy (eBay)",
      "Xianghua (Sharon) Ding (Fudan University)"
    ],
    email: "posters2018@cscw.acm.org"
  },
  {
    title: "Demos co-chairs",
    names: [
      "Malte Jung (Cornell University)",
      "Naomi Yamashita (NTT Communication Science Labs)"
    ],
    email: "demos2018@cscw.acm.org"
  },
  {
    title: "Doctoral Colloquium Co-Chairs",
    names: [
      "Kate Starbird (University of Washington)",
      "Astrid Weiss (Vienna University of Technology)"
    ],
    email: "dc2018@cscw.acm.org"
  },
  {
    title: "Panels co-chairs",
    names: [
      "Airi Lampinen (Stockholm University)",
      "Tawanna Dillahunt (University of Michigan)"
    ],
    email: "panels2018@cscw.acm.org"
  },
  {
    title: "Treasurers",
    names: [
      "Jeremy Birnholtz (Northwestern)",
      "Matt Bietz (UC Irvine)"
    ],
    email: "treasurers2018@cscw.acm.org"
  },
  {
    title: "Communication and Outreach co-chairs",
    names: [
      "Casey Fiesler (University of Colorado)",
      "Alex Leavitt (Facebook, Inc.)"
    ],
    email: "comm2018@cscw.acm.org"
  },
  {
    title: "Proceedings and Publications co-chairs",
    names: [
      "Mauro Cherubini (University of Lausanne)",
      "Andrew Miller (IUPUI)",
      "Alyson Young (IUPUI)"
    ],
    email: "pubs2018@cscw.acm.org"
  },
  {
    title: "Local Arrangements co-chairs",
    names: [
      "Victoria Sosik (Google)",
      "Joelle Alcaidinho (Intel)"
    ],
    email: "local2018@cscw.acm.org"
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
    title: "Sponsorship co-chairs",
    names: [
      "N. Sadat Shami (IBM)"
      // "TBD"
    ],
  },
  {
    title: "Diversity and Inclusion Co-Chairs",
    names: [
      "Niloufar Salehi (Stanford)",
      "Hilda Tellioglu (Vienna University of Technology)"
    ],
    email: "diversity2018@cscw.acm.org"
  },
  {
    title: "Student Volunteer co-Chairs",
    names: [
      "Xiao Ma (Cornell Tech)",
      "Cristina Zaga (University of Twente)"
    ],
    email: "sv2018@cscw.acm.org"
  },
  {
    title: "Student Reviewer Mentoring co-Chairs",
    names: [
      "Michael Muller (IBM Research)",
      "Stephan Lukosh (T.U. Delft)"
    ],
    email: "studentmentoring2018@cscw.acm.org"
  }
].map((c) => {
  c.names = c.names.map((n) => {
    n = marked(n);
    return n;
  });
  return c;
});
