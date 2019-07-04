import React from 'react';

export default class Note extends React.Component {
    constructor(props) {
        super(props);
        this.text = this.props.text
        this.id = this.props.id
    }
    render() {
        return <div className="note">
            <p>{this.text}</p>
            <div className="actionsBar">
                <div className="backward progress action" onClick={() => { this.props.changeNote(this.id, "progress", -1) }}>{"<"}</div>
                <div className="archive action" onClick={() => { this.props.changeNote(this.id, "progress", "") }}>{"x"}</div>
                <div className="forward progress action" onClick={() => { this.props.changeNote(this.id, "progress", 1) }}>{">"}</div>
            </div>
        </div>
    }
}