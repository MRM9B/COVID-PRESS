import React from 'react';

import { Cards, CountryPicker, Chart,Nav,Article } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import Post from './components/Posts/Post'

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <>
      <Nav/>
      <div className={styles.hero}>
        <div className={styles.leftside}>
          <Post/>
        </div>
        <div className={styles.container}>
            <h1>COVID-19 : Suivi Des Cas</h1><br/>
            <CountryPicker handleCountryChange={this.handleCountryChange} />
            <Cards data={data} />
            <Chart data={data} country={country} /> 
            <hr/>
            <Article/>
        </div>
        <div className={styles.rightside}>
          <Post/>
        </div>
      </div>

      </>
    );
  }
}

export default App;