import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import withStyles from '@material-ui/core/styles/withStyles';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import { Link } from 'react-router-dom';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { contactsList } from './contacts-list-mock';
import TableHead from '@material-ui/core/TableHead';

const styles = theme => ({
      container: {
        width: '100%',
        overflowX: 'auto',
      },
      headerRow: {
        textTransform: 'upperCase',
      },
      row: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.background.default,
        },
      },
      linkColumn: {
        color: theme.palette.common.black,
      },
      tableRowHover: {
        '&:hover': {
          backgroundColor: theme.palette.grey[200],
        },
      },
    }
);

const columnsNames = ['#', 'name', 'surname', 'position', 'office', 'phone', 'skype', 'corporate email', ''];
const columnsKeys = ['firstName', 'lastName', 'position', 'office', 'phoneOne', 'skype', 'email'];

class ContactsList extends Component {
  state = {
    order: 'asc',
    orderBy: 'calories',
  };

  render() {
    const {classes} = this.props;

    return (
        <div className={classes.container}>
          <Table>
            <TableHead>
              <TableRow className={classes.headerRow}>
                {columnsNames.map(el => {
                  return (
                      <TableCell key={el}>{el}</TableCell>
                  )
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {contactsList.map((el, index) => {
                    return (
                          <TableRow className={[classes.row, classes.tableRowHover].join(' ')} key={index}>
                          <TableCell>{index + 1}</TableCell>
                          {columnsKeys.map(key => {
                            return (
                                <TableCell key={key}>{el[key]}</TableCell>
                            )
                          })}
                          <TableCell>
                            <Link to={`/contacts/${el.id}`} className={classes.linkColumn}><ArrowForward/></Link>
                          </TableCell>
                        </TableRow>
                    )
                  })
              }
            </TableBody>
          </Table>
        </div>
    )
  }
}

export default withStyles(styles)(ContactsList);
