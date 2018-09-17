const attendNav = {
  items: [
    {
      title: "Overview",
      url: "./index.html"
    },
    {
      title: "Conference Registration",
      url: "./registration.html"
    },
    {
      title: "Hotel",
      url: "./hotel.html"
    },
    {
      title: "Student Travel Grants",
      url: "./studenttravel.html"
    },
    {
      title: "Visas",
      url: "./visas.html"
    },
    {
      title: "Travel & Transportation",
      url: "./travel.html"
    },
    {
      title: "Local Resources",
      url: "./localresources.html"
    },
    {
      title: "Parent Resources",
      url: "./parentresources.html"
    }
  ]
};

const attendOverviewContents = {
  items: [
    {
      title: "Overview",
      content: 
`
CSCW 2018 will take place at the Hyatt Regency Jersey City [reserve here](https://book.passkey.com/gt/213270399?gtid=570359b68372dacbd03f45b4fdbf629c)) on the Hudson River, located in Jersey City, New Jersey, minutes away from Manhattan via train or ferry. For a general overview of the New York / New Jersey area where the conference will be held, please visit the [Location](../location.html) page. 

**To get rooms at the discounted conference rate, please make sure to reserve using [this link](https://book.passkey.com/gt/213270399?gtid=570359b68372dacbd03f45b4fdbf629c). For more information about the hotel, [see here](https://jerseycity.regency.hyatt.com/).**

For questions about specific aspects of attending the conference, please consult the links in the sidebar.

For other questions not answered on this page, please contact the Local Arrangements Co-Chairs at [local2018@cscw.acm.org](mailto:local2018@cscw.acm.org).
`
    },
    { 
    title: "Local Arrangements Co-Chairs",
    content:
`
Victoria Sosik (Google)
Joelle Alcaidinho (Intel)
[local2018@cscw.acm.org](mailto:local2018@cscw.acm.org)
`
    }
  ]
};

const attendRegistrationContents = {
  items: [
    {
      title: "Important Dates",
      content: 
`
* **Sept 17, 2018**: Early registration deadline
* **Oct 25, 2018**: Advance registration deadline

To register, visit the CSCW 2018 [conference registration page](https://www.regonline.com/cscw18). Rates can be found below. Please note that Early registration rates are available through September 17 and Advance registration rates through October 25. You can register for a workshop only if you have successfully applied for permission to participate in the workshop.

A limited number of press passes are available. Email [chairs2018@cscw.acm.org](mailto:chairs2018@cscw.acm.org) to request a pass. 
`
    },
    {
      title: "Registration Fees",
      content:
`
Rates can be found below. 

Please note that Early registration rates are available through September 17 and Advance registration rates through October 25. You can register for a workshop only if you have successfully applied for permission to participate in the workshop.
`
    }
  ]
};

const attendRegTableContents = {
  tables: [
    {
      section: "Conference Fees",
      header: [
        {
          early: "Early Registration (through 9/17)",
          advance: "Advance Registration (9/18 - 10/25)",
          late: "Late/Onsite Registration (10/26 on)"
        }
      ],
      rates: [
        {
          name: "Student",
          early: "$275",
          advance: "$345",
          late: "$395"
        },
        {
          name: "One-Day*",
          early: "$375",
          advance: "$400",
          late: "$425"
        },
        {
          name: "ACM/SIG Members",
          early: "$695",
          advance: "$795",
          late: "$895"
        },
        {
          name: "Non-ACM/SIG Members",
          early: "$795",
          advance: "$895",
          late: "$995"
        },
        {
          name: "Emeritus (60+, Unemployed)",
          early: "$275",
          advance: "$345",
          late: "$395"
        }
      ]
    },
   {
      section: "Workshop Fees",
      header: [
        {
          early: "Early Registration (through 9/17)",
          advance: "Advance Registration (9/18 - 10/25)",
          late: "Late/Onsite Registration (10/26 on)"
        }
      ],
      rates: [
        {
          name: "ACM/SIG Member Workshop (w/ Conference)",
          early: "$175",
          advance: "$175",
          late: "$175"
        },
        {
          name: "ACM/SIG Non-Member Workshop (w/ Conference)",
          early: "$200",
          advance: "$200",
          late: "$200"
        },
        {
          name: "Student Workshop Registration (w/ Conference)",
          early: "$150",
          advance: "$150",
          late: "$150"
        },
        {
          name: "Workshop Only (no Conference)",
          early: "Add $100+ to above fee schedule",
          advance: "",
          late: ""
        }
      ]
    }
  ],
  footnote: "(*) One-day registrations do not include conference banquet on Tuesday ($110)"
}

