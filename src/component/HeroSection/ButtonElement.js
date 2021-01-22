import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const Button = styled(Link)`
border-radius: 50px;
outline: none;
color: #fff;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
white-space: nowrap;
font-size: 20px 16px;
padding: 12px 48px;
text-decoration: none;
transition: all 0.2s ease-in-out;
border: 2px solid #FFF;


&:hover{
    transition: all 0.2s ease-in-out;
    
};
};

`   
