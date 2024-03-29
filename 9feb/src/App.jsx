import React, { Component } from 'react';

const withThemeToggle = (WrappedComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        theme: 'light'
      };
    }

    toggleTheme = () => {
      this.setState(prevState => ({
        theme: prevState.theme === 'light' ? 'dark' : 'light'
      }));
    };

    render() {
      return <WrappedComponent {...this.props} theme={this.state.theme} toggleTheme={this.toggleTheme} />;
    }
  };
};

const ThemedComponent = ({ theme, toggleTheme }) => {
  return (
    <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
      <h1>Themed Component</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};


export default withThemeToggle(ThemedComponent);