const volunteerNav = {
  items: [
    {
      title: "Overview",
      url: "./index.html"
    },
    {
      title: "Student Volunteers",
      url: "./sv.html"
    },
    {
      title: "Reviewer Mentor Program",
      url: "./mentor.html"
    }
  ]
};

const volunteerOverviewContents = {
  items: [
    {
      title: "Volunteering & Mentorship",
      content: 
`
Students are a vital component of the CSCW conference. Here you can find more information about student volunteering and mentoring reviewers.

`
    }
  ]
};

const volunteerSVContents = {
  items: [
    {
      title: "Call for Student Volunteers",
      content: 
`
Please stay tuned for information for Student Volunteers for CSCW 2018. For questions, please contact the SV co-chairs listed below.
`
    }, {
      title: "Student Volunteer Co-Chairs",
      content:
`
Xiao Ma (Cornell Tech)
Cristina Zaga (University of Twente)
[sv2018@cscw.acm.org](mailto:sv2018@cscw.acm.org)
`
    }
  ]
};

const volunteerMentorContents = {
  items: [
    {
      title: "CSCW Student Reviewer Mentor Program",
      content: 
`
The CSCW Student Reviewer Mentoring Program is intended to create an opportunity for students to participate in the CSCW review process while getting guidance from senior reviewers. The idea is that a small pool of students within the CSCW field are matched with CSCW review mentors, who agree to support the student in writing high-quality reviews. This has three purposes. First, PC members who choose a student reviewer within the mentor program will know that the student will do a good review, since the mentor will see to that. Second, students will have the opportunity to get feedback and discuss the reviewing process with the mentor and therefore become a better reviewer. Third, the students will become expert reviewers for future CSCW conferences, where they may eventually mentor the next generation of students!

Please stay tuned for information about being a Reviewer Mentor for CSCW 2018. For questions, please contact the Reviewer Mentorship co-chairs listed below.
`
    }, {
      title: "Student Reviewer Mentoring Co-Chairs",
      content:
`
Michael Muller (IBM Research)
Stephan Lukosh (T.U. Delft)
[studentmentoring2018@cscw.acm.org](mailto:studentmentoring2018@cscw.acm.org)
`
    }
  ]
};


volunteerOverviewContents.items = volunteerOverviewContents.items.map((n) => {
  n.content = marked(n.content);
  return n;
});

volunteerSVContents.items = volunteerSVContents.items.map((n) => {
  n.content = marked(n.content);
  return n;
});

volunteerMentorContents.items = volunteerMentorContents.items.map((n) => {
  n.content = marked(n.content);
  return n;
});