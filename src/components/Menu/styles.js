import styled from 'styled-components'

const MenuContainer = styled.div`

  .sections{
    margin-bottom: 2rem;
  }
    .menu-title{
      border-bottom: 1px dashed #AF1601;
      border-radius: 1px;
      padding-bottom: .5rem;
      width: 100%;
      font-family: var(--snell-font);
      font-size: 1.5rem;
      font-style: italic;
      font-weight: 700;
      line-height: 1.9rem;
      letter-spacing: 0.03em;
      text-align: left;
      margin-bottom: 1.5rem;
    }
  .menu-container{
    margin-top:1rem;
  }
  
  .first-line, .second-line{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--regular-font);
    line-height: 1.2rem;
    letter-spacing: 0.03em;
  }
  .first-line{
    margin-bottom: .7rem;
    font-weight: 700;
    letter-spacing: 0.03em;
    .food{
      font-size: 1rem;
    }
    .price{
      font-size: 8px;
    }
  }
  
  .second-line{
    .content{
      font-weight: 400;
    }
    .rating{
      width: 1.5rem;
      height: 1.2rem;
      background: #D2A400;
      border-radius: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      p{
        font-family: var(--font-light);
        font-size: .7rem;
        font-weight: 500;
        line-height: 7px;
        letter-spacing: 0.03em;
        text-align: left;
      }
    }
    
   
    
   

  }
`

export { MenuContainer };
