import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import PostList from './PostList';

function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/posts" component={PostList} />
      </Switch>
    </Router>
  );
}

export default Main;
