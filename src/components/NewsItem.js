import React from 'react'
import defaultImg from '../media/Newsjunky.png'

const NewsItem = (props) => {
    let { title, description, multimedia, newsUrl, author, date, source } = props;
    return (
        <div className='my-3' >
            <div className="card">
                <div>
                    <span className="badge rounded-pill bg-danger">{source}</span>
                </div>
                <div id='c-img-wrapper'>
                    <img src={multimedia ? `https://www.nytimes.com/${multimedia.url}` : `${defaultImg}`} className="card-img-top" id='c-img' alt="img" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small classsName="text-muted">{author ? author : 'Unknown'} on {new Date(date).toLocaleString({ timeZone: 'Asia/Kolkata' })} IST</small></p>
                    <a href={newsUrl} target='__blank' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem



// {new Date(date).toGMTString()}
