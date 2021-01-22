import styled from 'styled-components'

export const StyledConvertisseur = styled.div`
    width: 60%;
    background: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    padding: 16px 8px 8px;
    z-index: 1;

    h5 {
        font-size: 24px;
        margin-bottom: 16px;
        margin-top: 0px;
    }

    input {
        border-radius: 30px;

color: #1a1a1a;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px 16px;
padding: 16px 45px;
border: 1.5px solid #000000;

    }

    .wrapper-converter {
        width: 100%;
        border: 1px solid rgba(0,0,0, 0.3);
        border-radius: 12px;
        display: flex;
        flex-direction: column;
    }

    .wrapper-input {
        margin: 8px;
    }

    small {
        font-size: 20px;
        margin: 8px;
    }
    span {
        margin-left: 8px;
        font-size: 28px;
        font-weight: bold;
        text-transform: uppercase;
    }
    .container-bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .container-input {
        display: flex;
        flex-direction: column;
    }
    svg {
        width: 72px;
        height: 72px;
        cursor: pointer;
        margin-right: 24px;
    }   

    
`

export const VideoBg = styled.video`
       width: 100%;
       height: 100%;
      -o-object-fit: cover;
       object-fit: cover;
      background: #232a34;
    position: absolute;
    left: 0;
    top: 0;
    
`