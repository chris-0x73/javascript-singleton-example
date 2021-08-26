import { doTheThing } from './math.js';
import {multiply, isEmpty, CreateSessionId, writeLogFile} from './utilities.js';

console.log("app running - session id: ", CreateSessionId.getInstance().value);

console.log("hello", multiply(2, 3));
console.log(doTheThing())

writeLogFile("logs" , "log file created");
writeLogFile("logs" , "testing that i can write multiple logs in one file");
writeLogFile("logs" , "balbabalablblabla");
writeLogFile("logs" , "EERRROR PROGRAM CRASHED");

// generate something the first time
// every other time return the original thing
