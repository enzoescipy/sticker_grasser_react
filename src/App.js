import React, { Component } from 'react';

class App extends Component {
    state = {
        posts: [],
        isDev:"???"
    };

    async componentDidMount() {
        try {
            var api = ""
            if (process.env.NODE_ENV === "development") {
                api = "http://127.0.0.1:8000/api/"
            } else {
                api = "http://132.226.231.47:8000/api/"
            }
            const res = await fetch(api);
            const posts = await res.json();
            this.setState({
                posts
            })

        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                {this.state.posts.map(item => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <span>{item.content}</span>
                    </div>
                ))}
                <span>{process.env.NODE_ENV}</span>
            </div>
        );
    }
}

export default App;
