import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  h1 {
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
    &:hover {
      color: grey;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  `;
