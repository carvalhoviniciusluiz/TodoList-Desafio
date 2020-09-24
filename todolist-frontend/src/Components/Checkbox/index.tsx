import React from 'react';

import { Container, Input, Span } from './styles';

interface CheckboxProps {
  id: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChecked?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  onChange,
  onChecked,
}) => {
  return (
    <Container key={id}>
      <Input id={id} onChange={onChange} checked={onChecked} />
      <Span />
    </Container>
  );
};

export default Checkbox;
