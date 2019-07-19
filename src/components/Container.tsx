import styled from 'styled-components';

interface ContainerProps {
  maxWidth: number;
}

const Container = styled.div<ContainerProps>`
  margin: 0 auto;
  max-width: ${({ maxWidth }) => `${maxWidth || 1200}px`};

  @media all and (max-width: ${({ maxWidth }) => maxWidth || 1200}px) {
    margin: 0 16px;
  }
`;

export default Container;
