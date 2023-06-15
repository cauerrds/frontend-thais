import styled from "styled-components";
export const FaleConosco = styled.main`
height: calc(100vh - 100px);
background-image: url("../assets/cidade.png");
background-size: cover;
background-position: center center;

display: flex;
flex-direction: column;

.container-form {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom:20px;
}

.mapContainer{
    border: 5px solid rgb(242, 238, 229);
    width: 100%;
    max-width: 400px;
}

svg {
    margin-right: 5px;
    color: var(--primary-whatsapp)
}


@media (max-width:  1100px)
{
    height: inherit;
    padding-top: 20px;
    padding-bottom: 20px;
    div {
        margin-top: 0;

    }


    .container-form{
        flex-direction: column;
        gap: 10px;
    }

    .mapContainer{
        border: none;
        padding: 5px;
    }
}


`