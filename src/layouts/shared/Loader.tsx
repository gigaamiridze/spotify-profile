import { LoaderContainer, Bars, Bar } from '../../components';

function Loader() {
  return (
    <LoaderContainer>
      <Bars>
        <Bar delay='250ms' />
        <Bar delay='715ms' />
        <Bar delay='475ms' />
        <Bar delay='25ms' />
        <Bar delay='190ms' />
      </Bars>
    </LoaderContainer>
  )
}

export default Loader;