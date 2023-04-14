import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { StyledHeader, ContainerHeader } from "./styles"
import prancheta from "../../../public/assets/prancheta.jpg"

export default function Header() {
    const [screenHeight, setScreenHeight] = useState(0);
    const [mobile, setMobile] = useState(true);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 900) {
                setMobile(false);
            } else {
                setMobile(true);
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    function goToScreen(screenNumber, size) {
        let scrollTop = screenHeight * (screenNumber - 1) - (mobile && size ? size : 100);
        (!mobile && screenNumber === 3) ? scrollTop = screenHeight * (screenNumber - 1) - 200 : null;
        window.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        setScreenHeight(window.innerHeight);
        function handleResize() {
            setScreenHeight(window.innerHeight);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <StyledHeader>
            <Image
                src={prancheta}
                width={400}
                height={400}
                alt='prancheta'
                className="prancheta"
                quality={100}
            />
            <ContainerHeader>
                <p onClick={() => goToScreen(1)} className="text-underline">
                    Home
                </p>
                <p onClick={() => goToScreen(2, 300)} className="text-underline">
                    Quem Somos
                </p>
                <p onClick={() => goToScreen(3, 400)} className="text-underline">
                    Fale Conosco
                </p>
            </ContainerHeader>

        </StyledHeader>
    )
}
