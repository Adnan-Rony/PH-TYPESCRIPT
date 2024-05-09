{
// 
    type iString=CheckString<string>

    type CheckString<T>=T extends String ? true :false;

    















}