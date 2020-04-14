import styled from 'styled-components';

export const HistoryBox = styled.div`
  margin-bottom: 2vh;
  font-size: 1.1em;
`;

export const TopHistoryBlock = styled.div`
  color: grey;
`;

export const BottomHistoryBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const Content = styled.span`
  flex: 1;
  line-height: 1.5em;
  font-size: ${({ size = 1 }) => `${size}em`};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  color: ${({ color }) => (color ? ` ${color}` : '')};
`;

export const EmojiContent = styled(Content)`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const ContentBlock = styled.div`
  display: flex;
  align-items: flex-end;
  flex: 3;
  flex-flow: column;
  color: grey;
`;
