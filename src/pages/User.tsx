import { useEffect } from 'react';
import { useMenuItem } from '../contexts';

function User() {
  const { setActiveItem } = useMenuItem();

  useEffect(() => {
    setActiveItem(1);
  }, []);

  return (
    <div>User</div>
  )
}

export default User;