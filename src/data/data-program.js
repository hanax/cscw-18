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
Information about Workshops will be posted closer to the start of CSCW 2018.
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