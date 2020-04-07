import React from 'react';
import styled from 'styled-components';
import TimeAgo from 'react-timeago';
import koreaStrings from 'react-timeago/lib/language-strings/ko';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import { getEmoji } from '../../helpers/emoji';

const formatter = buildFormatter(koreaStrings);

const HistoryBox = styled.div`
  margin-bottom: 2vh;
  font-size: 1.1em;
`;

const TopHistoryBlock = styled.div`
  color: grey;
`;

const BottomHistoryBlock = styled.div`
  display: flex;
  align-items: center;
`;

const Content = styled.span`
  flex: 1;
  line-height: 1.5em;
  font-size: ${({ size = 1 }) => `${size}em`};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  color: ${({ color }) => (color ? ` ${color}` : '')};
`;

const EmojiContent = styled(Content)`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const ContentBlock = styled.div`
  display: flex;
  align-items: flex-end;
  flex: 3;
  flex-flow: column;
  color: grey;
`;

const History = ({ history }) => (
  <HistoryBox value={history.value}>
    <TopHistoryBlock>
      <Content size="1.3" bold>
        {history.name}
      </Content>
    </TopHistoryBlock>

    <BottomHistoryBlock>
      <Content
        size="3.5"
        bold
        color={history.value > 0 ? '#5aff5d' : '#ff3834'}
      >
        {history.value > 0 ? `+${history.value}` : history.value}
      </Content>

      <EmojiContent role="img" aria-label="" size="2.8">
        {getEmoji(history.emojiType)}
      </EmojiContent>

      <ContentBlock>
        <Content size="0.85" bold>
          {history.memo}
        </Content>
        <Content size="0.85">
          <TimeAgo date={history.createdAt} formatter={formatter} />
        </Content>
      </ContentBlock>
    </BottomHistoryBlock>
  </HistoryBox>
);

export default React.memo(History);
