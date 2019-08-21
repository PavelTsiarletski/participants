import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import List from './List'
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import './style.css';

export default class DialogComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullScreen: false
        }
        this.handleFullScreen = this.handleFullScreen.bind(this)
    }

    handleFullScreen() {
        this.setState({ fullScreen: !this.state.fullScreen })
    }

    render() {
        return (
            <div>
                <Dialog open fullScreen={this.state.fullScreen} >
                    <div className='dialog-header'>
                        <h1>Participants</h1>
                        <Button onClick={() => this.handleFullScreen()}>
                            {!this.state.fullScreen
                                ? <FullscreenIcon fontSize="large" />
                                : <FullscreenExitIcon fontSize="large" />
                            }
                        </Button>
                    </div>
                    <List />
                </Dialog>
            </div>
        );
    }
}