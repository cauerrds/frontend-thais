import React from 'react'
import { QuemSomos } from "@/styles/quem-somos.styles"
import ValoresCultura from "@/components/valoresCultura/ValoresCultura"
import BackGround from '@/components/backGround/BackGround'

export default function Page2() {
    return (
        <QuemSomos id="page2">
            <BackGround/>
            <ValoresCultura/>
        </QuemSomos>
    )
}
