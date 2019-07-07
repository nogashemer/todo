import React from 'react';
import Note from './Note';
import Form from './Form';

export default class List extends React.Component {
    constructor(props) {
        super(props);
    }




    render() {

        return <div className={this.props.type + " list"}>
            <div className="list-header"><h1>{this.props.name}</h1></div>
            <div className="notes">
                {/* {this.props.progressList === 1 ?
                    <Form onSubmit={this.props.newNote} /> : ""} */}
                {this.props.notes.map(note => {
                    if (this.props.progressList === note.progress) {
                        if (note.id === "form") {
                            return <Note
                                key={note.id}
                                id={note.id}
                                text={""}
                                progress={note.progress}
                                changeNote={this.props.changeNote}
                                notes={this.props.notes}
                                form="form">
                                <Form onSubmit={this.props.newNote} notes={this.props.notes} />
                            </Note>
                        }
                        return <Note
                            key={note.id + note.text}
                            id={note.id}
                            progress={note.progress}
                            text={note.text}
                            changeNote={this.props.changeNote}
                        />
                    }
                }
                )}
            </div>
        </div>
    }
}