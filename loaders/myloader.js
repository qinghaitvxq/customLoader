module.exports=function (source) {
    console.log(source);
    const result=source.replace('world','bob');
    return result;
}