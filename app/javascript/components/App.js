import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import Cart from './Cart'

class App extends React.Component {
	render () {
		return (
			<div>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/product" component={Product} />
						<Route exact path="/cart" component={Cart} />
					</Switch>
			</div>
        )
    }
}
export default App
