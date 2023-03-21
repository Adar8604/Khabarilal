import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9213058bc39d49d38bbfaab2d82a057e&page=1pageSize=15";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    }

    HandlePrev = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9213058bc39d49d38bbfaab2d82a057e&page=${this.state.page - 1}&pageSize=15`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        });
    }

    HandleNext = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 15)) { }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=9213058bc39d49d38bbfaab2d82a057e&page=${this.state.page + 1}&pageSize=15`;
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            });
        }
    }
    render() {
        return (
            <div className='container my-3 '>
                <h1 className='mx-2 text-danger fw-bold'>Khabari-Lal Top HeadLines</h1>

                <div className='row '>
                    {this.state.articles?.map((element) => {
                        return <div className='' key={element.url}>
                            <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0) : ""} imageurl={element.urlToImage} newsurl={element.url} />
                        </div>

                    })}

                </div>
                <div className='container d-flex justify-content-between my-3 '>
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-secondary" onClick={this.HandlePrev}>&larr; Previous </button>
                    <button type="button" className="btn btn-secondary" onClick={this.HandleNext}>Next &rarr;</button>
                </div>

            </div>
        )
    }
}

export default News
