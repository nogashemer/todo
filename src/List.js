import React from 'react';
import Note from './Note';

export default class List extends React.Component {
    constructor(props) {
        super(props);
    }




    render() {

        return <div className={this.props.type + " list"}>
            <div className="list-header"><h1>{this.props.name}</h1></div>
            <div className="notes">
                {this.props.notes.map(note => {
                    if (this.props.progressList === note.progress) {
                        return <Note
                            key={note.id + note.text}
                            id={note.id}
                            text={note.text}
                            progress={note.progress}
                            changeNote={this.props.changeNote}
                        />
                    }
                }
                )}
            </div>
        </div>
    }
}