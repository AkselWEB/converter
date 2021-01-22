import React from 'react';
import Icons1 from '../../ressources/images/icon1.svg';
import Icons2 from '../../ressources/images/icon2.svg';
import Icons3 from '../../ressources/images/icon3.svg';
import Icons4 from '../../ressources/images/icon4.svg';

import {ServicesContainer,ServicesIcons,Services1,Services2,ServicesWrapper,ServicesP,ServicesCard} from './ServicesElements';
const Services = () => {
    return (
        <ServicesContainer id="services">
            <Services1>A propos</Services1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcons src={Icons1}/>
                    <Services2>Facile d'utilisation </Services2>
                    <ServicesP> Site simple à utiliser avec 
                        un Convertisseur tres simple d'utilisation
                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcons src={Icons2}/>
                    <Services2>100% Fiable </Services2>
                    <ServicesP>Un convertisseur 100% fiable sans bug !

                    </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcons src={Icons3}/>
                    <Services2>Prenium Version </Services2>
                    <ServicesP>Avec une version Prenium à partir
                        de 5,99e / mois , possibillité de changer 
                        de thème et d'utiliser les fonctins prenium </ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcons src={Icons4}/>
                    <Services2>Autres </Services2>
                    <ServicesP>Possibillité d'utiliser un éditeur de texte ,
                        calculatrice , photomontage </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
