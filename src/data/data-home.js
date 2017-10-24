const homeHeader = {
  h1: "The 21st ACM Conference on Computer-Supported Cooperative Work and Social Computing",
  h2: "November 3-7, 2018",
  highlight: "New York City's Hudson River (Jersey City)"
};

const homeWelcome = {
  title: "Welcome to CSCW 2018!",
  content: "CSCW is the premier venue for research in the design and use of technologies that affect groups, organizations, communities, and networks. Bringing together top researchers and practitioners, CSCW explores the technical, social, material, and theoretical challenges of designing technology to support collaborative work and life activities. Join us as we explore how technologies can enable new ways of living and working together."
};

const homeVenue = {
  title: "Location and Venue: Learn More"
};

const homeImportantNow = {
  title: "What\'s important now?",
  content: [
    "The official venue and dates for CSCW 2018 have been announced, see you in New York in 2018!",
    "The next opportunity to submit to CSCW 2018 will be in Spring 2018. Sign up to the mailing list below to be the first to know."
  ]
};

const homeNews = {
  title: "New for 2018",
  content: [
    {
      q: "What will happen with papers submitted for the 2017 Online First deadline?",
      a: "<p>The papers will go through a normal CSCW review cycle, with accepted papers to be published Online First in fall of 2017. The next submission deadline would be the regular conference submission, in spring 2018."
        + "</p> <p>"
    },
    {
      q: "How will Online First accepted papers be presented at the conference?",
      a: "<p>Papers accepted in the 2017 Online First deadline will be presented with full recognition as CSCW regular track full papers, with an oral presentation at the conference. Based on the final conference size constraints, Online First oral presentations may be shorter, perhaps significantly, in which case the presentations will be augmented by additional exposure such as a dedicated poster session. In all other ways, Online First papers will be treated equally to papers accepted in the spring 2018 (the final, regular) conference deadline, including eligibility for best paper awards, archival status, and citation style."
        + "</p> <p>"
    },
    {
      q: "What is PACM, and what does it mean for CSCW?",
      a: "<p>PACM (Proceedings of the ACM) is shorthand for a journal series -- attached mainly to ACM special interest groups -- that will change our publication format to something more closely resembling a journal article. In general, the paper submission process and assessment ofr CSCW will remain much the same. The main difference lies in how the work will be referenced."
        + "</p> <p>"
        + "Most interesting is that automatic indexing services like ISI will read our work as a journal, not as a conference proceedings. This should not only heighten the visibility of work of authors in this community, but also allow for better comparability with fields outside of Computer Science. </p>"
        + "</p> <p>"
        + "It is the intention to move all future CSCW conferences to the PACM publishing model. </p>"
    },
    {
      q: "Why did CSCW move to the Fall?",
      a: "<p>This change has been considered over many years. Prior to 2010, CSCW occurred in the Fall, moving to the Spring when it became an annual conference. The Spring time frame was problematic, however, for two reasons:"
        + "<ol>"
        + "<li> There was too long a gap between when papers were submitted to the conference and when they were presented. Because the community wanted paper decisions before the CHI deadline, there was often a 5-month gap between final paper decisions and presentations, and a 9-month gap between paper submissio and presentation. </li>"
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
    "CSCW invites submission to a wide range of venues including papers, posters, demos, panels, workshops, and a doctoral consortium. The scope of CSCW spans socio-technical domains including work, home, education, healthcare, the arts, leisure, and entertainment. The conference seeks novel research results or new ways of thinking about, studying, or supporting shared activities in these and related areas. We are currently accepting paper submissions for an early, Online First paper deadline in April 2017. More info on [this page](submit.html)."
  )
};

const homeSponsors = {
  title: "Call for sponsors",
  content: marked(
    "Sponsorships are a unique opportunity to support the CSCW conference including student attendees, and benefit the research community. Moreover, sponsorships help organizations be recognized and gain visibility in the community, creating ties and providing a backdrop for recruitment. Sponsorship benefits include acknowledgment in conference materials, website, and presentations; support in hosting special events for all conference participants; and opportunities to provide information and demonstrations directly to CSCW attendees. More information about sponsorship level, starting at $5000, is coming soon; email [chairs2018@cscw.acm.org](mailto:chairs2018@cscw.acm.org) for details." 
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
        "Andrés Monroy-Hernández (Microsoft Research)"
      ]
    }
  ]
};

homeNews.content = homeNews.content.map((n) => {
  n.a = marked(n.a);
  return n;
});

homeImportantNow.content = homeImportantNow.content.map((n) => {
  n = marked(n);
  return n;
});
