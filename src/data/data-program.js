const programNav = {
	items: [
    {
      title: "Program Overview",
      url: "./index.html"
    },
    {
      title: "Keynote Speakers",
      url: "./keynotes.html"
    },
    {
      title: "Workshops",
      url: "./workshops.html"
    },
    {
      title: "Lasting Impact Award",
      url: "./impact.html"
    },
    {
      title: "Birds of a Feather",
      url: "./birds.html"
    },
	]
}

const programOverviewContents = {
  items: [
    {
      title: "Overview",
      content: 
 `
## Program Overview 

Information about the full CSCW program will be posted closer to the conference date.

## Online Proceedings

Papers already accepted to CSCW 2018 through last year's Online First process can be found through the ACM Digital Library [here](https://dl.acm.org/citation.cfm?id=3171581).

 `
 	}
  ]
};

const programKeynoteContents = {
  items: [
    {
      title: "Keynote Speakers",
      content: 
 `
Information about Keynote Speakers will be posted closer to the start of CSCW 2018.
 `
 	}
  ]
};

const programWorkshopContents = {
  items: [
    {
      title: "Workshops",
      content: 
 `
Workshops will be held on Saturday, November 3 and Sunday, November 4. Here is a tentative schedule of workshops. Please follow the workshop organizers’ instructions on their websites for how to submit and participate in the workshop. 

Workshop participants are required to register for their workshops (and pay the corresponding $175 fee per workshop) via the [conference registration website](https://www.regonline.com/registration/Checkin.aspx?EventID=2158075). The CSCW 2018 Organizing Committee cannot exempt or defray these registration fees for organizers or participants. Workshop registrations can be added at any time to existing conference registrations, including on the day of the workshop. There is a registration option for attendees who are only participating in a workshop but not the main conference.

## Saturday workshops

* [The Changing Contours of “Participation” in Data-driven, Algorithmic Ecosystems: Challenges, Tactics, and an Agenda](https://algorithmsworkshop.wixsite.com/mysite/organizers)
* [Conducting Research with Stigmatized Populations: Practices, Challenges and Lessons Learned](https://sites.google.com/view/stigmaresearchworkshop2018/)
* [The Industrial Internet of Things: New Perspectives on HCI and CSCW within Industry Settings](http://iiot.hci-workshop.org/)
* [Latin America as a Place for CSCW Research](https://cscwlatinamerica.wordpress.com/)
* [Navigating the Challenges of Multi-Site Research](https://multisitechallenges.wordpress.com/)
* [Power Struggles in the Digital Economy: Platforms, Workers, and Markets](https://cscw2018digitaleconomy.wordpress.com)
* [Privacy in Context: Critically Engaging with Theory to Guide Privacy Research and Design](https://networkedprivacycscw2018.wordpress.com)

## Sunday workshops 

* [Accessible Voice Interfaces](https://accessiblevoice.wordpress.com/)
* [Collaborative Mixed Reality Games](https://collaborativemr.wordpress.com/)
* [Hybrid events: mediating collocated participation](https://hybridevent.wordpress.com)
* [Rural Computing: Beyond Access and Infrastructure](https://ruralcomputingworkshop.wordpress.com)
* [Social Issues in Personal Informatics: Design, Data, and Infrastructure](https://tmilab.colorado.edu/socialpi/)
* [Sociotechnical Systems of Care](https://hcdd.purdue.edu/sociotechnical-systems-of-care/)
* [Solidarity Across Borders: Navigating Intersections Towards Equity and Inclusion](https://cscwsolidarity.wordpress.com)
`
 	}
  ]
};

const programImpactContents = {
  items: [
    {
      title: "Lasting Impact Award",
      content: 
 `
Information about the CSCW 2018 Lasting Impact Award will be posted closer to the start of CSCW 2018.
 `
 	}
  ]
};

const programBirdsContents = {
  items: [
    {
      title: "Birds of a Feather",
      content: 
 `
Information about 'Birds of a Feather' events will be posted closer to the start of CSCW 2018.
 `
 	}
  ]
};

programOverviewContents.items = programOverviewContents.items.map((n) => {
  n.content = marked(n.content);
  return n;
});

programKeynoteContents.items = programKeynoteContents.items.map((n) => {
  n.content = marked(n.content);
  return n;
});

programWorkshopContents.items = programWorkshopContents.items.map((n) => {
  n.content = marked(n.content);
  return n;
});

programImpactContents.items = programImpactContents.items.map((n) => {
  n.content = marked(n.content);
  return n;
});

programBirdsContents.items = programBirdsContents.items.map((n) => {
  n.content = marked(n.content);
  return n;
});