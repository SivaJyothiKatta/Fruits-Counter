// Write your code here

import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {key1: 0, key2: 0}

  onIncrement = () => {
    const {key1, key2} = this.state
    this.setState({key1: key1 + 1, key2: key2 + 1})
  }

  render() {
    const {key1, key2} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="count">{key1}</span> mangoes{' '}
            <span className="count">{key2}</span> bananas
          </h1>
          <div className="image-container">
            <div className="image-card-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button
                className="eat-button"
                type="button"
                onClick={this.onIncrement}
              >
                Eat Mango
              </button>
            </div>
            <div className="image-card-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button
                className="eat-button"
                type="button"
                onClick={this.onIncrement}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
