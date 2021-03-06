import React from "react"
import MenuItem from "./menu_item.js"
import DropboxChooser from "./dropbox-chooser.js"

const DROPBOX_APP_KEY = 'dlgs25astqhe1gc';

export default class MenuBar extends React.Component {

  constructor(props) {
    super(props)
    this.inputOpenFileRef = React.createRef()
  }
  showOpenFileDlg = () => {
    this.inputOpenFileRef.current.click()
  }
  onChangeFile = (event) => {
    event.stopPropagation();
    event.preventDefault();
    let file = event.target.files[0];
    if (file) {
      this.props.onOpen(file);
    }
    // So the same file can be selected again.
    const element = event.target;
    element.value = '';
  }
  
  render() {
    return <div className="menu-bar">
      <input type='file' id='file'
        accept=".fountain,.txt"
        onChange={this.onChangeFile.bind(this)}
        ref={this.inputOpenFileRef} style={{ display: 'none' }} />
      <MenuItem className="menu-item"
        onClick={this.showOpenFileDlg}
        src="gfx/icons/open.svg" alt="Open File" />
      <DropboxChooser 
        appKey={DROPBOX_APP_KEY}
        extensions={['.fountain','.txt']}
        success={this.props.onDropboxSuccess}/>
      <MenuItem className="menu-item"
        onClick={this.props.onNew}
        src="gfx/icons/new.svg" alt="New" />  
      <MenuItem className="menu-item"
        onClick={this.props.onEdit}
        src="gfx/icons/editor.svg" alt="Edit" />
      <MenuItem className="menu-item"
        onClick={this.props.onTransliterate}
        src="gfx/icons/translation.svg" alt="Trans" />
      <MenuItem className="menu-item"
        onClick={this.props.onSettings}
        src="gfx/icons/settings.svg" alt="Settings" />
      <MenuItem className="menu-item"
        onClick={this.props.onAbout}
        src="gfx/icons/info.svg" alt="About" />
    </div>
  }
}