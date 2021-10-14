import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'Mboalab Project',
  keywords: 'Typhoid, open science',
  description: 'MboaLab is an open and collaborative space located in Yaoundé, Cameroon. The aim of MboaLab is to catalyse sustainable local development and improve people’s living conditions through open science.',
}

export default Meta
