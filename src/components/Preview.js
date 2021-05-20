import marked from 'marked';
import React from 'react';

const Preview = ({ text }) => {
  const innerHTML = { __html: marked(text) };
  return <div className="preview" dangerouslySetInnerHTML={innerHTML}></div>;
};

export default Preview;
