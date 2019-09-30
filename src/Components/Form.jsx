import React from 'react';

class Form extends React.Component {
  render() {
    return (
        <div>
          <form onSubmit={this.props.counter}>
            <input
                type="text"
                value={this.props.name}
                onChange={this.props.handleChange}
            />
            <button type="submit"> Click Me! </button>
          </form>

        </div>
    );
  }
}


export default Form;
