var marked = require('marked');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  smartLists: true,
});

var sharedNavi = {
  content: [
    {
      link: "index.html",
      title: "home"
    },
    {
      link: "submit.html",
      title: "submit"
    },
    {
      link: "committee.html",
      title: "committee"
    }
  ]
};

module.exports = {
  sharedNavi: sharedNavi,
};
