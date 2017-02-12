const homeHeader = {
  h1: "The 21st ACM Conference on Computer-Supported Cooperative Work and Social Computing",
  h2: "Oct/Nov 2018, Location TBD"
};

const homeWelcome = {
  title: "Welcome to CSCW 2018!",
  content: "CSCW is the premier venue for presenting research in the design and use of technologies that affect groups, organizations, communities, and networks. Bringing together top researchers and practitioners from academia and industry, CSCW explores the technical, social, material, and theoretical challenges of designing technology to support collaborative work and life activities. CSCW welcomes a diverse range of topics and research methodologies. Studies often involve the development and application of novel technologies and/or ethnographic studies that inform design practice or theory. Joins us as we explore how technologies can enable new ways of living and working together."
};

const homeImportantNow = {
  title: "What\'s important now?",
  content: [
    {
      q: "Why did CSCW move to the Fall?",
      a: "<p>This change has been considered over many years. Prior to 2010, CSCW occurred in the Fall, moving to the Spring when it became an annual conference. The Spring time frame was problematic, however, for two reasons:"
        + "<ol>"
        + "<li> There was too long a gap between when papers were submitted to the conference and when they were presented. Because the community wanted paper decisions before the CHI deadline, there was often a 5-month gap between final paper decisions and presentations, and a 9-month gap between paper submissio and presentation. </li>"
        + "<li> Through a fairly broad community survey, we have tried to assess the impact of moving to the Fall. Obvious concerns have included the overlap not only with the ECSCW and GROUP conferences, but also with UIST, UBICOMP, HCOMP, and RecSYS, among other Fall conferences. However, it turned out that our biggest overlap was with CHI, and that having CSCW and CHI in the same general time period was problematic for many. </li>"
        + "</ol> <p>"
        + "It was the combination of the timing of submissions and representation, as well as the overlap with CHI, that drove the steering committee to present the change to a Fall timeline, and to receive enough positive feedback to make the change."
        + "</p>"
    },
    {
      q: "What will happen with papers submitted in 2017?",
      a: "<p>The papers will go through a normal CSCW review cycle, with accepted papers to be published Online First in fall of 2017."
        + "</p> <p>"
    },
    {
      q: "What is PACM, and what does it mean for CSCW?",
      a: "<p>PACM (Proceedings of the ACM) is shorthand for a journal series -- attached mainly to ACM special interest groups -- that will change our publication format to something more closely resembling a journal article. In general, the paper submission process and assessment ofr CSCW will remain much the same. The main difference lies in how the work will be referenced."
        + "</p> <p>"
        + "Most interesting is that automatic indexing services like ISI will read our work as a journal, not as a conference proceedings. This should not only heighten the visibility of work of authors in this community, but also allow for better comparability with fields outside of Computer Science. </p>"
        + "</p> <p>"
        + "It is the intention to move all future CSCW conferences to the PACM publishing model. </p>"
    }
  ]
};

const homeNews = {
  title: "News",
  content: [
    "CSCW is moving to a fall schedule. The CSCW 2018 conference will take place around early November 2018, most likely in the New York area.",
    "To bridge the year-and-a-half gap between CSCW 2017 and CSCW 2018, we will have two submission deadlines in spring 2017 and spring 2018.",
    "The spring 2017 Online First deadline is Thursday April 27, with abstracts due April 20. First-round reviews will be sent on June 12th; and revisions will be due July 10th."
  ]
};

const homeCfp = {
  title: "Call for participation",
  content: marked(
    "CSCW invite submission to a wide range of venues including papers, posters, demos, panels, workshops, and a doctoral consortium. The scope of CSCW spans socio-technical domains including work, home, education, healthcare, the arts, leisure, and entertainment. The conference seeks novel research results or new ways of thinking about, studying, or supporting shared activities in these and related areas. We are currently accepting paper submissions for an early, Online First, deadline. See more information on [this page]('submit.html')."
  )
};

const homeSponsors = {
  title: "Call for sponsors",
  content: marked(
    "placeholder"
  )
};

const homeCommittee = {
  title: "Organizing committee",
  content: [
    {
      name: "Vanessa Evers"
    },
    {
      name: "Mor Naaman"
    }
  ]
};

homeImportantNow.content = homeImportantNow.content.map((n) => {
  n.a = marked(n.a);
  return n;
});
