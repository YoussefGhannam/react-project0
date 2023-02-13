import React from 'react'

class Productsitem extends React.Component {
    render() {
      return (
      <>
      <div className="card" style={{width: "18rem",marginTop:"13px",marginLeft:"15px"}}>

        <img src={this.props.product.image} className="card-img-top" alt="cat"/> 
        
        <div className="card-body">
          <h5 className="card-title">{this.props.product.title}</h5>
          <p className="card-text">Price : {this.props.product.price}$</p>
          <a href={"/Products/" + this.props.product.id} className="btn btn-primary">Details</a>

        </div>

      </div>
      </>
      )

}

}
export default Productsitem