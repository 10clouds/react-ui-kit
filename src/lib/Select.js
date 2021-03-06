import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { palette, style } from '../constants';

const SelectWrapper = styled.div`
  position: relative;

  &::after {
    border-color: ${palette.GRAY.black} transparent;
    border-style: solid;
    border-width: 6px 6px 0;
    content: "";
    height: 0;
    margin-top: -3px;
    position: absolute;
    right: 16px;
    top: 50%;
    width: 0;
    pointer-events: none;
  }
`;

const StyledSelect = styled.select`
  appearance: none;
  background: ${style.BACKGROUND.main};
  border: solid 1px ${(p) => p.valid ? palette.SECONDARY.base : palette.RED.base};
  border-radius: 2px;
  padding: 8px 12px;
  position: relative;
  height: 42px;
  min-width: 226px;
  font-size: 20px;
  left: 0;
  margin: 0;
  overflow: hidden;

  :focus {
    outline: 0;
    box-shadow: ${style.SHADOW.outline};
  }

  :invalid {
    color: ${palette.GRAY.base};
  }
`;

const PlaceholderOption = styled.option`
  color: ${palette.GRAY.base};
  display: none;
`;

export const Option = styled.option`
  color: ${palette.GRAY.black};
`;


const Select = (props) => {
  const {placeholder, options, children, ...rest} = props;
  if (placeholder && rest.defaultValue === undefined) {
    rest.defaultValue = '';
  }
  return (
    <SelectWrapper>
      {/**
       * Dirty hack: we are using *required* property of select
       * to change it's look when there is no value selected
       * and we are showing a placeholder option.
       */}
      <StyledSelect {...rest} required={!!placeholder}>
        {placeholder && (
          <PlaceholderOption disabled hidden value="">{placeholder}</PlaceholderOption>
        )}
        {options && options.map((opt, idx) => (
          <Option key={opt + idx} value={opt}>{opt}</Option>
        ))}
        {children}
      </StyledSelect>
    </SelectWrapper>
  );
};

Select.defaultProps = {
  valid: true,
};

Select.propTypes = {
  placeholder: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.object),
  options: PropTypes.arrayOf(PropTypes.string),
  valid: PropTypes.bool,
};

export default Select;
