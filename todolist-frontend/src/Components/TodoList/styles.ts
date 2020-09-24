import styled, { css } from 'styled-components';

export const Section = styled.section`
  position: relative;
  background: #fff;
  margin: 130px 0 40px 0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  position: absolute;
  top: -110px;
  width: 100%;
  font-size: 90px;
  font-weight: 100;
  text-align: center;
  color: #af2f2f26;
`;

export const NewTodo = styled.input.attrs({
  type: 'text'
})`
  width: 100%;
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);

  &::placeholder {
    color: rgba(0,0,0,0.2);
  }
`;

export const ToggleAll = styled.label`
  position: absolute;
  width: 60px;
  height: 34px;
  top: 5px;
  left: -6px;
  transform: rotate(90deg);

  &::before {
    content: '❯';
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
  }
`;

export const ContentWrap = styled.section`
  border-top: 1px solid #e6e6e6;
`;

export const DotoList = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;

  &:last-child {
    border-bottom: none;
  }
`;

interface TextItemProps {
  completed?: boolean;
}

const completed = css`
  color: #d9d9d9;
  text-decoration: line-through;
`;

export const TextItem = styled.label<TextItemProps>`
  word-break: break-all;
  padding: 15px 15px 15px 60px;
  display: block;

  ${props => props.completed && completed}
`;

export const Destroy = styled.button`
  position: absolute;
  opacity: 0;
  right: 4px;
  bottom: 26px;
  margin: auto 0;
  border: none;
  background: transparent;
  margin-bottom: 11px;
  font-size: 30px;
  color: #cc9a9a;
  background: #fff;
  cursor: pointer;

  &:hover, ${TextItem}:hover + & {
    opacity: 1;
  }
`;

export const Footer = styled.footer`
  &:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
                0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
                0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }
`;
