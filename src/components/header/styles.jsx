import styled from "styled-components";
export const StyledHeader = styled.header`
font-size: 28px;
background: rgb(114,0,51);
background: linear-gradient(270deg, rgba(114,0,51,1) 0%, rgba(93,0,37,1) 19%, rgba(64,0,27,1) 59%);
height: 100px;
display: flex;
align-items: center;
gap: 5px;
width: 100%;
z-index: 5;
justify-content: space-between;
padding-left: 60px;
padding-right: 60px;
overflow: hidden;
border-bottom: solid 1px rgba(254,248,228,1);
margin-bottom: 80px;
position: fixed;
top: 0;

p {
  cursor: pointer;
}
@media (max-width: 1100px){
  background: var(--primary-logo);
}


@media (max-width:  1100px)
{
  .prancheta {
    display: none;
  }
}

span {
    color: var(--primary-black);
    cursor: pointer;

}

@media (max-width: 606px){
    justify-content: center;

    .header-name{
        display: none;
    }
}

@media (max-width: 420px){
  padding-left: 20px;
  padding-right: 20px;
  font-size: 18px;
  white-space: nowrap;
  font-weight: bold;
}

.text-underline {
    position: relative;
    text-decoration: none;
    color: var(--primary-white);
    transition: border-bottom-color 0.3s ease-in-out;
  }
  

  .text-underline:hover,
  .text-underline:active {
    border-bottom-color: var(--primary-white);
  }
  
  .text-underline::before {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -1px;
    left: 0;
    background-color: var(--primary-white);
    transition: width 0.3s ease-in-out;
  }
  
  .text-underline:hover::before,
  .text-underline:focus::before {
    width: 100%;
  }
`

export const ContainerHeader = styled.nav`
display: flex;
gap: 60px;


@media (max-width:  1100px)
{
  gap: 20px;
  width: 100%;
  justify-content: space-between
}

`