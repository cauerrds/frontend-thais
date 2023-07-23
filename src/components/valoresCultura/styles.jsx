import styled from "styled-components";

export const ContainerValores = styled.div`
width: 100vw;
max-width: 100vw;
min-height: calc(100vh - 100px);
//background-color: #f2eee5;
background-color: transparent;

display: flex;
flex-direction: column;
justify-content: space-around;


.content{
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  column-gap: 10px;
 
  .carousel-wrapper{
    font-family: 'Great Vibes', cursive;
    font-style: italic;
    width: 100%;
    max-width: 500px;
    padding: 5px;

    .control-next.control-arrow::before{
      border-left: 8px solid black;
    }
    
    .control-prev.control-arrow::before{
      border-right: 8px solid black;
    }

  }

  .carousel-item {
    margin-bottom: 10px;
    font-size: 28px;
  }

  img {
    height: auto;
    max-width: 386px;
    border-style: outset;
    border-color: var(--primary-logo);
  }
}

@media (max-width: 900px){
  //background: rgb(242,238,229);

  .content{
    flex-direction: column;
  }

  @keyframes myAnim {
    0% {
      opacity: 0;
      transform: translateX(-250px);
    }
  
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
}

@media (max-width: 470px) {
  .content {
    width: 100%;
    .carousel-item{
     font-size: 20px;
    }

  }
}



`

export const ContainerJustiça = styled.div`

margin-top: 20px;
margin-bottom: 20px;

h1 {
  color: #3c2505;
  font-size: 80px;
  text-align: center;
}

@media (max-width: 765px){
  h1 {
    font-size: 40px;
    text-align: center;
  }
  
}

@media (max-width: 370px){
  h1 {
    font-size: 30px;
    text-align: center;
  }
}


`