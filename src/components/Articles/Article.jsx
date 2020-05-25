import React from 'react';
import styles from './Article.module.css';
import { Loading } from '../Loading';

class Article extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        news: []
      }
    }
    componentDidMount() {
      fetch('https://cryptic-ravine-96718.herokuapp.com/')
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      this.setState({ 
        news: myJson.news
      })
    });
    }
    
  render(){
    if (this.state.news.length===0) {
      return <Loading/>
    }
    else return(
    <div className={styles.wrap}>
        <h1>ACTUALITE</h1><br/>
        
        {this.state.news.map((item, index) => {
          return (
            <div className={styles.container}>
              <img src={item.img} alt={item.title}/>
              <h2>{item.title}</h2>
              <a href={item.link} target="_blank">Lire la suite</a>
            </div>
          )
        })
      }
  </div>
  );}
}


export default Article;
