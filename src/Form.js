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
        let formNote = this.props.notes.find(note => note.id === "form")
        let formNoteIndex = this.props.notes.indexOf(formNote)
        this.props.onSubmit({
            text: this.state.newNoteText,
            progress: this.props.notes[formNoteIndex].progress,
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
            <form id='note-form' onSubmit={this.handleSubmit}>
                <textarea className="text-area" name="newNoteText" value={this.state.newNoteText} onChange={this.handleNewNoteTextChange} placeholder="add a note"></textarea>
                {this.state.notes}
            </form>
        </div>
    }
}