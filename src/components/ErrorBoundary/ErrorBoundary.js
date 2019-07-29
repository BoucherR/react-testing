import React, { Component } from './node_modules/react'

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch =  (error, info) => {
        this.setState( {
            hasError: true,
            errorMessage: error
        } )
    }

    render() {
        // If you have an error, return the error message. Else, return the children
         return this.state.hasError ? 
            <h1>this.state.errorMessage</h1> : this.props.children;
    }
}

export default ErrorBoundary;