import React, { useEffect, useState } from 'react'
import { Form } from "./styles"
import emailjs from '@emailjs/browser';
import { IoLogoWhatsapp } from "react-icons/Io";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
export default function Formulario() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [titulo, setTitulo] = useState('');
    const [assunto, setAssunto] = useState('');
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') { // verifica se o código está sendo executado no cliente
            if (window.innerWidth < 500) {
                setMobile(true);
            }
        }
    }, []);



    const handleSubmit = async (event) => {
        event.preventDefault();
        // const templateParams = {
        //     first_name: nome,
        //     last_name: sobrenome,
        //     message: assunto,
        //     email: email,
        //     title: titulo,
        //     telefone: telefone
        // };

        // await emailjs.send("service_2gt70rt", "template_51gc9pz", templateParams, "mTBzNvq9WhvcjeAgS").then((response) => {
        //     console.log('email enviado', response.status, response.text)
        // });

        toast.success('Email enviado com sucesso!', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });


    };

    return (
        <>
            <Form method="post" action="/enviar-email" onSubmit={handleSubmit}>
                <div className="box outerBox">
                    <div className="box container-menor">
                        <label>
                            Nome:
                            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                        </label>
                        <label>
                            Sobrenome:
                            <input type="text" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
                        </label>
                    </div>

                    <div className="box container-menor">
                        <label>
                            E-mail:
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <label>
                            Telefone:
                            <input type="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                        </label>
                    </div>

                    <label>
                        Assunto:
                        <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    </label>
                    <label>
                        Descrição:
                        <textarea type="assunto" value={assunto} onChange={(e) => setAssunto(e.target.value)} />
                    </label>
                    <div className="container">
                        <button type="submit">Enviar</button>
                        {mobile ?
                            <a href="https://wa.me/46991071608" className="text-number">
                                <IoLogoWhatsapp className="icon" alt="chat-whatsapp" />
                            </a> : null
                        }
                    </div>
                </div>
            </Form>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
        </>
    )
}
