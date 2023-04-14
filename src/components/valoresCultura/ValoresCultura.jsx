import React, { useEffect, useState } from 'react'
import { ContainerValores, ContainerJustiça } from "./styles"
import banco from '../../../public/assets/banco.png'
import terno from '../../../public/assets/terno.png'
import humanizado from '../../../public/assets/humanizado.png'
import Image from "next/image"


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
        <>
            <ContainerValores mobile={mobile}>
                <div className="container">
                    <div>
                        <Image
                            src={terno}
                            alt="Imagem de fundo"
                            className="icon"
                            quality={100}
                        />
                        <h1>Direito bancário</h1>
                        <p className="text">
                            O direito bancário é a área que regula as relações entre bancos e clientes, incluindo temas como abertura de contas e concessão de crédito.
                        </p>
                    </div>


                    <div className="humanizado">
                        <Image
                            src={humanizado}
                            alt="Imagem de fundo"
                            className="icon"
                            quality={100}
                        />
                        <h1 >Atendimento humanizado</h1>
                        <p className="text">O atendimento humanizado é aquele que prioriza a empatia, a compreensão e a atenção às necessidades e sentimentos do cliente. Trata-se de uma abordagem que buscamos estabelecer uma relação de confiança e respeito entre o nós e o cliente.</p>

                    </div>
                    <div className="consumidor">
                        <Image
                            src={banco}
                            alt="Imagem de fundo"
                            className="icon"
                            quality={100}
                        />
                        <h1>Direito do Consumidor</h1>
                        <p className="text">
                            O direito do consumidor garante que seus direitos sejam respeitados. Isso inclui práticas comerciais abusivas, garantias de produtos, propaganda enganosa, entre outros.
                        </p>
                    </div>
                </div>



                <ContainerJustiça>
                    <h1>Nós praticamos a Justiça.</h1>
                </ContainerJustiça>
            </ContainerValores >
        </>

    )
}
