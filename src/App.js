import logo from './logo.svg';
import './App.css';

import { React, useEffect,useState } from "react";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import * as subscriptions from "./graphql/subscriptions";
import * as mutations from "./graphql/mutations";
import * as AwsExports from "./aws-exports";

Amplify.configure(AwsExports);

function App() {
  
  const [send, setSend] = useState("");
  const [received, setReceived] = useState("");
  
  let channel = "robots";
  let data = "";
  
  //Publish data to subscribed clients
  async function handleSubmit(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    const publish = await API.graphql(
      graphqlOperation(mutations.sendMessage, { name: channel, data: send })
    );
    setSend("Enter TEXT here...");
  }
  
  useEffect(() => {
    //Subscribe via WebSockets
    const subscription = API.graphql(
      graphqlOperation(subscriptions.onSendMessage, { name: channel })
    ).subscribe({
      next: ({ provider, value }) => {
        setReceived(value.data.onSendMessage.data);
      },
      error: (error) => console.warn(error),
    });
    return () => subscription.unsubscribe();
  }, [channel]);

  if (received) {
    data = received;
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Send TEXT to channel "{channel}" ...
        </p>
        <form onSubmit={handleSubmit}>
          <textarea
              rows="5"
              cols="60"
              name="description"
              onChange={(e) => setSend(e.target.value)}
            >
            Enter TEXT here...
          </textarea>
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>Subscribed/Listening to channel "{channel}"...</p>
        <pre>{data}</pre>
      </header>
    </div>
  );
}

export default App;
