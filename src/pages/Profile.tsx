import { Navbar } from '../layouts';
import { Router } from '../router';
import { ContentWrapper } from '../components';

function Profile() {
  return (
    <ContentWrapper>
      <Navbar />
      <Router />
    </ContentWrapper>
  )
}

export default Profile;