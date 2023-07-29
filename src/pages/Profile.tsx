import { Navbar } from '../layouts';
import { Router } from '../router';
import { ScrollToTop } from '../layouts';
import { ContentWrapper } from '../components';

function Profile() {
  return (
    <ContentWrapper>
      <Navbar />
      <ScrollToTop />
      <Router />
    </ContentWrapper>
  )
}

export default Profile;
