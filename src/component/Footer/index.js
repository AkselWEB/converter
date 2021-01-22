import React from 'react';
import {FooterContainer,FooterH2} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterH2>© {(new Date).getFullYear()}, Conventer, Tous droits réservés | Développé par Aksel ✪ (aidé par Ilan)</FooterH2>
        </FooterContainer>
    )
}

export default Footer
