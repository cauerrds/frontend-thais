import React, { useEffect, useState } from 'react'
import { FaleConosco } from "./styles"
import Formulario from "@/components/formulario/Formulario"
import AsideFormulario from "@/components/aside-formulario/AsideFormulario"

export default function Page3() {
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        window.innerWidth > 500 ? setMobile(true) : null;

    }, [])



    return (
        <FaleConosco>
            <div className="container-form">
                <Formulario></Formulario>

                {mobile ? <AsideFormulario></AsideFormulario> : null}
            </div>
        </FaleConosco>
    )
}
