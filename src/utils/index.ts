// 把驼峰转换成小写，如 ArrowDownBold 转换为 arrowdownBold
export const toLine = (value: string) => {
  return value.replace(/(A-Z)/g, '-$1').toLocaleLowerCase()
}