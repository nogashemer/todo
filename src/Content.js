import React from 'react';
import Form from './Form';
import List from './List';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [""],
        }
        this.newNote = this.newNote.bind(this)
        this.changeNote = this.changeNote.bind(this)
    }

    newNote(note) {
        let lastNote = this.state.notes[0]
        console.log(note.id !== lastNote.id)
        if (note.text !== "" && note.id !== lastNote.id) {
            let newNotes = [note, ...this.state.notes]
            this.setState({
                notes: newNotes
            })
            console.log(note.id !== lastNote.id)
        }

    }

    changeNote(currentId, prop, value) {
        let currentNotes = this.state.notes
        let currentNote = this.state.notes.find(note => note.id === currentId)
        let currentIndex = currentNotes.indexOf(currentNote)

        if (prop === "progress") {
            currentNote.progress += value;
        } else {
            currentNote[prop] = value;
        }

        currentNotes[currentIndex] = currentNote;
        this.setState({
            notes: currentNotes
        })
    }




    render() {
        return <div className="content">
            <Form onSubmit={this.newNote} />
            <div className="lists">
                <List name={"To do"} type={"Todo"} notes={this.state.notes} progressList={1} changeNote={this.changeNote} />
                <List name={"In Progress"} type={"InProgress"} notes={this.state.notes} progressList={2} changeNote={this.changeNote} />
                <List name={"Done"} type={"Done"} notes={this.state.notes} progressList={3} changeNote={this.changeNote} />
            </div>

        </div>
    }
}