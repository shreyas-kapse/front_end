import React from 'react'

export default function Singlebox(props) {
    return (
        <div><div className="card " style={{ width: '18rem',padding:'20px,',margin:'10px',marginTop:'60px',marginBottom:'20px'}}>
            <img src={props.imgsrc} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">{props.title} {props.cnt} views</p>
                <a href={props.url} className="btn btn-primary">Play</a>
            </div>
        </div></div>
    )
}
