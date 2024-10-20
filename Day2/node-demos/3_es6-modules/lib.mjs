// Local Variable
var fname = "Manish";
var lname = "Sharma";

// Named Exports
export const firstname = fname;
export const lastname = lname;

export function log(msg) {
    console.log("Logged from lib.js - ", msg);
}