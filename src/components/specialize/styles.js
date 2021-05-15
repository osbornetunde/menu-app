import styled from 'styled-components';
import Image from '../../assets/img/specializeBg.png';

const SpecializeContainer = styled.section`
  height: 25rem;
  background-image: url(${Image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  flex: 0 1 100%;
  align-items: center;
  padding: 3rem 3.1rem;
  
  .header{
    font-family: var(--regular-font);
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.8rem;
    letter-spacing: 0.02em;
    text-align: center;
    color: #580B01;
    max-width: 24.4rem;
    border-bottom: 1.5px dashed #AF1601;
    border-radius: 1px;
    padding-bottom: 1.8rem;
  }
  .content{
    margin-top: 1.9rem;
    font-family: var(--regular-font);
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.1rem;
    letter-spacing: 0.03em;
    text-align: center;
    color: rgba(0,0,0,0.7);
  }
`

export { SpecializeContainer }
