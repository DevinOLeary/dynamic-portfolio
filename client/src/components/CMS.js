import React from 'react';

class CMS extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      category: '',
      location: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    let value = e.target.value;
    let name = e.target.name;
    this.setState({[name]: value});
  }
  render(){
    return(
      <div>
        <form
        ref='uploadForm'
        id='uploadForm'
        action='/about'
        method='post'
        encType="multipart/form-data"
        className="flex-container column center"
        >
          <h5>Category</h5><input type="text" name="category" value={this.state.category} onChange={this.handleChange}/>
          <h5>Location</h5><input type="text" name="location" value={this.state.location} onChange={this.handleChange}/>
          <h5>Description</h5><input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
          <h5>Image</h5><input type="file" name="imageFile"/>
          <input type="submit" value="Upload"/>
        </form>
      </div>
    );
  }
}

export default CMS;
