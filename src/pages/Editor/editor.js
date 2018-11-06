import React from 'react';
import { Editor as DefaultEditor } from 'components';
import { convertToRaw } from 'draft-js';
import draftToMarkdown from 'draftjs-to-markdown';
import './editor.scss';

const textareaStyle = {
  minHeight: 496,
  width: '100%',
  background: '#f7f7f7',
  borderColor: '#F1F1F1',
  // padding: '16px 8px',
}
export default class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editorContent: null,
    }
  }
  onEditorStateChange = (editorContent) => {
    this.setState({
      editorContent,
    })
  }
  render() {
    const { editorContent } = this.state;
    return (
      <div>
        <div className='iconfont editor_submit-button'>&#xe64d;&nbsp;确认发布</div>
        <div className='editor_container'>
          <div className='editor_editing-area'>
            <DefaultEditor
              editorState={editorContent}
              onEditorStateChange={this.onEditorStateChange} />
          </div>
          <div className='editor_editing-result'>
            <p className='editor_editing-result-title'>markdown预览:</p>
            <textarea
              style={textareaStyle}
              disabled
              value={editorContent ? draftToMarkdown(convertToRaw(editorContent.getCurrentContent())) : ''}
            />
          </div>
        </div>
      </div>
    );
  }
}