import { Helmet } from 'react-helmet-async';

type SEOProps = {
  title: string;
  description: string;
  type?: string;
  url?: string;
  image?: string;
};

export default function SEO({
  title,
  description,
  url = 'https://seandonny.com', // Default URL
  image = '', // Default to empty if no image provided
  type = 'website',
}: SEOProps) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{`${title} | Sean Donny`}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Sean Donny" />
      <link rel="canonical" href={url} />
      {/* End standard metadata tags */}

      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {image && (
        <meta property="og:image" content={`https://seandonny.com${image}`} />
      )}
      {/* End Facebook tags */}

      {/* Twitter tags */}
      <meta name="twitter:creator" content="@blvvvckfire" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && (
        <meta name="twitter:image" content={`https://seandonny.com${image}`} />
      )}
      {/* End Twitter tags */}
    </Helmet>
  );
}
