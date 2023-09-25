import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    state = {
        isDev:"???",
        api:""
    };

    async componentDidMount() {
        try {
            var api = "";
            var isDev = false;
            if (process.env.NODE_ENV === "development") {
                api = "http://127.0.0.1:8000/";
                isDev = true;
            } else {
                api = "http://132.226.231.47:8000/";
            }
            this.setState({
                api:api,
                isDev:isDev
            });

        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                {/* {this.state.posts.map(item => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <span>{item.content}</span>
                    </div>
                ))} */}
                <span>{this.state.isDev ? "Development!" : "Production!"}</span>
            </div>
        );
    }
}

export default App;
