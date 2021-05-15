import styled from 'styled-components';

const StyledFooter = styled.section`
  background-color: #1B1B1B;
  padding: 2rem 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header{
    font-family: var(--regular-font);
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 3.8rem;
    letter-spacing: 0.03em;
    text-align: center;
    color: var(--primary-white);
  }
  
  .contact-items{
    font-family: var(--regular-font);
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 17px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: var(--primary-white);
    
    h6{
      font-weight: 500;
      letter-spacing: 0.05em;
    }
    
    p{
        width: 11.5rem;
      }
    
    span{
      color:#AF1601;
    }
  }
  
  .copyright{
    font-family: var(--regular-font);
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.03em;
    text-align: center;
    color: var(--primary-white);
    max-width: 26rem;
  }
  
`;

const DayContainer = styled.div`
  font-family: var(--regular-font);
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.7rem;
  letter-spacing: 0.03em;
  color: var(--primary-white);

  span{
    color:#AF1601;
    margin-right: .5rem;
  }

`

export { StyledFooter, DayContainer };
