import PropTypes from 'prop-types';
import React from 'react';
import { EditorBlock, EditorState, SelectionState } from 'draft-js';

import { getCurrentBlock } from '../../model/';

class VideoBlock extends React.Component {
  static propTypes = {
    block: PropTypes.object,
    blockProps: PropTypes.object,
  };

  focusBlock = () => {
    const { block, blockProps } = this.props;
    const { getEditorState, setEditorState } = blockProps;
    const key = block.getKey();
    const editorState = getEditorState();
    const currentblock = getCurrentBlock(editorState);
    if (currentblock.getKey() === key) {
      return;
    }
    const newSelection = new SelectionState({
      anchorKey: key,
      focusKey: key,
      anchorOffset: 0,
      focusOffset: 0,
    });
    setEditorState(EditorState.forceSelection(editorState, newSelection));
  };

  render() {
    const { blockProps, block } = this.props;
    const data = block.getData();
    const src = data.get('src');
    const showPlaceholder = block.getLength() === 0 && blockProps.placeholder;

    if (src !== null) {
      const extraProps = {};

      if (showPlaceholder) {
        extraProps['data-placeholder'] = blockProps.placeholder;
        extraProps.className = 'md-block-video-caption--empty';
      }

      return (
        <div>
          <div className="md-block-video-inner-container" onClick={this.focusBlock}>
            <video src={src} />
          </div>
          <figcaption {...extraProps}>
            <EditorBlock {...this.props} />
          </figcaption>
        </div>
      );
    }
    return <EditorBlock {...this.props} />;
  }
}

export default VideoBlock;
