const queries = require('./database/queries.js')

var main = (req) => {
  return new Promise(async function(resolve, reject) {
    var found = false
    const username = req.body.username
    const password = req.body.password
    const passwords = await queries.get_field("password")
    const usernames = await queries.get_field("dni")
    for (var i = 0; i < passwords.length; i++){
        if (usernames[i].dni == username && passwords[i].password == password) {
            found = true
            break
        }
    }
    if (found != false) {
        console.log("Success")
        resolve("Success")
    } else {
        console.log("Error")
        resolve("Error")
    }
  })
}



module.exports = {
  main,
}