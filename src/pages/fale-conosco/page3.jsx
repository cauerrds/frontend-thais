import React, { useEffect, useState } from 'react'
import { FaleConosco } from "@/styles/fale-conosco.styles"
import Formulario from "@/components/formulario/Formulario"
import AsideFormulario from "@/components/aside-formulario/AsideFormulario"
import dynamic from 'next/dynamic'

export default function Page3() {
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        window.innerWidth > 500 ? setMobile(true) : null;

    }, [])

      const Map = dynamic(
        () => import('@/components/map/Map'), 
        { ssr: false }
        )

    return (
        <FaleConosco id="page3" >
            <div className="container-form" >
                <Formulario></Formulario>

                {mobile ? <AsideFormulario></AsideFormulario> : null}
            </div>
            <Map/>
        </FaleConosco>
    )
}
