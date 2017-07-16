import { formatFileSize, isImageFile } from "./file-utils";

test("formatFileSize", () => {
  expect(formatFileSize(0)).toEqual("0kB");
  expect(formatFileSize(1023)).toEqual("0kB");
  expect(formatFileSize(1024)).toEqual("1kB");
  expect(formatFileSize(20480)).toEqual("20kB");
  expect(formatFileSize(1048575)).toEqual("1023kB");
  expect(formatFileSize(1048576)).toEqual("1MB");
  expect(formatFileSize(3145728)).toEqual("3MB");
});

test("isImage", () => {
  expect(isImageFile("image/gif")).toBeTruthy();
  expect(isImageFile("image/jpeg")).toBeTruthy();
  expect(isImageFile("application/msword")).toBeFalsy();
  expect(isImageFile("text/plain")).toBeFalsy();
});
