import React from 'react';
import { connect } from 'react-redux';


function Comic(props) {
  
  if (props.fetching) {
    return (
      <h2>Requesting Comic . . .</h2>
    )
  }

  return (
    <div className='comic-container'>
      <h2>{props.comic.title}</h2>
      <img src={props.comic.img} alt={props.comic.alt} />
      <blockquote>{props.comic.alt}</blockquote>
    </div>
  
  )
}


const mapStateToProps = (state) => {
  return {
  comic: state.comic,
  fetching: state.fetching,
  }
}

export default connect(mapStateToProps, {})(Comic);