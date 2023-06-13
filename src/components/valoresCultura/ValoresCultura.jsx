import React, { useEffect, useState } from 'react'
import { ContainerValores, ContainerJustiça } from "./styles"
import banco from '../../../public/assets/banco.png'
import terno from '../../../public/assets/terno.png'
import thais from '../../../public/assets/thais.jpeg'
import Image from "next/image"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function ValoresCultura() {
    const [mobile, setMobile] = useState(false)
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        if (typeof window !== 'undefined') { // verifica se o código está sendo executado no cliente
            if (window.innerWidth > 500) {
                setMobile(true);
            }
        }
    }, []);


    return (
            <ContainerValores mobile={mobile}>
                <ContainerJustiça>
                    <h1>Nós praticamos a Justiça.</h1>
                </ContainerJustiça>
                <div className='content'>
                    <Image src={thais}/>
                    <div className='carousel-wrapper'>
                        <Carousel showIndicators={false} showArrows={true} showStatus={false}>
                            <div className='carousel-item'>Somos uma equipe de profissionais apaixonados e especializados em direito do consumidor e direito bancário. No nosso escritório de advocacia, estamos empenhados em fornecer um serviço excepcional aos nossos clientes, com uma abordagem centrada no cliente e soluções jurídicas inovadoras.</div>
                                    
                            <div className='carousel-item'>Nossa missão é proteger os direitos dos consumidores e garantir que sejam tratados de forma justa e equitativa. Sabemos que os consumidores frequentemente são prejudicados por práticas comerciais desleais e contratos abusivos, e estamos aqui para lutar por seus direitos. Nosso objetivo é buscar a justiça e obter a devida compensação para nossos clientes que enfrentem problemas com produtos defeituosos, publicidade enganosa, serviços inadequados e outras questões relacionadas ao direito do consumidor.</div>

                            <div className='carousel-item'> Além disso, somos especialistas em direito bancário e estamos comprometidos em ajudar os consumidores a enfrentar os desafios complexos do sistema bancário. Compreendemos as nuances das leis e regulamentações financeiras e trabalhamos diligentemente para proteger os interesses de nossos clientes. Seja lidando com questões de empréstimos abusivos, cobranças indevidas, práticas de crédito injustas ou qualquer outra questão bancária, nossa equipe possui o conhecimento e a experiência necessários para fornecer uma representação jurídica sólida. </div>
                            
                            <div className='carousel-item'>No nosso escritório, valorizamos a transparência e a comunicação eficaz. Reconhecemos que cada caso é único e exigirá uma estratégia personalizada. Nossa equipe dedica tempo para ouvir suas preocupações, analisar minuciosamente os detalhes do seu caso e fornecer aconselhamento jurídico perspicaz e direcionado. Estamos aqui para oferecer orientação jurídica clara e ajudá-lo a compreender seus direitos e opções legais.</div>

                            <div className='carousel-item'>Independentemente da complexidade do seu caso, você pode contar com nossa equipe dedicada para trabalhar incansavelmente em busca de uma solução favorável. Nossa prioridade é proteger seus interesses e alcançar os melhores resultados possíveis. Combinando experiência, expertise jurídica e uma abordagem voltada para o cliente, nos destacamos no campo do direito do consumidor e direito bancário.</div>

                            <div className='carousel-item'>Estamos prontos para lutar por seus direitos e ajudá-lo a obter a justiça que você merece!</div>
                        </Carousel>   
                    </div>
                </div>
            </ContainerValores >
    )
}
