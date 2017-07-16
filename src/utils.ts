export const convertArrayLikeObjectToArray = <T>(files: {
  [index: number]: T;
  length: number;
}) => {
  const result = [];
  for (let i = 0; i < files.length; i++) {
    result[i] = files[i];
  }
  return result;
};
