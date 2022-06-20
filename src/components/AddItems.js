import React from "react";

//In class Component we use this.state /this.props
class AddItems extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            productName:"",
            productPrice:0,
        };
    }
  state = {};
  render() {
    return (
      <div>
        <form className="row mb-5" onSubmit={(e)=>{
            e.preventDefault();
            this.props.addItem(this.state.productName,Number(this.state.productPrice));
          }}>
          <div className="mb-3 col-4">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              aria-describedby="name"
              name="productName"
              onChange={(e)=>{
                this.setState({productName: e.currentTarget.value})
              }}
              value={this.state.productName}
            />
          </div>
          <div className="mb-3 col-4">
            <label htmlFor="inputPrice" className="form-label">
              Price
            </label>
            <input type="number" className="form-control" id="inputPrice"  name="productPrice" onChange={(e)=>{
                this.setState({productPrice: Number(e.currentTarget.value)})
              }}
              value={this.state.inputPrice}
              />
          </div>
          <button type="submit" className="btn btn-dark text-white col-2">
            Add Item
          </button>
        </form>
      </div>
    );
  }
}

export default AddItems;
