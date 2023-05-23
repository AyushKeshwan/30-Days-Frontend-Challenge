function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="card-img" alt=""/>
            <h1>{props.title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolorem optio quaerat.</p>
        </div>
    )
}

export default Card