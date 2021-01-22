import styled from 'styled-components'

const StyledContact = styled.div`
     
    height: 100vh;
    width: 100vw;
    background: #1a1a1a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px;

    input, textarea {
        border-radius: 30px;
        color: #1a1a1a;
        display: flex;
        align-items: center;
        font-size: 16px;
        padding: 12px;
        margin-bottom: 12px;
        border: 3px solid #fff;
    }
    .input3 {
        padding: 24px;
        width: 100%;
        height: 120px;
    }

    .input2 {
        padding: 24px;
        width: 100%;
    }

    .input1 {
        padding: 24px;
        width:100%;
    }



    .wrapper-converter {
        width: 100%;
        border: 3px solid rgba(0,0,0, 0.3);
        display: flex;
        flex-direction: column;
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
    label {
        color: #fff;
        font-size: 14px;
        margin-bottom: 4px;
        align-self: flex-start;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    button {
        outline: none;
        padding: 8px 24px;
        color: white;
        border: 2px solid white;
        background: transparent;
        border-radius: 50px;
        cursor: pointer;
        transition: 500ms;
        &:hover {
            transition: 500ms;
            background: white;
            color: black;
        }
    }
`

export default StyledContact