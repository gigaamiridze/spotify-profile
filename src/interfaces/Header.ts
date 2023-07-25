import { Range } from '../constants';

export interface IHeaderProps {
  title: string;
  changeInfoRange: (range: Range.LONG | Range.MEDIUM | Range.SHORT) => Promise<void>;
}
