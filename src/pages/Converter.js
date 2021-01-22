import React from 'react'
import Convertisseur  from '../component/Convertisseur';
import Video from '../ressources/videos/video(2).mp4'
import { VideoBg } from '../component/Convertisseur/StyledConvertisseur'
import Navbar from '../component/Navbar';

export const Converter = () => {
    return (
        <>
            <Navbar />
            <section className='page-converter'>
                <VideoBg className='video' autoPlay loop muted src={Video} type='video/mp4' />
                <Convertisseur />
            </section>
        </>
    )
}



