import React from 'react';
import './App.css';
import Test from './Components/test'
import {connect} from 'react-redux'
import {likeCreator, dislikeCreator} from './Components/reducer'

let App = (props) => {
  return (
    <div className="App">
      <div className="speech-rec">
        <h1>PROOF OF CONCEPT FOR VOICE TO TEXT / SPEECH RECOGNITION</h1>
        <Test />
      </div>
      <div className="redux">
        <h1>PROOF OF CONCEPT FOR REDUX</h1>
        <h1>Likes:{props.likes}</h1>
          <button onClick={props.like}>Like</button>
          <button onClick={props.dislike}>Dislike</button>
        </div>
    </div>
  );
}

// export default App;


const msp = (state) => {
  return {
      likes: state.likes
  }
}

const mdp = (dispatch) => {
  return {
    like: () => dispatch(likeCreator()),
    dislike: () => dispatch(dislikeCreator())
  }
}

export default connect(msp,mdp)(App);