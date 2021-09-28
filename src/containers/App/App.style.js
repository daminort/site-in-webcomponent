import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 7fr 1fr;
  
  .toolbar {
    padding: 0 8px;
    margin-bottom: 16px;
      
    .links {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      
      .label {
        margin-right: 24px;
      }
      
      .link {
        padding: 8px 16px;
        cursor: pointer;
        
        &.active {
          font-weight: 500;
          padding-top: 10px;
          padding-bottom: 6px;
          border-bottom: 3px solid #005A9E;
        }
      }
    }
    
    .inputs {
      display: flex;
      align-items: center;
      
      .label {
        margin-right: 24px;
      }
      
      .ant-input {
        margin-right: 8px;
      }
    }
  }
  
  .workspace {
    position: relative;
  }
`;
