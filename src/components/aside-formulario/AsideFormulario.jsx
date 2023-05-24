import React from 'react'
import { AsideForm, Container } from "./styles"
import Image from "next/image"
import qrcode from "../../../public/assets/qrcode.jpg"
import { IoLogoWhatsapp } from 'react-icons/io'
import { HiOutlineMail } from 'react-icons/hi'


export default function AsideFormulario() {
    return (
        <AsideForm>
            <Container>
                <h1>Contato: </h1>

                <a data-auto-recognition="true" href="mailto:tydecarli@decarliadvocacia.com">  <HiOutlineMail className="iconMail" alt="icon-email" />tydecarli@decarliadvocacia.com</a>

                <a href="https://wa.me/46991071608" className="text-number">
                    <IoLogoWhatsapp className="icon" alt="chat-whatsapp" />
                    (46)  9 9107-1508
                </a>
            </Container>

            <div>
                <Image
                    src={qrcode}
                    alt="Imagem do livro"
                    className="bg-image"
                    height={170}
                    width={170}
                    quality={100}
                />
            </div>


        </AsideForm >
    )
}
