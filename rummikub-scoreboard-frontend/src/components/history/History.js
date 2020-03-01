import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Table } from 'semantic-ui-react';
import Responsive from '../commons/Responsive';
import Breaker from '../commons/Breaker';
import LinkButton from '../commons/LinkButton';
import { listHistories } from '../../lib/api/histories';

const HistoryBlock = styled(Responsive)`
  display: flex;
  width: 100vw;
  padding: 2rem;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const History = () => {
  const [histories, setHistories] = useState([]);
  const isCancelled = useRef(false);

  useEffect(() => {
    const listHistoriesFunc = async () => {
      const { data } = await listHistories({ from: 1, limit: 20 });
      if (!isCancelled.current) {
        setHistories(data);
      }
    };

    listHistoriesFunc();

    return () => {
      isCancelled.current = true;
    };
  }, []);

  return (
    <HistoryBlock>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>누가</Table.HeaderCell>
            <Table.HeaderCell>무엇을</Table.HeaderCell>
            <Table.HeaderCell>언제</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {histories.map(history => {
            const isPositive = history.value >= 0;
            return (
              <Table.Row key={history._id}>
                <Table.Cell>{history.name}</Table.Cell>
                <Table.Cell positive={isPositive} negative={!isPositive}>
                  {isPositive ? `+${history.value}` : `${history.value}`}
                </Table.Cell>
                <Table.Cell>
                  {moment(history.createdAt).format('YYYY-MM-DD HH:mm:ss.SSS')}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      <Breaker />
      <LinkButton to="/">점수판</LinkButton>
    </HistoryBlock>
  );
};

export default History;
