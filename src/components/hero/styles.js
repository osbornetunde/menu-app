import styled from 'styled-components';
import Image from '../../assets/img/heroBg.png';

const HeroContainer = styled.section`
  height: 32rem;
  background-image: url(${Image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  flex: 0 1 100%;
  align-items: center;
  padding: 5rem 7.2rem 3.3rem;

  .header{
    font-family: var(--primary-font);
    font-size: 1.7rem;
    font-style: normal;
    font-weight: 300;
    line-height: 26px;
    letter-spacing: 0.03em;
    text-align: center;
    margin-top: 1.5rem;
    color: var(--primary-white);
    text-transform: capitalize;
  }
`

export { HeroContainer };
