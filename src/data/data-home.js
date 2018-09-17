const homeHeader = {
  h1: "The 21st ACM Conference on Computer-Supported Cooperative Work and Social Computing",
  h2: "November 3rd-7th, 2018",
  highlight: "New York City's Hudson River (Jersey City)"
};

const homeWelcome = {
  title: "Welcome to CSCW 2018!",
  content: "CSCW is the premier venue for research in the design and use of technologies that affect groups, organizations, communities, and networks. Bringing together top researchers and practitioners, CSCW explores the technical, social, material, and theoretical challenges of designing technology to support collaborative work and life activities. Join us as we explore how technologies can enable new ways of living and working together."
};

const homeImportantNow = {
  title: "Announcements",
  content: [
      "The conference program will be published soon, with the main conference taking place from Monday Nov 5th to Wednesday Nov 7th.",
      "We'd like to congratulate Erin Bradner, Steve Whittaker, and Bonnie Nardi on their 2018 CSCW Lasting Impact Award for their 2000 paper <a href='https://dl.acm.org/citation.cfm?id=358975'>Interaction and Outeraction: Instant Messaging in Action</a>!",
      "Sign up to the mailing list below to be the first to receive new information about CSCW 2018 as it’s released."
  ]
};

const homeVenue = {
  title: "Location and Venue: New York City",
  content: [
      ""
  ]
};

const homeDeadlines = {
  title: "Upcoming Deadlines",
  content: [
    
  "<del>Sept 10, 2018</del> <b>Sept 17, 2018</b>: Early registration deadline",
  "<b>September 2018</b>: Multiple opportunities to participate through <a href='https://cscw.acm.org/2018/program/workshops.html'>workshop submissions</a>.",
  "<b>Oct 25, 2018</b>: Advance registration deadline",
  "<b>November 3-4, 2018</b>: CSCW 2018 workshop and doctoral consortium",
  "<b>November 5-7, 2018</b>: Main conference"
  ]
};

const homeNews = {
  title: "New for 2018",
  content: [

    {
      q: "What will happen with papers accepted in the 2017 Online First deadline?",
      a: "<p>Accepted papers from the Online First deadline were available “Online First” a year ahead of the conference, in fall 2017. The regular conference submission deadline, in spring 2018, will result in papers published just ahead of the actual conference."
        + "</p> <p>"
    },
    {
      q: "How will Online First accepted papers be presented at the conference?",
      a: "<p>Papers accepted in the 2017 Online First deadline will be presented with full recognition as CSCW regular track full papers, with an oral presentation at the conference. Online First papers will be treated equally to papers accepted in the spring 2018 (the final, regular) conference deadline, including eligibility for best paper awards, archival status, and citation style. "
        + "</p> <p>"
    },
    {
      q: "What is PACM, and what does it mean for CSCW?",
      a: "<p>PACM (Proceedings of the ACM) is shorthand for a journal series -- attached mainly to ACM special interest groups -- that will change our publication format to something more closely resembling a journal article. In general, the paper submission process and assessment for CSCW will remain much the same. The main difference lies in how the work will be referenced."
        + "</p> <p>"
        + "Most interesting is that automatic indexing services like ISI will read our work as a journal, not as a conference proceedings. This should not only heighten the visibility of work of authors in this community, but also allow for better comparability with fields outside of Computer Science. </p>"
        + "</p> <p>"
        + "It is the intention to move all future CSCW conferences to the PACM publishing model. </p>"
    },
    {
      q: "Why did CSCW move to the Fall?",
      a: "<p>This change has been considered over many years. Prior to 2010, CSCW occurred in the Fall, moving to the Spring when it became an annual conference. The Spring time frame was problematic, however, for two reasons:"
        + "<ol>"
        + "<li> There was too long a gap between when papers were submitted to the conference and when they were presented. Because the community wanted paper decisions before the CHI deadline, there was often a 5-month gap between final paper decisions and presentations, and a 9-month gap between paper submission and presentation. </li>"
        + "<li> Through a fairly broad community survey, we have tried to assess the impact of moving to the Fall. Obvious concerns have included the overlap not only with the ECSCW and GROUP conferences, but also with UIST, UBICOMP, HCOMP, and RecSYS, among other Fall conferences. However, it turned out that our biggest overlap was with CHI, and that having CSCW and CHI in the same general time period was problematic for many. </li>"
        + "</ol> <p>"
        + "It was the combination of the timing of submissions and representation, as well as the overlap with CHI, that drove the steering committee to present the change to a Fall timeline, and to receive enough positive feedback to make the change."
        + "</p>"
    }
  ]
};

const homeCfp = {
  title: "Call for participation",
  content: marked(
    "CSCW invites submission to a wide range of venues including papers, posters, demos, panels, workshops, and a doctoral consortium. The scope of CSCW spans socio-technical domains including work, home, education, healthcare, the arts, leisure, and entertainment. The conference seeks novel research results or new ways of thinking about, studying, or supporting shared activities in these and related areas. We are no longer accepting paper submissions at this time. Please visit [this page](/2018/submit/) to find other ways to participate in the conference."
  )
};

const homeSponsors = {
  title: "Sponsors",
  content:[
    {
      title: "Champion sponsors",
      items:[
        "./assets/logo-facebook.png"
      ]
    },
    {
      title: "Contributors",
      items:[
        "./assets/logo-ibm.jpg"
      ]
    }
  ]
};

//   content: marked(
// `    
// ### Champion Sponsors:
// Facebook

// ### Contributors:
// IBM

// #### To Join 
// To inquire about sponsorships see [this page](https://cscw.acm.org/2018/sponsors/) or email [sponsors2018@cscw.acm.org](sponsors2018@cscw.acm.org).
// `
//   )
// };

const homeCommittee = {
  title: "Organizing committee",
  content: [
    {
      title: "General chairs",
      names:[
        "Vanessa Evers (University of Twente)",
        "Mor Naaman (Cornell Tech)"
      ]
    },
    {
      title: "Paper chairs",
      names: [
        "Geraldine Fitzpatrick (Vienna University of Technology)",
        "Karrie Karahalios (University of Illinois)",
        "Airi Lampinen (Stockholm University)",
        "Andrés Monroy-Hernández (Snap, Inc.)"
      ]
    }
  ]
};

homeNews.content = homeNews.content.map((n) => {
  n.a = marked(n.a);
  return n;
});

// homeDeadlines.content = homeDeadlines.content.map((n) => {
//   n.a = marked(n.a);
//   return n;
// });

homeImportantNow.content = homeImportantNow.content.map((n) => {
  n = marked(n);
  return n;
});
