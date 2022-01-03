import React, { Component } from 'react'


export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date } = this.props;
        return (

            <div className="my-3">
                <div className="card">
                    <img src={imageUrl ? imageUrl : "https://images.livemint.com/img/2021/11/22/600x338/Latent_View_Analytics_IPO_GMP_web_1637308505596_1637552618798.PNG"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description ? description : "To see description, please visit the link below"
                        }...</p>
                        <p className="card-text"><small className="text-muted">Published by {author ? author :"Unknown Author"} on {new Date (date).toGMTString() }</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-small btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
