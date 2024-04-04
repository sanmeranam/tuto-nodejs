// const search = '^[a-zA-Z]+[a-zA-Z0-9\._]@[a-zA-Z0-9]+\.+[a-zA-Z]';//email
const reg = /^[a-zA-Z]+[a-zA-Z0-9\._]@[a-zA-Z0-9]+\.+[a-zA-Z]/ig
// const reg = new RegExp(search, 'ig') // i - ignore case, g - global


const str = 'asdasdas@gmail.com'

console.log(reg.test(str))