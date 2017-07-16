export const formatFileSize = (bytes: number) => {
  const kB = bytes / 1024;
  const MB = kB / 1024;
  return MB >= 1 ? `${Math.floor(MB)}MB` : `${Math.floor(kB)}kB`;
};

export const isImageFile = (mimeType: string) => mimeType.indexOf("image/") === 0;

