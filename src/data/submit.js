var marked = require('marked');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  smartLists: true,
});

var submitCfp = {
  title: "placeholder",
  content: "placeholder"
}

submitCfp.content = marked(submitCfp.content);

module.exports = {
  submitCfp: submitCfp,
};
