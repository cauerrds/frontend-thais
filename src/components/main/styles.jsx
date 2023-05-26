import styled from "styled-components";


export const Container = styled.main`
width: 100%;
background-color: #F2EEE5;

.box {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
}

color: #3C2505;
`

export const Aside = styled.aside`
display: flex;
flex-direction: column;
align-items: flex-start;
z-index: 2 ;
height: 60vh;



.titulo {
    font-size: 100px;
}

.conteudo {
    font-size: 58px;
    font-family: 'GFS Didot', serif;
    font-style: italic;

}


span {
    font-size: 58px;
}

u {
    
text-decoration-color: var(--tertiary-logo);
}


@media (max-width:  1100px){
    height: inherit;
}
`



export const StyledMain = styled.main`
display: flex;
padding-top: 200px;

.bg-image {
    width: 100vw;
    height: 100vh;
    position: absolute;
}



.container-icon {
    display: flex;
    align-items: center;
    justify-content: center;
}

h1 {
    font-size: 26px;
    text-align: center;

}

p {
    padding: 0 30px 0 30px;
}

.icon {
    color: var(--primary-whatsapp);
    margin-right: 10px;
}

@media (max-width: 1100px){

    .icon {
        animation: scale 1s ease-in-out infinite;

    }
    @keyframes scale {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.2);
        }
        100% {
          transform: scale(1);
        }
      }
}




a {
    padding: 10px;
    font-family: 'MyFont', sans-serif;
    display: flex;
    color: #3C2505;
    border-radius: 5px;
    padding: 10px 20px;
    text-decoration-color: var(--tertiary-logo);
    font-size: 42px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
}

a:hover {
    scale: 1.2
  }


  @media (max-width:  1100px){
    padding-top: 100px;

    .bg-image {
        position: absolute;
    }

    .conteudo, span, .titulo {
        font-size: 48px;
    }

    

  }

`

