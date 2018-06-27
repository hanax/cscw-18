const sponsorNav = {
  items: [
    {
      title: "Overview",
      url: "./index.html"
    },
    {
      title: "Sponsor Benefits",
      url: "./benefits.html"
    }
  ]
};

const sponsorOverviewContents = {
  items: [
    {
      title: "Sponsors",
      content: 
`
Please contact the Sponsorship co-chairs at [sponsors2018@cscw.acm.org](mailto:sponsors2018@cscw.acm.org) about becoming a sponsor of CSCW 2018.

CSCW 2018 offers four levels of sponsorship: Friend, Contributor, Benefactor, and Champion. The standard benefits for each level are listed below. While these serve as a guideline, we understand that sponsors have different goals for their conference experience and consequently benefits can be tailored to meet the needs of sponsors.

**Friends (contribution of less than $5,000)**
* You will be acknowledged as a Friend during the opening and closing plenary sessions of the conference.
*Your logo will appear on the CSCW 2017 conference tote bag and the conference sponsors web page, with a link to your home page, if desired.
* Your conference name or logo will be listed in the conference proceedings and the conference program as a Friend.

**Contributors ($5,000 or greater contribution)**
Contributors receive the same benefits offered to Friends, plus:
* You will be acknowledged as a Contributor during the opening and closing plenary sessions of the conference.
* Your conference name or logo will be listed in the conference proceedings and the conference program as a Contributor.
* You will receive one complimentary conference registration.

**Benefactors ($10,000 or greater contribution)**
Benefactors receive the same benefits offered to Contributors, plus:
* You will be acknowledged as a Benefactor during the opening and closing plenary sessions of the conference.
* Your conference name or logo will be listed in the conference proceedings and the conference program as a Benefactor.
* You may provide promotional material that will be given to all conference attendees.
* You will be invited to participate in the Conference Demonstration event, and space will be set aside for you to set up a booth showcasing your company's products, services, or innovative research.
* You will be invited to be recognized as the exclusive sponsor of a conference social event. The events available for Benefactors are: the welcome reception, the Demo/Poster reception, Student Volunteer lunches, Student Volunteer reception, the Doctoral Colloquium dinner, and coffee breaks.
* You will receive two complimentary conference registrations.

**Champions ($15,000 or greater contribution) **

Champion sponsors receive the same benefits offered to Benefactors, plus:
* You will be acknowledged as a Champion during the opening and closing plenary sessions of the conference.
* Your conference name or logo will be listed in the conference proceedings and the conference program as a Champions
* In addition to being recognized as the exclusive sponsors of a conference social event, all Champions will be recognized as sponsors of the conference banquet. Champions may also sponsor events at the banquet site.
* You will receive three complimentary conference registrations.
`
    }, {
      title: "Sponsorship Co-Chairs",
      content:
`
N. Sadat Shami (IBM)
Nir Grinberg (Harvard/Northeastern)
[sponsors2018@cscw.acm.org](mailto:sponsors2018@cscw.acm.org)
`
    }
  ]
};

const sponsorBenefitsContents = {
  items: [
    {
      title: "Sponsor Benefits",
      content: 
`
Please contact the Sponsorship co-chairs at [sponsors2018@cscw.acm.org](sponsors2018@cscw.acm.org) about becoming a sponsor for CSCW 2018.
`
    }, {
      title: "Sponsorship Co-Chairs",
      content:
`
N. Sadat Shami (IBM)
[sponsors2018@cscw.acm.org](mailto:sponsors2018@cscw.acm.org)
`
    }
  ]
};

sponsorOverviewContents.items = sponsorOverviewContents.items.map((n) => {
  n.content = marked(n.content);
  return n;
});

sponsorBenefitsContents.items = sponsorBenefitsContents.items.map((n) => {
  n.content = marked(n.content);
  return n;
});