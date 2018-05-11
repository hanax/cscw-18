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

CSCW 2018 will provide recognition and related benefits to sponsors in exchange for their financial support. The principal benefit is public acknowledgment of sponsors in the opening and closing plenary sessions, on the conference website, in the proceedings and final program, and on tote bags. The conference will also acknowledge our more generous sponsors for their contribution at social events including receptions, the conference banquet/party, coffee breaks, and student social events. Sponsor contribution to these events is noted in the conference program and on signs at the events. The conference will also support and coordinate with any sponsors that want to host their own social event for all conference participants.

Sponsors are given the opportunity to provide information (e.g., brochures) directly to CSCW attendees. Higher level sponsors are invited to present demonstrations of their relevant technology at the conference. CSCW 2018 will also accommodate sponsors interested in recruiting conference attendees. Sponsors may also receive complimentary CSCW 2018 registrations.

Sponsors contribute to the CSCW conference community in myriad ways, including funding. We recognize the valuable contributions of our sponsors, and some CSCW participants in one year become researchers at our sponsors the next. We are ready to discuss how you would like to contribute or benefit from the conference.

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