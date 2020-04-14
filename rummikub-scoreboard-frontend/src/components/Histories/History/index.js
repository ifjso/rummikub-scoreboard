import React from 'react';
import TimeAgo from 'react-timeago';
import koreaStrings from 'react-timeago/lib/language-strings/ko';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import { getEmoji } from '../../../helpers/emoji';
import {
  HistoryBox,
  TopHistoryBlock,
  Content,
  BottomHistoryBlock,
  EmojiContent,
  ContentBlock
} from './style';

const formatter = buildFormatter(koreaStrings);
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
