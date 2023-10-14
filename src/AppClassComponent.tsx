import React from 'react';
// import styled from "styled-components";
import {Button} from "./components/Button.styled";
import {Card} from "./components/Card.styled";
import mainPicture from "./images/hero.jpg";
//
//
const textFirst = "Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.";
//
//
// function App() {
//     const [text, setText] = useState(textFirst)
//
//     useEffect(() => {
//         alert("Меняю текст")
//     }, [text])
//
//     // const onButtonClick = () => {
//     //     alert('Всем привет!');
//     // }
//
//     const onChangeText = () => setText('Здесь должен быть перевод, но его нет :(');
//
//     const onChangeFirstText = () => setText(textFirst);
//
//     return (
//         <Album>
//             <Card>
//                 <img src={mainPicture} alt={"Hero"}/>
//                 <h3>Headline</h3>
//                 <p>{text}</p>
//                 {/*<Button background={mainTheme.colors.blue} onClick={onButtonClick}>See more</Button>*/}
//                 <Button background={mainTheme.colors.blue} onClick={onChangeFirstText}>See</Button>
//                 <Button background={mainTheme.colors.transparent} onClick={onChangeText}>Save</Button>
//             </Card>
//             {/*<TestComponent />*/}
//         </Album>
//     );
// }

class AppClassComponent extends React.PureComponent {

    state = {
        text: textFirst
    }

    // componentDidUpdate (prevProps, prevState) {
    //     if (prevState.text !== this.state.text) {
    //         alert("Меняю текст");
    //     }
    // }

    onChangeText = () => this.setState({text: 'Здесь должен быть перевод, но его нет :('});

    onChangeFirstText = () => this.setState({text: textFirst});

    render() {
        const {text} = this.state;
        return (
                <Card>
                    <img src={mainPicture} alt={"Hero"}/>
                    <h3>Headline</h3>
                    <p>{text}</p>
                    {/*<Button background={mainTheme.colors.blue} onClick={onButtonClick}>See more</Button>*/}
                    <Button onClick={this.onChangeFirstText}>See</Button>
                    <Button onClick={this.onChangeText}>Save</Button>
                </Card>
        )
    }
}
export default AppClassComponent;