// 获取url参数
export function urlParse() {
  var url = window.location.href
  var obj = {}
  var reg = /[?&][^?&]+=[^?&#/]+/g
  var arr = url.match(reg)
  // ['?id=12345', '&a=b']
  if (arr) {
    arr.forEach(function(item) {
      var tempArr = item.substring(1).split('=')
      var key = decodeURIComponent(tempArr[0])
      var val = decodeURIComponent(tempArr[1])
      obj[key] = val
    })
  }
  return obj
}
// 将时间戳转化为日期格式  formatDate(date)
export function formatDate(now) {
  var d = new Date(now)
  var year = d.getFullYear()
  var month = d.getMonth() + 1
  var date = d.getDate()
  var hour = d.getHours()
  var minute = d.getMinutes()
  var second = d.getSeconds()
  return year + '-' + (month < 10 ? '0' + month : month) + '-' + (date < 10 ? '0' + date : date) + ' ' + hour + ':' + minute + ':' + second
}
// 毫秒转成时间 格式：12:12:00
export function millisecondToDate(msd, type=':') {
  let time = parseFloat(msd) / 1000
  let second = 0
  let minute = 0
  if (time !== null && time !== '') {
    if (time > 60 && time < 60 * 60) {
      second = parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60)
      if (second < 10) {
        second = '0' + second
      }
      minute = parseInt(time / 60.0)
      if (minute < 10) {
        minute = '0' + minute
      }
      time = minute + type + second + ''
    } else if (time >= 60 * 60 && time < 60 * 60 * 24) {
      time =
        parseInt(time / 3600.0) +
        type +
        parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) +
        type +
        parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) - parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60) +
        ''
    } else {
      if (time < 10) {
        time = `00${type}0` + parseInt(time)
      } else {
        time = `00${type}` + parseInt(time)
      }
    }
  } else if (time === 0) {
    time = `00${type}0` + parseInt(time)
  }
  return time
}
// 添加样式
export function addClass(el, className) {
  // 是否存在样式
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}
// 删除样式
export function removeClass(el, className) {
  // 是否存在样式
  if (!hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  // 临时新样式数组
  let _newClass = []
  // 遍历
  for (let i = 0; i < newClass.length; i++) {
    let cls = newClass[i]
    // 如果不是要删除的就添加回数组
    if (cls !== className) {
      _newClass.push(cls)
    }
  }
  el.className = _newClass.join(' ')
}
// 是否存在样式名
export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s| $)')
  return reg.test(el.className)
}
// 是否PC
export function isPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone",
              "SymbianOS", "Windows Phone",
              "iPad", "iPod"];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false;
          break;
      }
  }
  return flag;
} 
// 是否App
export function isApp() {
  if (typeof NativeInterface !== 'undefined') {
    return true
  } else {
    return false
  }
} 
// 是否苹果
export function isIOS() {
  var ua = navigator.userAgent.toLowerCase()
  if (/iphone|ipad|ipod/.test(ua)) {
    if (typeof NativeInterface !== 'undefined') {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}
export default function() {
	console.log('这是一个工具库')
}