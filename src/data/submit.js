var marked = require('marked');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  smartLists: true,
});

var submitContents = {
  items: [
    {
      title: "overview",
      content: "CSCW 2018 Online First Call for Paper Participation" +
        "The ACM conference on Computer-Supported Cooperative Work and Social Computing is an international and interdisciplinary conference focused on how technology intersects with social practices." +
        "The ACM conference on Computer-Supported Cooperative Work and Social Computing is an international and interdisciplinary conference focused on how technology intersects with social practices." +
        "The ACM conference on Computer-Supported Cooperative Work and Social Computing is an international and interdisciplinary conference focused on how technology intersects with social practices." +
        "This is an interim deadline for CSCW 2018 papers —  papers submitted for this deadline will be published Online First, before the CSCW 2018 annual conference, in the inaugural November 2017 Proceedings of the ACM: Human Computer Interaction (PACM). Accepted Online First papers will be presented in a format to be determined with recognition as CSCW full papers at the 2018 ACM Conference on Computer-Supported Cooperative Work and Social Computing in November, 2018. (Final location details will be announced soon). "
    }
  ]
};

submitContents.items = submitContents.items.map(function(n) {
  n.content = marked(n.content);
  return n;
});

module.exports = {
  submitContents: submitContents,
};
