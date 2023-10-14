import React, {useEffect, useState} from 'react';
import {mainTheme} from "./styles/Theme";
import styled from "styled-components";
import {Button} from "./components/Button.styled";
import {Card} from "./components/Card.styled";
import mainPicture from "./images/hero.jpg";
// import TestComponent from "./components/TestComponents";
// import AppClassComponent from './AppClassComponent';


const textFirst = "Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.";


function App() {
    const [text, setText] = useState(textFirst)

    useEffect(() => {
        alert("Перевожу текст на другой язык")
    }, [text])

    // const onButtonClick = () => {
    //     alert('Всем привет!');
    // }

    const onChangeText = () => setText('Простите, но я не смог перевести данный текст :(');

    const onChangeFirstText = () => setText(textFirst);

    return (
        <Album>
            <Card>
                <img src={mainPicture} alt={"Hero"}/>
                <h3>Headline</h3>
                <p>{text}</p>
                {/*<Button background={mainTheme.colors.blue} onClick={onButtonClick}>See more</Button>*/}
                <Button background={mainTheme.colors.blue} onClick={onChangeText}>Перевести</Button>
                <Button background={mainTheme.colors.transparent} onClick={onChangeFirstText}>Вернуть</Button>
            </Card>
            {/*<TestComponent />*/}
            {/*<AppClassComponent />*/}
        </Album>
    );
}

export default App;

const Album = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media ${mainTheme.media.tablet} {
    flex-direction: column;
  }
`