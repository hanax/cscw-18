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
Sponsorships are crucial to the financial health of CSCW conferences, and the assistance provided by our sponsors is greatly appreciated. The expense of holding the CSCW conference is paid from two sources of income: registration fees paid by the attendees and sponsorships from corporations, universities, and other institutions. Sponsors’ funds allow CSCW conferences to hold down the cost of registration, especially for students.

CSCW 2018 will provide recognition and related benefits to sponsors in exchange for their financial support. The principal benefit is public acknowledgment of sponsors in the opening and closing plenary sessions, on the conference website, in the proceedings and final program. The conference will also acknowledge our more generous sponsors for their contribution at social events including receptions, the conference banquet/party, coffee breaks, and student social events. Sponsor contribution to these events is noted in the conference program and on signs at the events. The conference will also support and coordinate with any sponsors that want to host their own social event for all conference participants.

Sponsors are given the opportunity to provide information (e.g., brochures) directly to CSCW attendees. Higher level sponsors are invited to present demonstrations of their relevant technology at the conference. CSCW 2018 will also accommodate sponsors interested in recruiting conference attendees. Sponsors may also receive complimentary CSCW 2018 registrations.

Sponsors contribute to the CSCW conference community in myriad ways, including funding. We recognize the valuable contributions of our sponsors, and some CSCW participants in one year become researchers at our sponsors the next. We are ready to discuss how you would like to contribute or benefit from the conference.

Please contact the Sponsorship co-chairs at [sponsors2018@cscw.acm.org](mailto:sponsors2018@cscw.acm.org) about becoming a sponsor for CSCW 2018.

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
Please contact the Sponsorship co-chairs at [sponsors2018@cscw.acm.org](mailto:sponsors2018@cscw.acm.org) about becoming a sponsor of CSCW 2018.

CSCW 2018 offers four levels of sponsorship: Friend, Contributor, Benefactor, and Champion. The standard benefits for each level are listed below. While these serve as a guideline, we understand that sponsors have different goals for their conference experience and consequently benefits can be tailored to meet the needs of sponsors.

**Champions ($15,000 or greater contribution) **

Champion sponsors receive the same benefits offered to Benefactors, plus:
* You will be acknowledged as a Champion during the opening and closing plenary sessions of the conference.
* Your conference name or logo will be listed in the conference proceedings and the conference program as a Champions
* In addition to being recognized as the exclusive sponsors of a conference social event, all Champions will be recognized as sponsors of the conference banquet. Champions may also sponsor events at the banquet site.
* You will receive three complimentary conference registrations.

**Benefactors ($10,000 or greater contribution)**

Benefactors receive the same benefits offered to Contributors, plus:
* You will be acknowledged as a Benefactor during the opening and closing plenary sessions of the conference.
* Your conference name or logo will be listed in the conference proceedings and the conference program as a Benefactor.
* You may provide promotional material that will be given to all conference attendees.
* You will be invited to participate in the Conference Demonstration event, and space will be set aside for you to set up a booth showcasing your company's products, services, or innovative research.
* You will be invited to be recognized as the exclusive sponsor of a conference social event. The events available for Benefactors are: the welcome reception, the Demo/Poster reception, Student Volunteer lunches, Student Volunteer reception, the Doctoral Colloquium dinner, and coffee breaks.
* You will receive two complimentary conference registrations.
 
**Contributors ($5,000 or greater contribution)**

Contributors receive the same benefits offered to Friends, plus:
* You will be acknowledged as a Contributor during the opening and closing plenary sessions of the conference.
* Your conference name or logo will be listed in the conference proceedings and the conference program as a Contributor.
* You will receive one complimentary conference registration.

**Friends (contribution of less than $5,000)**

* You will be acknowledged as a Friend during the opening and closing plenary sessions of the conference.
* Your logo will appear on the conference sponsors web page, with a link to your home page, if desired.
* Your conference name or logo will be listed in the conference proceedings and the conference program as a Friend.`
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

sponsorOverviewContents.items = sponsorOverviewContents.items.map((n) => {
  n.content = marked(n.content);
  return n;
});

sponsorBenefitsContents.items = sponsorBenefitsContents.items.map((n) => {
  n.content = marked(n.content);
  return n;
});