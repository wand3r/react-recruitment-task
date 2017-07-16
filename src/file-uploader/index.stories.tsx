import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from '@storybook/addon-actions';
import { css } from "glamor";

import { FilePreview } from "./file-preview";
import { FileUploader } from "./";

storiesOf("File Uploader", module)
  .add("File Uploader with files preview", () =>
    <FileUploader 
      withFilePreview={true} 
      selectFiles={action("select-files")} 
    />
  )
  .add("File Uploader without files preview", () =>
    <FileUploader 
      withFilePreview={false} 
      selectFiles={action("select-files")} 
    />
  )
  .add("File preview for image", () => 
    <FilePreview 
      name="IMG_20161223_125428585.jpg" 
      mimeType="image/jpeg"
      bytes={2855173}
      url="IMG_20161223_125428585.jpg" 
    />
  )
  .add("File preview for txt file", () => 
    <FilePreview
      name="readme.txt"
      mimeType="text/plain"
      bytes={794480}
    />
  );

