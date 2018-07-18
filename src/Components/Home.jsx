import React from 'react';
import axios from 'axios';
const apiClient = axios.create()

class Home extends React.Component {

    state = {
        joke:"",
        loading: true
    }

    componentDidMount() {
        apiClient({ method: 'get', url: 'http://api.icndb.com/jokes/random' })
        .then((apiResponse) => {
            console.log(apiResponse.data)
            const randomJoke = apiResponse.data.value.joke
            this.setState({ joke: randomJoke, loading: false })
        })
    }

    render() {
        // if(this.state.loading) return <h2>Loading...</h2>
        return (
            <div className="Home">
                <h1>HOME PAGE</h1>
                {this.state.loading
                ? <h4>Loading...</h4>
                : <h4>{this.state.joke}</h4>
                }
                
            </div>
        )
    }
}

export default Home