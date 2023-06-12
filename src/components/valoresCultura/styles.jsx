import styled from "styled-components";

export const ContainerValores = styled.div`
width: 100vw;
height: calc(90vh - 100px);
padding-top: 60px;
background-color: #f2eee5;

display: flex;
flex-direction: column;
justify-content: space-around;


.content{
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  column-gap: 10px;

  .carousel-wrapper{
    height: 50%;
    max-width: 100%;
    padding: 5px;

    .control-next.control-arrow::before{
      border-left: 8px solid black;
    }
    
    .control-prev.control-arrow::before{
      border-right: 8px solid black;
    }

  }

  p {
    margin-bottom: 10px;
  }

  img {
    height: 80%;
    border-style: outset;
    border-color: var(--primary-logo);
  }
}


@media (max-width: 900px){
  background: rgb(242,238,229);

  .content > img {
    display: none;
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

`

export const ContainerJustiça = styled.div`
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