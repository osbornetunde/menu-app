import styled from 'styled-components';

const FoodCardContainer = styled.section`
  height: 23rem;
  width: 29.4rem;
  border-radius: 1px;
  margin-top: 2rem;
  border: 1px dashed #580B01;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;  
  
  .image-container{
    height: 14.1rem;
    margin-bottom: 1rem;
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .food-title{
    font-family: var(--regular-font);
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.3rem;
    letter-spacing: 0.03em;
    margin-bottom: .5rem;
  }
  .food-content{
    font-family: var(--primary-font);
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5rem;
    letter-spacing: 0.03em;
    margin-bottom: .3rem;
  }
  
  .food-price{
    font-family: var(--regular-font);
    font-size: 1rem;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0.03em;
  }
`

export { FoodCardContainer };
