import { useState } from 'react';
import './Blog.css'

import imgNocheDeBrujas from '../../img/nocheDeBrujas.jpg'
import imgEducacion from '../../img/educacion.jpg'
import Episodio from './Episodio/Episodio';

const Blog = () => {
    
    const episodios = [
        {
            titulo: 'Especial de Noche de Brujas VII", Octubre 27, 1996',
            img: imgNocheDeBrujas,
            descipcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius aperiam culpa qui saepe excepturi fuga obcaecati incidunt laboriosam, possimus perspiciatis nostrum officiis adipisci rem maxime aliquid ut cupiditate temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consectetur facere fuga in quia nam nihil quam, blanditiis neque velit maxime quod minus nisi aliquam quas magnam facilis accusamus vero."
        },
        {
            titulo: 'Lucha Educativa", Abril 16, 1995',
            img: imgEducacion,
            descipcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius aperiam culpa qui saepe excepturi fuga obcaecati incidunt laboriosam, possimus perspiciatis nostrum officiis adipisci rem maxime aliquid ut cupiditate temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consectetur facere fuga in quia nam nihil quam, blanditiis neque velit maxime quod minus nisi aliquam quas magnam facilis accusamus vero."
        }
    ]
    
    return ( 
        <div className="contenedorBlog">
            {
                episodios.map(epi => (
                    <Episodio {...epi}/>
                ))
            }
        </div>
    );
}
 
export default Blog;