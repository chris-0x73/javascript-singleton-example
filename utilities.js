import fs from "fs"

export function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
export function isNotEmpty(obj) {
  return !isEmpty(obj);
}
export function multiply(a, b) {
  return a * b;
}

export class CreateSessionId {
    constructor() {
        this.value = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        CreateSessionId.instance=this;
    }
    static getInstance() {
        if (!CreateSessionId.instance) {
            CreateSessionId.instance=new CreateSessionId();
        }
        return CreateSessionId.instance;
    }
}

export function writeLogFile(logFileName, logData) {
  let logFile = fs.createWriteStream(logFileName, { flags: 'a' });
  logFile.write(CreateSessionId.getInstance().value + " " + logData + "\n");
  logFile.end();
};
