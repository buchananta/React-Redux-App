import React from 'react';
import { connect } from 'react-redux';
import { getComic, getLatest, getPrev, getNext } from '../actions';
import { Button, ButtonGroup } from '@material-ui/core';

function Buttons (props) {
  return (
<ButtonGroup variant="text" color="primary" aria-label="text primary button group">
  <Button onClick={() => props.getPrev(props.current)} >Prev</Button>
  <Button onClick={() => props.getComic(props.latest)} >Random</Button>
  <Button onClick={() => props.getNext(props.current)} >Next</Button>
  <Button onClick={props.getLatest} >Latest</Button>
</ButtonGroup>
  )
}

const mapStateToProps = (state) => {
  console.log(state.comic.num);
  return {
    latest: state.latest,
    current: state.comic.num,
  }
}

export default connect(mapStateToProps, {getPrev, getComic, getNext, getLatest})(Buttons)