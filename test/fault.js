/* Copyright (c) 2014 Richard Rodger */
'use strict'

// node fault.js

var test = require('seneca-transport-test')

test.foo_fault(require, 'beanstalk', void 0, process.argv[3])
