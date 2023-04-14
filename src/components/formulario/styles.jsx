import styled from "styled-components";
export const Form = styled.form`
display: flex;
z-index: 2;
.box {
    display: flex;
    flex-direction: column;
    background-color: #F2EEE5;
    border-radius: 10px;
    width: 400px;
    padding: 10px;
    justify-content: center;
    align-items: center;
}

label {
  font-size: 24px;
  color:  var(--tertiary-logo);
  width: 360px;
  text-align: center;
}

input,
textarea {
  width: 100%;
  border: none;
  padding: 4px;
  font-size: 16px;
  background-color: #F2EEE5;
  border-bottom: solid 2px #3C2505;
  border-radius: 4px;
  margin-bottom: 10px;
}



textarea {
    resize: none; 
    height: 100px; 
    max-height: 150px;
    margin-top: 10px;
    border: none;
    box-shadow: #3C2505 0px 0px 0px 2px;
   
  }

button[type="submit"] {
  background-color: var(--tertiary-logo);
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

button[type="submit"]:hover {
  filter: brightness(1.2);
  scale: 1.1;
}

.container {
  display: flex;
  gap: 30px;
}

a {
display: flex;
align-items: center;
scale: 1.6;
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


.container-menor {
  display: flex;
  width: 100%;
  border: none;
  flex-direction: row;
  gap: 20px;
  margin-top: 0px;

}

.container-menor > label {
  width: 180px;
}


@media (max-width:  1100px)
{
  .box {
    width: 300px;
  }

  label {
    width: 280px;
  }

  textarea {
    resize: none; 
    height: 150px; 
    max-height: 80px; 
  }
}

`