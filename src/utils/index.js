
// 日期格式化
export function formatDate (time, fmt) {
  let date = new Date(time);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

export function formatMonthDay (time) {
  return formatDate(time, "MM月dd日");
}

export function formatMinuteSecond (time) {
  return formatDate(time, "mm:ss");
}
// 文件下载
export const downloadFile = (file,fileName, fileType = 'application/octet-stream;charset=UTF-8') => {
  if (!file) return false
  const blob = new Blob([file], {
    type: fileType,
  })
  // 非IE
  if ('download' in document.createElement('a')) {
    const link = document.createElement('a')
    const href = URL.createObjectURL(blob)
    link.href = href
    link.style.display = 'none'
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
    // 下载完成进行释放
    URL.revokeObjectURL(href)
    document.body.removeChild(link)
  } else {
    // ie10+
    window.navigator.msSaveBlob(blob, fileName)
  }
}

// 数组除空
export const trimSpace = (array) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == [] || array[i] == null || array[i] == undefined) {
      array.splice(i, 1)
      i = i - 1
    }
  }
  return array
}
