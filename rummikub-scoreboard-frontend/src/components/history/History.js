import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Table } from 'semantic-ui-react';
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
            <Table.HeaderCell>owner</Table.HeaderCell>
            <Table.HeaderCell>value</Table.HeaderCell>
            <Table.HeaderCell>createdAt</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {histories.map(history => (
            <Table.Row key={history._id}>
              <Table.Cell>{history.owner}</Table.Cell>
              <Table.Cell>{history.value}</Table.Cell>
              <Table.Cell>{history.createdAt}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </HistoryBlock>
  );
};

export default History;

// [
//   {
//       "_id": "5e493e5247be9f001835fc73",
//       "owner": 1,
//       "value": 1,
//       "createdAt": 1581858386204,
//       "__v": 0
//   },
//   {
//       "_id": "5e48df4a867fd99c9f82b988",
//       "owner": 1,
//       "value": 1,
//       "createdAt": 1581834058841,
//       "__v": 0
//   }
// ]
