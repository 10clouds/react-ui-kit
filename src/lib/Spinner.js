import styled from 'styled-components';

import * as palette from '../palette';

export const Spinner = styled.div`
  width: ${props => props.small ? '35px' : '75px'};
  height: ${props => props.small ? '35px' : '75px'};
  border: 2px solid ${palette.PROGRESSBAR_STRIP};
  border-top: 3px solid white;
  border-radius: 100%;
  margin: 30px auto;
  animation: spinner 1s infinite linear;
  opacity: ${props => props.light ? '0.4' : '1'};

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;