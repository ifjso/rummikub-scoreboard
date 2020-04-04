import { css } from 'styled-components';

export default css`
  color: white;
  ${({ isLoading }) =>
    isLoading &&
    css`
      color: rgba(255, 255, 255, 0.5);
      background-color: #222;
      background-image: linear-gradient(
        to right,
        rgba(34, 34, 34, 1),
        rgba(255, 255, 255, 0.5),
        rgba(34, 34, 34, 1)
      );

      --shimmer-size: ${({ shimmerSize = 0.3 }) => `${shimmerSize}em`};
      background-size: var(--shimmer-size) auto;
      -webkit-background-size: var(--shimmer-size) auto;
      background-repeat: no-repeat;
      background-clip: text;
      -webkit-background-clip: text;
      animation-name: shimmer;
      animation-duration: 1s;
      animation-iteration-count: infinite;
    `}

  @keyframes shimmer {
    0% {
      background-position: calc(0% - var(--shimmer-size)) 0;
    }

    100% {
      background-position: calc(100% + var(--shimmer-size)) 0;
    }
  }
`;
