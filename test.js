const timeout = function (delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // throw ('my test error')
        resolve()
    }, delay)
})
};

async function timer () {
    console.log('timer started');
    try{
        await Promise.resolve(timeout(2000))    ;
    } catch (e){
        console.log("Error caught");
        console.log(e);
    }
    console.log('timer finished');
}
process.on('uncaughtException', function(err) {
    // handle the error safely
    console.log('caught by universal erorr handler')
    console.log(err)
})
timer();