const attendHotelContents = {
  items: [
    {
      title: "Conference Hotel",
      content: 
`
CSCW 2018 will be held at the Hyatt Regency Jersey City (reserve via [this link](https://book.passkey.com/gt/213270399?gtid=570359b68372dacbd03f45b4fdbf629c)) on the Hudson located in Jersey City, New Jersey, minutes away from Manhattan via train or ferry.

Hyatt Regency Jersey City
2 Exchange Place, Jersey City, NJ 07302
+1 (201).469.1234

To get rooms at the discounted conference rate, **please make sure to reserve using [this link](https://book.passkey.com/gt/213270399?gtid=570359b68372dacbd03f45b4fdbf629c) before October 4th, 2018**. We strongly encourage attendees to book early in order to secure this discounted rate as the number of rooms is limited. More information about the Conference Hotel [can be found here](https://jerseycity.regency.hyatt.com/).
`
    },
  ]
};

const attendVisasContents = {
  items: [
    {
      title: "Overview",
      content:
`
CSCW 2018 attendees may be affected by the Executive Order signed by the President of the United States in 2017, banning most people from entering the U.S. if they hold passports from a specific set of countries. We will accommodate remote participation by any presenting author denied entry for this reason, and will attempt to accommodate non-presenting attendees as well. 

See Special Notice below for details.
`
    },
    {
      title: "General Visa Information",
      content: 
`
The sites [http://www.unitedstatesvisas.us/](http://www.unitedstatesvisas.us/) and [http://travel.state.gov](http://travel.state.gov) have information about obtaining a visa for those traveling to the United States. These sites have links to websites for U.S. embassies and consulates worldwide. The embassy and consulate websites have very helpful information about procedures, timelines, communities served, required documentation, and fees.
`
    },
    {
      title: "Invitation Letters",
      content:
`
The Association for Computing Machinery does not issue formal invitation letters for visas to attend ACM sponsored conferences. We can however issue a visa support letter. For Visa support letters, please send all requests to the Office of SIG Services [supportletters@acm.org](mailto:supportletters@acm.org) with the following information:

* Your name as it appears on your passport Current postal mailing address

* The name of the conference you wish to attend

* Your Registration Confirmation Number

* If you have any papers accepted for the conference, please provide the title and indicate whether you are the 'sole author' or a 'co- author'.

Please note visa support letters are issued via email by PDF and the original is mailed to your current postal address.

For more information on Visa Support Letters, please consult the ACM page [here](http://www.acm.org/sigs/volunteer_resources/conference_manual/visas?searchterm=visa+support+letters).

`
    },
    {
      title: "Special Notice",
      content:
`
CSCW 2018 attendees may be affected by the [Executive Order signed by the President of the United States in 2017](https://en.wikipedia.org/wiki/Trump_travel_ban). This Executive Order banned most people from entering the U.S. if they hold passports from a specific set of countries (Iran, Libya, North Korea, Syria, Venezuela, Yemen,and  Somalia). We will work to accommodate any presenting authors who cannot travel to the US for visa reasons related to the ban. These authors’ papers will be included in the proceedings regardless of the author registration and attendance status, and we will seek ways for authors to remotely present their work at the conference. If you are such an author, please email the general chairs at [chairs2018@cscw.acm.org](mailto:chairs2018@cscw.acm.org).

In addition, we will attempt to accommodate interested attendees from those countries that are not able to attend for reasons related to the ban, though we may limited capacity to support such attendees. Email the telepresence chairs at [tele2018@cscw.acm.org](mailto:tele2018@cscw.acm.org) for details.

We support statements made by the Association for Computing Machinery (ACM) and the International Science Council (ICSU) that the free and responsible practice of science is fundamental to scientific advancement and human and environmental well-being and, furthermore, that the practice of science requires freedom of movement, association, expression and communication. 

We welcome questions and suggestions from the community about this topic.

Vanessa Evers, Mor Naaman
[chairs2018@cscw.acm.org](mailto:chairs2018@cscw.acm.org)
`
    }
  ]
};

