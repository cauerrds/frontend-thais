import styled from "styled-components";
export const ContainerValores = styled.div`
width: 100vw;
height: calc(100vh - 100px);
padding-top: 60px;
background-color: #f2eee5;

display: flex;
flex-direction: column;
justify-content: space-around;

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
}

.icon {
  height: 80px;
  width: 80px;
  border: solid 1px ;
  border-radius: 8px;
  padding: 4px;
  box-shadow: #89857A 0px 30px 40px -16px inset, rgba(0, 0, 0, 0.1) 0px 18px 36px -18px inset;
}

div {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

div > p {
  width: 300px;
  font-size: 22px;
}


@media (max-width: 900px)

{
  background: rgb(242,238,229);
background: linear-gradient(180deg, rgba(242,238,229,1) 0%, rgba(60,37,5,1) 98%);
  .container {

    flex-direction: column;
    gap: 20px;
    align-items: center;

  }

  .humanizado {
    order: 3;
  }
  
  .consumidor {
    order: 2;
  }

  .container > div {
    display: flex;
    flex-direction: row;
    animation: myAnim 1s ease 0s 1 normal forwards;
   
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

  h1 {
    font-size: 18px;
  }
  
  p {
    display: none;
  }

}

.humanizado {
  padding-right: 10px;
}

.text {
  width: 270px;
  font-size: 16px;
}


`

export const ContainerJustiça = styled.div`
h1 {
  color: #3c2505;
  font-size: 80px;
}

@media (max-width:  900px)
{
  h1 {
    font-size: 32px;
  color: #FFF;
  }


}



`