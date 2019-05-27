// importing React, and Component from library 'react'
import React, {Component} from 'react';
// importing home and Header Component in App component
import Home from './Home';
import Header from './Header';

// function formatName that has the user as an argument
function formatName(user){
    return user.firstname + ' ' + user.lastname;
}
// user list
const user={
    firstname: "Akhil",
    lastname: "Chhetri",
    avatarUrl:"http://archives.frederatorblogs.com/random/files/2008/04/b-corrupted-by-random-noise-bit-error-rate0020.thumbnail.gif",
    hobbies:['cricket', 'footballl', 'coding', 'travelling']
}

//creating App component
class App extends Component{
    // Constructor is needed for App component to save the state 
    constructor(){
        super();
        this.state={
            homeLink:"Home"
        };
    }
    // function onGreet
    onGreet(){
        alert("Hello");
    }
    onChangeLinkName(newName){
        this.setState({
            homeLink:newName
        });
    }
    // render function
    render(){
       return(
        <div>
            <div className="container">
                 <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home 
                            age={15} 
                            user={user}
                            greet={this.onGreet}
                            changeLink={this.onChangeLinkName.bind(this)}
                            />
                    </div>
                </div>
            </div>
        </div>
       ); 
    }
}
export default App;