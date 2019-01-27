import React, {Component} from 'react';
import {ListItem, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

class TechnologyItem extends Component<TechnologyItemProps, {}> {

  render() {
    return (
        <ListItem>
          {this.props.index + 1}. {this.props.item}
          <IconButton aria-label="Delete" onClick={() => this.props.handleDelete(this.props.index)}>
            <DeleteIcon fontSize="small"/>
          </IconButton>
        </ListItem>
    )
  }
}

export default TechnologyItem;

interface TechnologyItemProps {
  item: string;
  index: number;
  handleDelete: any;
}