const _ = require('lodash')
const moment = require('moment')


const numbers = [33, 46, 76, 44, 22, 99, 100, 101]

const cc = _.map(numbers,  (number, i) =>{
    return number * 2
})

console.log(_.startCase('hello________world'))


const mm = moment()
mm.subtract(10, 'days')

const mm2= mm.clone()//moment()
mm2.add(10, 'days')

console.log(mm.format('MMMM Do YYYY, h:mm:ss a'))
console.log(mm2.format('MMMM Do YYYY, h:mm:ss a'))

console.log(mm.isBefore(mm2))



const sreDate = '03-26-2024 21:36:00'


setInterval(() => {
    const now = moment()
    const future = moment(sreDate, 'MM-DD-YYYY HH:mm:ss')

    const diff = future.diff(now)

    const duration = moment.duration(diff)

    console.log(duration.days(), duration.hours(), duration.minutes(), duration.seconds())

    if(now.isSameOrAfter(future)){
        console.log('Event has started')
    }

},1000)
