import * as React from "react";
import { css } from "glamor";

import { isImageFile, formatFileSize } from "./file-utils";
import { fontFamily } from "../theme/index";

const style = {
  fontFamily: fontFamily,
  borderRadius: "0.25em",
  boxShadow: "0 0 0.2em #999999",      
  margin: "0.5em",
  padding: "0.8em",
  lineHeight: "1.3em",
  background: "#f7f7f7",
  imgWidth: "15em",
};

type FilePreviewState = { 
  originalImageSize: { 
    width: number, 
    height: number 
  } | undefined 
};

type FilePreviewProps = {
  name: string,
  mimeType: string,
  bytes: number,
  url?: string,
}

export class FilePreview extends React.Component<FilePreviewProps, FilePreviewState> {

  state: FilePreviewState = {
    originalImageSize: undefined,
  }

  setImageDimensions = ({target}: {target: EventTarget}) => {
    const img = target as HTMLImageElement;
    this.setState({
      originalImageSize: {
        width: img.naturalWidth,
        height: img.naturalHeight,
      } 
    }) 
  }

  render() {
    const { name, mimeType, bytes, url } = this.props;
    const { originalImageSize } = this.state;
    const isImage = isImageFile(mimeType);
    const size = formatFileSize(bytes);
    return (
      <div 
        {...css({ 
          display: "flex", 
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          ...style,
        })}
      >
        <span>{name}</span>
        <span>{size}</span>
        {!isImage &&
          <span>{mimeType}</span>}
        {originalImageSize && 
          <span>
            {originalImageSize.width}px x {originalImageSize.height}px
          </span>}
        {isImage && 
          <div 
            {...css({ 
              display: "flex", 
              flex: 1, 
              alignItems: "center", 
              paddingTop: style.padding, 
            })}
          >
            <img 
              {...css({ width: style.imgWidth })} 
              onLoad={this.setImageDimensions} 
              src={url} 
            />
          </div>
        }
      </div>
    );
  }
};