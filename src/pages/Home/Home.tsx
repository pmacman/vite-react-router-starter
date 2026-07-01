import type { SiteDetails } from '@/types/site.types';

function Home() {
  const siteDetails: SiteDetails = {
    title: 'Home',
    description: 'Welcome to the home page.',
    date: new Date(),
  };

  return (
    <>
      <h1 data-testid="title">{siteDetails.title}</h1>
      <p>{siteDetails.description}</p>
    </>
  );
}

export default Home;
