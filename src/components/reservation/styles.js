import styled from 'styled-components';
import ReserveBg from '../../assets/img/reserve.png';


const ReservationContainer = styled.section`
  padding: 2rem 3.1rem;
  color: var(--primary-white);
  .content{
    background-image: url(${ReserveBg});
    background-repeat: no-repeat;
    background-position: center;
    background-blend-mode: darken;
    background-size: cover;
    padding: 1.5rem 5.9rem 1.5rem 2.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
  } 
  .container{
    position: relative;
  }
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
  
  .header{
    font-family: var(--regular-font);
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  .subheader{
    font-family: var(--primary-font);
    font-size: .8rem;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0.03em;
    margin-bottom: .6rem;
  }
  .phone{
    display: flex;
    align-items: center;
    padding: .4rem .4rem .4rem .8rem;
    border: 1px dashed var(--primary-white);
    border-radius: 1px;
    margin-bottom: .6rem;
    font-weight: 700;
    justify-content: space-between;
  }
  .phone-wrapper{
    margin-left: .8rem;
  }
  .phone-wrapper p {
    font-family: var(--regular-font);
    font-size: .8rem;
    font-weight: 700;
    line-height: 13px;
    letter-spacing: 0.03em;
  }
  .company-name, .address, .site, .insta{
    font-family: var(--primary-font);
    font-size: .8rem;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0.03em;
    margin-bottom: .2rem;
    display: flex;
    align-items: center;
    span{
      margin-right: .5rem;
    }
  }
`;

export { ReservationContainer }
