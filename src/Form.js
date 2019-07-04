import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newNoteText: ""
        }
        this.handleNewNoteTextChange = this.handleNewNoteTextChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit({
            text: this.state.newNoteText,
            progress: 1,
            id: new Date().toUTCString()
        });
        this.setState({
            newNoteText: ""
        })
    }

    handleNewNoteTextChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {

        return <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="newNoteText" value={this.state.newNoteText} onChange={this.handleNewNoteTextChange} placeholder="add a note"></input>
                <button>+</button>
                {this.state.notes}
            </form>
        </div>
    }
}