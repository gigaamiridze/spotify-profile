import styled, { css } from 'styled-components';
import { TotalTracksProps } from '../../interfaces';

const TotalTracks = styled.span<TotalTracksProps>`
  ${({ isPlaylistContent, theme }) => css`
    color: ${isPlaylistContent ? theme.colors.white : theme.colors.lightGrey};
    font-size: ${isPlaylistContent ? 14 : 12}px;
    text-transform: ${isPlaylistContent ? 'capitalize' : 'uppercase'};
    letter-spacing: ${!isPlaylistContent && '1px'};
    margin-bottom: ${isPlaylistContent && '20px'};
  `}
`;

export default TotalTracks;
