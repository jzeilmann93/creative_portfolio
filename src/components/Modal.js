import React from 'react';
import './Modal.css';

class Modal extends React.Component {
    state = {
        visibility: this.props.visibility,
        modalPic: this.props.modalPic
    }

    componentWillReceiveProps(nextProps){
        this.setState({ visibility:nextProps.visibility, modalPic: nextProps.modalPic });
    }

    render() {
        return (
            <div className={`modal ${this.state.visibility}`}>
                <div className="exit" onClick={ this.props.exitModal }></div>
                <img src={this.state.modalPic} alt=""/>
                {this.props.ModalPic}
            </div>
        )
    }
}

export default Modal;