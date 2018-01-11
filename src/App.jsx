import React from "react";

import AsyncComponent from './AsyncComponent'

export default class extends React.Component {

  constructor() {
    super()
    this.state = {
      ComponentList: [],
      inputValue: 'Home'
    }
  }

  handleAddComponent = (e) => {
    this.setState({
      ComponentList: this.state.ComponentList.concat(this.state.inputValue)
    })
  }

  render() {
    return (
      <div>
        <div>
          <fieldset>
            <label>组件名称</label>
            <input type="text" value={this.state.inputValue} onChange={e => this.setState({ inputValue: e.target.value })} />
          </fieldset>
          <button onClick={this.handleAddComponent}>新增组件</button>
        </div>
        {
          this.state.ComponentList.map((item, key) => {
            return <AsyncComponent path={item} key={key.toString()}></AsyncComponent>
          })
        }

      </div>
    )
  }
}