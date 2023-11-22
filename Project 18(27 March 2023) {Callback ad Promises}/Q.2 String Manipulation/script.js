function manipulateString(str,callback)
{
    let manipulatestr=str.toUpperCase();

    return callback(manipulatestr)
}

function logString(editedstr){
    console.log(`The Manipulate String is : "${editedstr}"`);
}

manipulateString("hello ! genius",logString)