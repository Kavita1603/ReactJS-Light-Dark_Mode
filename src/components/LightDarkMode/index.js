// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isLightDarkMode: false}

  onChangeMode = () => {
    this.setState(prevState => ({isLightDarkMode: !prevState.isLightDarkMode}))
  }

  getButtonText = () => {
    const {isLightDarkMode} = this.state

    return isLightDarkMode ? 'Dark Mode' : 'Light Mode'
  }

  render() {
    const buttonText = this.getButtonText()

    const {isLightDarkMode} = this.state

    const modelClassName = isLightDarkMode ? 'lightmode' : 'darkmode'

    const headingClassName = isLightDarkMode ? 'heading-light' : 'heading-dark'

    return (
      <div className="main-container">
        <div className={`container ${modelClassName}`}>
          <h1 className={`container ${headingClassName}`}>
            Click To Change Mode
          </h1>
          <button className="btn" type="button" onClick={this.onChangeMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
