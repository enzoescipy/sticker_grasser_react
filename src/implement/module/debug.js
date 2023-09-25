// module debug
// alert that this console printing is for the debug.
// show some usefull informations too.

/// print any amount of arguments with debug anounsment
export function debug()
{
    var logString = "";
    var argArray = [].slice.call(arguments);
    argArray.forEach(element => {
        logString += (element).toString();
    }); 
    console.log(logString);
}
