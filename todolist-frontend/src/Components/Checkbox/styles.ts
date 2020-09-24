import styled from 'styled-components';

export const Container = styled.label`
  width: 100%;
  line-height: 19px;
  margin-left: 8px;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  display: block;
`;

export const Span = styled.span`
  position: absolute;
  top: 44px;
  left: 10px;
  height: 28px;
  width: 28px;
  font-size: 18px;
  padding: 3px;
  border: 1.5px solid #e8e8e8;
  border-radius: 100%;

  &:after {
    content: '';
    position: absolute;
    display: none;
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    transform: rotate(45deg);
  }
`;

export const Input = styled.input.attrs({
  type: 'checkbox',
})`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  cursor: pointer;

  &:checked ~ ${Span} {
    border: 1.5px solid #7ecc8b;
    color: #80db8f;
    text-align: center;
  }

  &:checked + ${Span}:before {
    content: '\\2714';
  }
`;
