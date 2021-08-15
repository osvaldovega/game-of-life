import Head from 'next/head';

interface Props {
  description: string;
  keywords: string;
  title: string;
}

export const Meta: React.FC<Props> = ({ description, keywords, title }): JSX.Element => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta property="og:title" content={title} key="title" />
  </Head>
);
