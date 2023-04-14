import styled from "styled-components";
export const AsideForm = styled.aside`
display: flex;
flex-direction: column;
font-size: 22px;
align-items: center;
gap: 20px;

`

export const Container = styled.div`
display: flex;
flex-direction: column;
background-color: #F2EEE5;
color: var(--tertiary-logo);
padding: 20px;
max-height: 180px;
border: 1px solid var(--cor-borda);
border-radius: 8    px;
align-items: center;
justify-content: space-around;


.iconMail {
    color: #89CFF0;
}

h1 {
    text-align: center;
}

a {
    color: black;
    display: flex;
    align-items: center;
}

a:hover {
    animation: myAnim 1s ease 0s 1 normal forwards;

}

@keyframes myAnim {
	0% {
		transform: scale(1);
	}

	100% {
		transform: scale(1.1);
	}
}

.text-number {
    text-decoration: none;
 }

 @media (min-width:  1100px)
{
height: 220px;

}





`