const attendTravelContents = {
  items: [
    {
      title: "Traveling to CSCW 2018",
      content: 
`
## Air Travel

Information about traveling to the New York / New Jersey area by air will be posted shortly.

## Rail Travel

Information about traveling to the New York / New Jersey area by rail will be posted shortly.
`
    },
    {
      title: "Getting Around",
      content: 
`
The [Hyatt Regency](https://jerseycity.regency.hyatt.com/) is a short walk to the Exchange Place PATH Station with [frequent trains](http://www.panynj.gov/path/maps-schedules.html) running directly across the Hudson to the World Trade Center site.

The PATH also runs further north in Manhattan which makes connecting to the MTA subway trains like the 4,5,6 and A, C, E quite effortless. The nearby ferry terminal, Paulus Hook, offers rides to Wall Street, the World Financial Center, and Midtown (W 39th). From the Hyatt Regency, taking public transportation, you can get to the Financial District in less than 15 minutes, or to Times Square in about 30 minutes. Getting to the Whitney Museum and the New Museum also takes about 30 minutes, and the Empire State Building is 35 minutes away. You can get to the Metropolitan Museum of Art on the Upper East side and other Museum Mile attractions in less than an hour, again, all on public transport.
`
    },
  ]
};

const attendLocalContents = {
  items: [
    {
      title: "Local Resources",
      content: 
`
Information about local resources, such as supermarkets, drugstores, emergency services, and recreational activities near the conference venue and in New York City will be posted closer to the conference date.

For questions, please contact the Local Arrangements Co-Chairs at [local2018@cscw.acm.org](mailto:local2018@cscw.acm.org).
`
    },
    { 
    title: "Local Arrangements Co-Chairs",
    content:
`
Victoria Sosik (Google)
Joelle Alcaidinho (Intel)
[local2018@cscw.acm.org](mailto:local2018@cscw.acm.org)
`
    }
  ]
};

const attendParentContents = {
  items: [
    {
      title: "Resources for Parents",
      content: 
`
Information about resources for parents will be posted closer to the conference date.

For questions, please contact the Local Arrangements Co-Chairs at [local2018@cscw.acm.org](mailto:local2018@cscw.acm.org).
`
    },
    { 
    title: "Local Arrangements Co-Chairs",
    content:
`
Victoria Sosik (Google)
Joelle Alcaidinho (Intel)
[local2018@cscw.acm.org](mailto:local2018@cscw.acm.org)
`
    }
  ]
};


attendOverviewContents.items = attendOverviewContents.items.map((n) => {
  n.content = marked(n.content);
  return n;
});

attendRegistrationContents.items = attendRegistrationContents.items.map((n) => {
  n.content = marked(n.content);
  return n;
});

attendHotelContents.items = attendHotelContents.items.map((n) => {
  n.content = marked(n.content);
  return n;
});

attendVisasContents.items = attendVisasContents.items.map((n) => {
  n.content = marked(n.content);
  return n;
});

attendTravelContents.items = attendTravelContents.items.map((n) => {
  n.content = marked(n.content);
  return n;
});

attendLocalContents.items = attendLocalContents.items.map((n) => {
  n.content = marked(n.content);
  return n;
});

attendParentContents.items = attendParentContents.items.map((n) => {
  n.content = marked(n.content);
  return n;
});