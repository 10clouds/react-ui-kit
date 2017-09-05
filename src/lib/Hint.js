import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { palette, FONT } from '../palette';

const StyledHint = styled.span`
  color: ${palette.SECONDARY.dark};
  font-family: ${FONT.main};
  font-size: 13px;
  opacity: 0.5;
  text-align: left;
`;

const Hint = (props) => (
  <StyledHint { ...props }/>
);

Hint.propTypes = {
  children: PropTypes.string,
};

export default Hint;
