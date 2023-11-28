import React, {Component, Fragment} from "react";
import { withTranslation } from 'react-i18next'

class ErrorBoundary extends Component {
	constructor(props) {
		super(props)

		this.state = {
			hasError: false,
		}
	}

	static getDerivedStateFromError(error) {
    return { hasError: true }
  }

	componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo })
  }

  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button>
        </div>
      )
    }
  
    return this.props.children
  }
}

export default withTranslation('error')(ErrorBoundary)
