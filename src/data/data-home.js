const homeHeader = {
  h1: "The 21st ACM Conference on Computer-Supported Cooperative Work and Social Computing",
  h2: "November 3-7, 2018",
  highlight: "New York City's Hudson River (Jersey City)"
};

const homeWelcome = {
  title: "Welcome to CSCW 2018!",
  content: "CSCW is the premier venue for research in the design and use of technologies that affect groups, organizations, communities, and networks. Bringing together top researchers and practitioners, CSCW explores the technical, social, material, and theoretical challenges of designing technology to support collaborative work and life activities. Join us as we explore how technologies can enable new ways of living and working together."
};

const homeImportantNow = {
  title: "What\'s important now?",
  content: [
      "First-round notifications for paper submissions will be available June 15th, with revised papers due July 11th. Head to the [paper submission page](/submit/papers.html) for details.",
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
    "<b>June 15, 2018</b>: <a href='./submit/papers.html'>Papers First-Round Notifications</a>",
    "<b>June 16, 2018</b>: <a href='./volunteer/sv.html'>SV Lottery Deadline</a>",
    "<b>June 27, 2018</b>: <a href='./submit/demos.html'>Interactive Demo Submissions Due</a>",
    "<b>June 27, 2018</b>: <a href='./submit/panels.html'>Panel Submissions Due</a>",
    "<b>July 1, 2018</b>: <a href='./submit/posters.html'>Poster Submissions Due</a>",
    "<b>July 27, 2018</b>: <a href='./submit/workshops.html'>Workshop Proposal Submissions Due</a>"
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
    "CSCW invites submission to a wide range of venues including papers, posters, demos, panels, workshops, and a doctoral consortium. The scope of CSCW spans socio-technical domains including work, home, education, healthcare, the arts, leisure, and entertainment. The conference seeks novel research results or new ways of thinking about, studying, or supporting shared activities in these and related areas. We are currently accepting paper submissions for an early, Online First paper deadline in April 2017. More info on [this page](/2018/submit/)."
  )
};

const homeSponsors = {
  title: "Call for sponsors",
  content: marked(
    "Sponsorships are a unique opportunity to support the CSCW conference including student attendees, and benefit the research community. Moreover, sponsorships help organizations be recognized and gain visibility in the community, creating ties and providing a backdrop for recruitment. Sponsorship benefits include acknowledgment in conference materials, website, and presentations; support in hosting special events for all conference participants; and opportunities to provide information and demonstrations directly to CSCW attendees. More information about sponsorship level is coming soon; email [sponsors2018@cscw.acm.org](mailto:sponsors2018@cscw.acm.org) for details." 
  )
};

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
