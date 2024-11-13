import fs from "fs"

export default function logRequest (req, res, next) {
    const log = `Request Received at ${new Date().toISOString()} \n`
    fs.appendFile("logs.txt", log, (err) => {
        if (err) throw err
        console.log("Log Saved");
    })

    next()
}