import React, {Component} from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import ArrowForward from '@material-ui/icons/ArrowForward';
// import {contactsList} from './contacts-list-mock';
import {Table, TableRow, TableCell, TableBody, TableHead, Theme} from '@material-ui/core';
import {Link} from 'react-router-dom';
import createStyles from '@material-ui/core/styles/createStyles';
import store from '../../store';
import {addContact} from '../../actions';

const styles = ({palette}: Theme) => createStyles({
      container: {
        width: '100%',
        overflowX: 'auto',
      },
      headerRow: {
        textTransform: 'uppercase',
      },
      row: {
        '&:nth-of-type(odd)': {
          backgroundColor: palette.background.default,
        },
      },
      linkColumn: {
        color: palette.common.black,
      },
      tableRowHover: {
        '&:hover': {
          backgroundColor: palette.grey[200],
        },
      },
    }
);

const columnsNames: string[] = ['#', 'name', 'surname', 'position', 'office', 'phone', 'skype', 'corporate email', ''];
const columnsKeys: string[] = ['firstName', 'lastName', 'position', 'office', 'phoneOne', 'skype', 'email'];

class ContactsList extends Component<ContactsListProps, {}> {

  render() {
    store.subscribe(() => {
      console.log('Look ma, Redux!!')
    });
    store.dispatch( addContact(
        {
          birthDate: '1995-10-17',
          email: 'andrii.didovych@sombrainc.com',
          firstName: 'TEST',
          id: 200,
          lastName: 'TEST',
          office: 'LV',
          personalEmail: 'andrii.didovych@gmail.com',
          phoneOne: '098 709 24 60',
          phoneTwo: null,
          position: 'Trainee Java developer',
          skype: 'live:andrii.didovych',
        },
    ));

    const {classes} = this.props;
    const {contactsList} = store.getState();

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
              {contactsList.map((el: any, index) => {
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

export interface ContactsListProps {
  classes: any;
}

export interface ContactsListDTO {
  birthDate: string;
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  office: string;
  personalEmail: string;
  phoneOne: string;
  phoneTwo: string | null,
  position: string;
  skype: string;
}