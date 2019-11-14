import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Home, About, Gallery, PostListPage} from '../pages';
import Menu from '../components/Menu';

class App extends Component {
    render(){
        return (
            <div>
                <Menu/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route path="/about:name" component={About}/>
                <Route path="/gallery" component={Gallery}/>
                <Route path="/posts" component={PostListPage}/>
            </div>
        );
    }
}

export default App;