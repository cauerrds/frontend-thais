import styled from "styled-components";
import estatua from "../../../public/assets/estatua.jpg"


export const Container = styled.main`
width: 100%;
background-color: #F2EEE5;
background-image: url(${estatua.src});
background-repeat: no-repeat; /* Do not repeat the image */
background-size: cover; /* Resize the background image to cover the entire container */

.box {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
}

color: var(--primary-white);
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
    font-family: 'Great Vibes', cursive;
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

.bg-image {
    width: 100vw;
    height: 100vh;
    position: absolute;
}



.container-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Great Vibes', cursive;
    align-self: flex-end;

}

h1 {
    font-size: 26px;
    text-align: center;

}

p {
    margin-top: 120px;
    padding: 0 30px 0 30px;

    @media (max-width: 1100px) {
        margin-top: 0;
    }
}

.icon {
    color: var(--primary-whatsapp);
    margin-right: 10px;
}

@media (max-width: 1100px){

    .icon {
        animation: scale 1s ease-in-out infinite;

    }

    .container-icon {
        justify-content: end;
        width: 100%;
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
    color: var(--primary-white);
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

    span, .titulo {
        align-self: flex-end;
        padding-inline-end: 5px;
        font-size: 48px;
    }

    .conteudo{
        font-size: 48px;
        text-align: end;
        padding-right: 10px;
    }

    

  }

`

