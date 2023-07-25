import { useState } from 'react';
import { Range } from '../../constants';
import { IHeaderProps } from '../../interfaces';
import { HeaderContainer, HeaderTitle, RangeButton, Ranges } from '../../components';

function Header(props: IHeaderProps) {
  const { title, changeInfoRange } = props;
  const [activeRange, setActiveRange] = useState<Range.LONG | Range.MEDIUM | Range.SHORT>(Range.LONG);

  const changeRange = (range: Range.LONG | Range.MEDIUM | Range.SHORT) => {
    changeInfoRange(range);
    setActiveRange(range);
  }

  return (
    <HeaderContainer>
      <HeaderTitle>{title}</HeaderTitle>
      <Ranges>
        <RangeButton
          isActive={activeRange === Range.LONG}
          onClick={() => changeRange(Range.LONG)}
        >
          <span>All Time</span>
        </RangeButton>
        <RangeButton
          isActive={activeRange === Range.MEDIUM}
          onClick={() => changeRange(Range.MEDIUM)}
        >
          <span>Last 6 Months</span>
        </RangeButton>
        <RangeButton
          isActive={activeRange === Range.SHORT}
          onClick={() => changeRange(Range.SHORT)}
        >
          <span>Last 4 Weeks</span>
        </RangeButton>
      </Ranges>
    </HeaderContainer>
  )
}

export default Header;
