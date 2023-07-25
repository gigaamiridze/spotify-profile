import { useState } from 'react';
import { IHeaderProps } from '../../interfaces';
import { HeaderContainer, HeaderTitle, Ranges, RangeButton } from '../../components';

function Header(props: IHeaderProps) {
  const { title } = props;
  const [activeRange, setActiveRange] = useState<string>('long');

  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <Ranges>
        <RangeButton
          isActive={activeRange === 'long'}
          onClick={() => setActiveRange('long')}
        >
          <span>All Time</span>
        </RangeButton>
        <RangeButton
          isActive={activeRange === 'medium'}
          onClick={() => setActiveRange('medium')}
        >
          <span>Last 6 Months</span>
        </RangeButton>
        <RangeButton
          isActive={activeRange === 'short'}
          onClick={() => setActiveRange('short')}
        >
          <span>Last 4 Weeks</span>
        </RangeButton>
      </Ranges>
    </HeaderContainer>
  )
}

export default Header;
