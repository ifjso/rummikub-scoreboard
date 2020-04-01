import randomInt from 'random-int';

const positiveEmojis = ['🌝', '🎉', '🎈', '🍡', '🌟'];
const negativeEmojis = ['🌪', '😧', '⛈', '👻', '💩'];
const emojis = positiveEmojis.concat(negativeEmojis);

export const getEmoji = type => emojis[type];

export const getEmojiType = value =>
  value > 0
    ? randomInt(positiveEmojis.length - 1)
    : randomInt(positiveEmojis.length, emojis.length - 1);
