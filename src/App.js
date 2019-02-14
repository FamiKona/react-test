import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PubNubReact from 'pubnub-react';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(props) {
    super(props);

    this.pubnub = new PubNubReact({
      publishKey: 'pub-c-cf8c7c85-ff0b-48de-94c1-6d24a333eafd',
      subscribeKey: 'sub-c-8460fe66-2ff0-11e9-9089-0a173ec63317'
    });

    this.pubnub.init(this);

    this.state = {
      headerText: "Yo! Pressed: ",
      clickCount: 0,
      isBulbOn: true
    }
  }

/*   componentWillMount() {
    this.pubnub.subscribe({
      channels: ['Default'],
      withPresence: true
    });

    this.pubnub.getMessage('Default', (msg) => {
      console.log(msg);
    });

    this.pubnub.getStatus((st) => {
      this.pubnub.publish( {
        message: 'hi!',
        channel: 'Default'
      });
    });
  } */

  render() {
    console.log("yeet!")
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo, spinning at approx 2RPM" />
          <p>
            {this.state.headerText + this.state.clickCount}
          </p>
          <a
            className="App-link"
            href="https://youtu.be/_zB1HelWFNw?t=21"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button onClick={() => {
            console.log('haaaaaaaaa u kno it');
            this.setState({
              clickCount: this.state.clickCount + 1,

            })
            console.log(this.state.clickCount);
          }}
            variant='contained'
            color='primary'>
            hell yea
          </Button>
          <Button onClick={() => {
            this.setState({
              clickCount: this.state.clickCount - 1,
            })
            console.log(this.state.clickCount);
          }}
            variant='contained'
            color='default'>
            hell nah
          </Button>
        </header>
      </div>
    );
  }
}

export default App;
