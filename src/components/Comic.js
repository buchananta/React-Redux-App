import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getComic } from '../actions';

function Comic(props) {


  useEffect(() => props.getComic(props.latest), [])
  

  if (props.fetching) {
    return (
      <h2>Requesting Comic . . .</h2>
    )
  }

  return (
    <div className='comic-container'>
      <h2>{props.comic.safe_title}</h2>
      <img
        src={props.comic.img}
        alt={props.comic.title}
        title={props.comic.alt} />
      <blockquote>{props.comic.alt}</blockquote>
    </div>
  
  )
}


const mapStateToProps = (state) => {
  return {
  comic: state.comic,
  fetching: state.fetching,
  latest: state.latest,
  }
}

export default connect(mapStateToProps, {getComic})(Comic);