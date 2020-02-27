import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Table } from 'semantic-ui-react';
import moment from 'moment';
import { listHistories } from '../../lib/api/histories';
import Responsive from '../commons/Responsive';

const HistoryBlock = styled(Responsive)`
  display: flex;
  width: 80vw;
  height: 100vh;
  padding: 2rem;
  align-items: center;
  justify-content: center;
`;

const History = () => {
  const [histories, setHistories] = useState([]);
  const isCancelled = useRef(false);

  useEffect(() => {
    const listHistoriesFunc = async () => {
      const { data } = await listHistories({ from: 1 });
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
      <Table sortable celled unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>누가</Table.HeaderCell>
            <Table.HeaderCell>무엇을</Table.HeaderCell>
            <Table.HeaderCell>언제</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {histories.map(history => (
            <Table.Row key={history._id}>
              <Table.Cell>{history.name}</Table.Cell>
              <Table.Cell>
                {history.value >= 0 ? `+${history.value}` : `${history.value}`}
              </Table.Cell>
              <Table.Cell>
                {moment(history.createdAt).format('YYYY-MM-DD HH:mm:ss.SSS')}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </HistoryBlock>
  );
};

export default History;
