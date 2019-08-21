import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import './style.css';
import PersonOutline from '@material-ui/icons/PersonOutline';
import MoreVert from '@material-ui/icons/MoreVert';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';




export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            online: {
                0: true,
            },
            user: {
                lastName: '',
                name: '',
                id: ''
            },
            users: [
                {
                    name: 'Jony',
                    lastName: 'Gordon'
                },
                {
                    name: 'John',
                    lastName: 'Smith'
                },
                {
                    name: 'Sara',
                    lastName: 'Smith'
                },
                {
                    name: 'Mark',
                    lastName: 'Tall'
                },
                {
                    name: 'Jim',
                    lastName: 'Kwik'
                }
            ],
            open: false
        }
    }

    handleOpenDialog(i, user) {
        const arr = this.state.online;
        // if (arr[i] !== true) {
        //     arr[i] = true
        // } else {
        //     arr[i] = false
        // }
        let userData = this.state.user
        userData = user
        userData.id = i
        this.setState({
            online: arr,
            open: !this.state.open,
            user: userData,
        })
    }

    handleSubmit(i) {
        const arr = this.state.online;
        if (arr[i] !== true) {
            arr[i] = true
        } else {
            arr[i] = false
        }
        this.setState({
            online: arr,
            open: !this.state.open
        })
    }

    handleCancel() {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        console.log(this.state)
        const { user, online } = this.state
        return (
            <div className='list-container'>
                {this.state.users.map((user, i) => (
                    <div className='list-item'>
                        <div className='person'>
                            <PersonOutline />
                            <p key={i} className={this.state.online[i] === true ? 'online' : 'offline'}>{user.name + ' ' + user.lastName}</p>
                        </div>
                        <Button onClick={() => this.handleOpenDialog(i, user)}><MoreVert /></Button>
                    </div>
                ))}
                <Dialog open={this.state.open}>
                    <DialogTitle>
                        Change user state
                    </DialogTitle>
                    <DialogContentText className='dialog-text'>
                        A you sure you want to mark {user.name + ' ' + user.lastName} {online[user.id] === true
                            ? 'offline'
                            : 'online'
                        }
                        <DialogActions>
                            <Button variant='outlined' onClick={() => this.handleCancel()}>Cancel</Button>
                            <Button variant='outlined' onClick={() => this.handleSubmit(user.id)}>Yes</Button>
                        </DialogActions>
                    </DialogContentText>
                </Dialog>
            </div>
        );
    }
}

