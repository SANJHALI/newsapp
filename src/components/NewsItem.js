import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,url}=this.props;
    return (
      <div>
        <div className="card" style={{width:"18 rem"}}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a rel="noreferrer" href={url} target="_blank" className="btn btn-dark">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
