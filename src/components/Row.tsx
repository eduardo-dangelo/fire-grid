import styled from 'styled-components';

interface RowProps {
  alignItems: string;
  justifyContent: string;
}

const Row = styled.div<RowProps>`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: ${({ alignItems }) =>  alignItems || 'stretch' };
  justify-content: ${({ justifyContent }) => justifyContent || 'stretch'};
  margin: 0 -16px;
`;

export default Row;
