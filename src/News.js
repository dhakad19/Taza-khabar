import React, { Component } from 'react'
import Newsitems from './Newsitems'
import PropTypes from 'prop-types'

export class News extends Component {
    static defualtProps={
         country:'in',
         category:'general'
         
    }
    static propTypes={
           country: PropTypes.string,
           category:PropTypes.string
    }
     constructor(){
         super();
         console.log("constructore")
         this.state={
            articles: [],
            page: 1
            //loading: false
         }
     }
    async componentDidMount(){
        console.log("cdm")
          let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e2581897f3f242b58e38f9bfbbdf15dd&page=1&pagesize=15`
          let data=await fetch(url);
          let parseData= await data.json()
          console.log(parseData)
          this.setState({ articles: parseData.articles })
        }
        handlenext=async ()=>{
            console.log("nex")
            let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e2581897f3f242b58e38f9bfbbdf15dd&page=${this.state.page+1}&pagesize=15`;
          let data=await fetch(url);
          let parseData= await data.json()
          console.log(parseData)
          
            this.setState({
                page:this.state.page+1,
                articles: parseData.articles
            })
        }
        handleprev=async()=>{
             console.log("prev")
             let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e2581897f3f242b58e38f9bfbbdf15dd&page=${this.state.page-1}&pagesize=15`;
          let data=await fetch(url);
          let parseData= await data.json()
          console.log(parseData)
          
            this.setState({
                page:this.state.page-1,
                articles: parseData.articles
            })
        }
    render() {
        return (
            <div className="container my-3">
                <h1 className="headline">Tazakhabar-Top Headlines</h1>
                <div className="row">
                {this.state.articles.map((element)=>(
                        <div className="col md-4" key={element.url}>
                            <Newsitems  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,82):""}
                             imageurl={element.urlToImage?element.urlToImage:"https://images.hindustantimes.com/img/2022/06/28/1600x900/bloom_1656376690404_1656376697878.jpg"} newsurl={element.url} />
                        </div>
                  ))}
                </div>
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1}type="button" className="btn btn-info  btn1" onClick={this.handleprev}> &larr;PREVIOUS</button>
                <button type="button" className="btn btn-info  btn1" onClick={this.handlenext}>NEXT&rarr;</button>
                </div>
            </div>



        )
    }
}

export default News