'use strict';

var test = require('prova')
  , getDayOfWeek = require('../')
  , tuesMorning = (new Date('Tue Apr 22 2014 09:00:00 GMT-0700 (PDT)')).valueOf()
  , tuesMidnight = (new Date('Tue Apr 22 2014 08:00:00 GMT')).valueOf()
  , tuesNight = (new Date('Tue Apr 22 2014 20:00:00 GMT-0700 (PDT)')).valueOf()

test('day-of-week#get', function getTest(t){

  t.equal(
    getDayOfWeek.get(tuesMorning)
    , 2
    , 'returns the day of the week from a unix time'
  )

  t.equal(
    getDayOfWeek.get(new Date(tuesMorning))
    , 2
    , 'returns the day of the week from a date object'
  )

  t.equal(
    getDayOfWeek.get(tuesMidnight, 'America/Los_Angeles')
    , 2
    , 'returns the day of the week with a timezone'
  )

  t.equal(
    getDayOfWeek.get(tuesNight, 'America/Los_Angeles', 'Europe/London')
    , 3
    , 'returns the day of the week with a destination timezone'
  )

  t.end()
})
