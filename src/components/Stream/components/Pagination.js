/* eslint-disable react/no-array-index-key */
import React from 'react';

const Article = ({ article, onPaginate }) => (
  <button className="button-inline" type="button" onClick={() => onPaginate(article.url)}>
    {article.rel}
  </button>
);

function renderLinks(links, onPaginate) {
  if (links) {
    return links.map((article, index) => (
      <Article key={index} article={article} onPaginate={onPaginate} />
    ));
  }
  return [];
}

class Pagination extends React.Component {
  render() {
    const passingLinks = this.props.links;
    const onPaginate = this.props.onPaginate;
    const links = renderLinks(Object.keys(passingLinks).map(key => passingLinks[key]), onPaginate);

    return (
      <section>
        { links }
      </section>
    );
  }
}

export default Pagination;
