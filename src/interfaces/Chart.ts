import { IAudioFeatures } from './tracks';

export interface IChartProps {
  features: IAudioFeatures | IAudioFeatures[];
  direction: 'horizontal' | 'vertical';
}
