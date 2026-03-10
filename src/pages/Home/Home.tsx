import type { SiteDetails } from '@models/SiteDetails';
import { formatDate } from '@utils/dateFormatter';

function Home() {
  const siteDetails: SiteDetails = {
    title: 'Home',
    description: 'Welcome to the home page.',
    date: new Date(),
  };

  return (
    <>
      <h1 data-testid={'title'}>{siteDetails.title}</h1>
      <p>{siteDetails.description}</p>
      <p>{formatDate(siteDetails.date)}</p>
    </>
  );
}

export default Home;
