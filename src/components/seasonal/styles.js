import styled from 'styled-components';

const SeasonalContainer = styled.section`
padding: 2rem 4.1rem 1rem;
  
  .header{
    font-family: var(--regular-font);
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 3.8rem;
    letter-spacing: 0.03em;
    text-align: center;
    
    span{
      color: #AF1601;
    }
  }
  .sub-header{
    font-family: var(--regular-font);
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0.03em;
    text-align: center;
    color: rgba(0,0,0,0.7);
    margin-top: 1rem;
    margin-bottom: .9rem;
  }
  .menu-section{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export { SeasonalContainer }
