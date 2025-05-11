import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const MetaTitle = ({
  title,
  metaTitle,
  description,
  keywords,
  author,
  imageUrl,
  publishedTime,
  section,
  url,
}) => {
  return (
    <Helmet>
      <title>{title} | Margdarsh</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl || 'default-image.jpg'} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="marg-darshan" />
      <meta name="twitter:card" content="" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl || 'default-image.jpg'} />
      <meta property="article:published_time" content={publishedTime} />
      <meta property="article:author" content={author} />
      <meta property="article:section" content={section} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

MetaTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  keywords: PropTypes.string,
  author: PropTypes.string,
  imageUrl: PropTypes.string,
  publishedTime: PropTypes.string,
  section: PropTypes.string,
  url: PropTypes.string,
};

MetaTitle.defaultProps = {
  keywords: '',
  imageUrl: 'default-image.jpg',
};

export default MetaTitle;
