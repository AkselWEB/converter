import styled from 'styled-components'

export const ServicesContainer = styled.div`
height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #fff;

@media screen (max-width: 760px) {
    height: 1100px;
}
@media screen (max-width: 480px) {
    height: 1300px;
}
`

export const ServicesWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px,1fr));
    grid-auto-rows: 240px;
align-items: center;
grid-gap: 16px; 
padding: 0 50px;

@media screen (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
}

@media screen (max-width: 760px) {
    grid-template-columns: 1fr ;
    padding: 0 20px;
}
`

export const ServicesCard = styled.div`
background: #1a1a1a;
display: flex;
flex-direction: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;


&:hover {
 transform: scale(1.02);
 transition: all 0.2s ease-in-out;
 cursor: pointer;
}
`


export const ServicesIcons = styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
`


export const Services1 = styled.h1`
font-size: 2.5rem;
margin-botom: 64px;
color: #1a1a1a;

@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`

export const Services2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
color: #fff;
`

export const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
color: #fff;
`