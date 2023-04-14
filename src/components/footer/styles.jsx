import styled from "styled-components";


export const StyledFooter = styled.footer`
width: 100%;
background-color: var(--primary-logo);
color: white;
display: flex;
height: 100px;
justify-content: center;
align-items: center;
font-size: 26px;
border-top: solid 1px rgba(254,248,228,1);
position: sticky;
bottom: 0px;


@media (max-width: 900px)
{
 font-size: 18px;
 padding: 10px;
}

`