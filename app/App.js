
var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./components/Nav');
var Home = require('./components/Home');
var Battle = require('./containers/Battle');
var Popular = require('./containers/Popular');
var Results = require('./containers/Results');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Nav />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/battle/results' component={Results} />
            <Route path='/popular' component={Popular} />
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;