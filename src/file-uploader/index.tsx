import * as React from "react";
import { css } from "glamor";

import { isImageFile, formatFileSize } from "./file-utils";
import { convertArrayLikeObjectToArray } from "../utils";
import { OpenFolderIcon } from "../common/icons";
import { Button } from "../common/button";
import { FilePreview } from "./file-preview";
import { ItemsList } from "../common/items-list";
import { style as button } from "../common/button";

const style = {
  fontColor: "white",
  buttonBackground: "#e8404e",
  labelBackground: "#EAEAEA",
};

type SelectFiles = (files: FileList | null) => void;

const FileUploadButton = ({ selectFiles }: { selectFiles: SelectFiles }) =>
  <Button 
    icon={<OpenFolderIcon color={style.fontColor} />} 
    color={style.fontColor}
    background={style.buttonBackground}
    customStyle={{
      borderRadius: undefined,
      boxShadow: undefined,
    }}
  >
    File selection
    <input
      {...css({ display: "none" })}
      type="file"
      multiple
      onChange={e => selectFiles(e.target.files)}
    />
  </Button>;

const FileInfoLabel = ({ label }: { label: string }) =>
  <div
    {...css({
      flex: 1,
      display: "flex",
      alignItems: "center",
      padding: button.padding,
      background: style.labelBackground,
    })}
  >
    {label}
  </div>;


type FileUploaderProps = {
  selectFiles?: SelectFiles,
  withFilePreview: boolean,
}

type FileUploaderState = { 
  files: FileList | null 
}

export class FileUploader extends React.Component<FileUploaderProps, FileUploaderState> {

  state: FileUploaderState = {
    files: null,
  }

  formatGeneralFilesInfo = (files: FileList | null) =>
    files == null || files.length === 0 ? "" : 
    files.length > 1 ? `${files.length} files selected` : 
    files[0].name;
  
  selectFiles: SelectFiles = files => { 
    this.setState({ files });
    this.props.selectFiles && this.props.selectFiles(files);
  };
  
  render() {
    const { files } = this.state;
    const { withFilePreview } = this.props;
    const filesInfo = this.formatGeneralFilesInfo(files);
    const previewFiles = files && withFilePreview && 
      convertArrayLikeObjectToArray(files)
      .map(file => ({
        name: file.name,
        mimeType: file.type,
        bytes: file.size,
        url: isImageFile(file.type) ? URL.createObjectURL(file) : undefined,
      }));
    return (
      <div>
        <div
          {...css({
            display: "flex",
            overflow: "hidden",
            borderRadius: button.borderRadius,
            boxShadow: button.boxShadow,
          })}
        >
          <FileInfoLabel label={filesInfo} />
          <FileUploadButton selectFiles={this.selectFiles} />
        </div>
          {previewFiles &&
            <ItemsList>
              {previewFiles.map((file, i) => 
                <FilePreview key={i} {...file} />)}
            </ItemsList>
          }
      </div>
    );
  }
}