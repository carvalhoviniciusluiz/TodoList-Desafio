import React from 'react';
import Checkbox from '../Checkbox';

import {
  Section,
  Title,
  NewTodo,
  ToggleAll,
  ContentWrap,
  DotoList,
  Item,
  TextItem,
  Destroy,
  Footer,
} from './styles';

const TodoList: React.FC = () => {
  return (
    <Section>
      <Title>todos ;P</Title>

      <ToggleAll />
      <NewTodo placeholder="O que precisa ser feito?" />

      <ContentWrap>
        <DotoList>
          <Item>
            <Checkbox id="checkbox-1" />
            <TextItem>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui aperiam autem id hic iusto, est quasi at eum? Exercitationem repellat.</TextItem>
            <Destroy>&#65794;</Destroy>
          </Item>

          <Item>
            <Checkbox id="checkbox-2" />
            <TextItem>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui aperiam autem id hic iusto, est quasi at eum? Exercitationem repellat.</TextItem>
            <Destroy>&#65794;</Destroy>
          </Item>

          <Item>
            <Checkbox id="checkbox-2" />
            <TextItem>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui aperiam autem id hic iusto, est quasi at eum? Exercitationem repellat.</TextItem>
            <Destroy>&#65794;</Destroy>
          </Item>
        </DotoList>
      </ContentWrap>

      <Footer />
    </Section>
  );
}

export default TodoList;
