import React from "react";
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

export default class Test extends React.Component {
    state = {
        myTimer: null,
        count: 3,
        text: ""
    }

    handleClickStart = () =>
    {
        recognition.start();
        console.log("started")
        recognition.onresult = (event) => {
            this.setState({text: event.results[0][0].transcript.toLowerCase()})
        }
    }

    handleClickEnd = () => {
        recognition.stop();
        console.log("stopped")
    }

    countdown = () => {
        this.setState({count: this.state.count - 1})
    }

    startTimer = () => {
        this.setState({myTimer: setInterval(this.countdown,1000)})
    }

    stopTimer = () => {
        clearInterval(this.state.myTimer)
    }

    handleTimer = () => {
        this.setState({count: 3})
        this.startTimer()
        recognition.start();
        setTimeout(() => {
            alert("recording stopped")
            recognition.stop();
        }, 3000);
        recognition.onresult = (event) => {
        this.setState({text: event.results[0][0].transcript.toLowerCase()})
        }
    }

    render(){
        if (this.state.count <= 0){this.stopTimer()}
        return <div>
            <button onClick={this.handleClickStart}>TRANSCRIBE TO TEXT</button>
            <button onClick={this.handleClickEnd}>STOP</button><br></br><br></br>
            <button onClick={this.handleTimer}>START 3 SECOND TIMER TO TRANSCRIBE</button>
            <h1>Timer for recording: {this.state.count}</h1>
            <h1>Text comes out under here</h1>
            <h2>{this.state.text}</h2>
        </div>
        
    }
}
