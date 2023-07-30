import { useEffect } from 'react';
import { Router } from '../router';
import { ContentWrapper } from '../components';
import { Navbar, ScrollToTop } from '../layouts';
import { getLocalAccessToken, handleLogout } from '../utils';

function Profile() {
  const EXPIRATION_TIME = 3600 * 1000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      const localAccessToken = getLocalAccessToken();

      if (localAccessToken) {
        handleLogout();
      }
    }, EXPIRATION_TIME);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ContentWrapper>
      <Navbar />
      <ScrollToTop />
      <Router />
    </ContentWrapper>
  )
}

export default Profile;
