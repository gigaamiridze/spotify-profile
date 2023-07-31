import { useEffect } from 'react';
import { Router } from '../router';
import { handleExpiredToken } from '../utils';
import { ContentWrapper } from '../components';
import { Navbar, ScrollToTop } from '../layouts';

function Profile() {
  useEffect(() => {
    handleExpiredToken();
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
