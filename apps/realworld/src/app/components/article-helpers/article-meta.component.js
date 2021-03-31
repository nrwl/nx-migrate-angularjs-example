import template from './article-meta.html';

let ArticleMeta = {
  bindings: {
    article: '=',
  },
  transclude: true,
  template,
};

export default ArticleMeta;
