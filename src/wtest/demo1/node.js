import React from 'react';
import ReactDOM from 'react-dom';
import * as actions from './actions.js';


export class Node extends React.Component {
  handleIncrementClick = () => {
    const { increment, id } = this.props;
    increment(id)
  }
  handleAddClick = (e) => {
    e.preventDefault();
    const { addChild, createNode, id } = this.props;
    const childId = createNode().nodeId;
    addChild(id, childId)
  }
  handleRemoveClick = (e) => {
    e.preventDefault();
    const { removeChild, deleteNode, parentId, id } = this.props;
    removeChild(parentId, id)
    deleteNode(id)
  }
  renderChild = (childId) => {
    const { id } = this.props;
    return (
      <li key={childId}>
        <ConnectedNode id={childId} parentId={id} />
      </li>

    )
  }
  render() {
    const { counter, parentId, childId } = this.props;
    return (
      <div>
        Counter:{counter}
        {' '}
        <button onClick={this.handleIncrementClick} >
          +
        </button>
        {' '}
        {
          typeof parentId !== 'undefined' &&
          <a href='#' onClick={this.handleRemoveClick}
            style={{ color: 'lightgray', textDecoration: 'none' }} >
            X
            </ a>
        }
        <ul>
          {childId.map(this.renderChild)}
          <li key='add'>
            <a href='#'
              onClick={this.handleAddClick}
            >
              Add addChild
              </a>
          </li>
        </ul>
       </div>
    )
  }
}

function mapStateToProps(state,ownProps){
  return state[ownProps.id]
}

const ConnectedNode=connect(mapStateToProps,actions)(Node)
export default ConnectedNode;