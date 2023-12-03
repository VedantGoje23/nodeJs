// TAKING INPUT FROM COMMAND LINE
let read = require('readline');
let rl = read.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question('please enter your name : ', (name)=>{
    console.log('you entered', name);
    rl.close()
})
// TAKING INPUT FROM COMMAND LINE
// ON CLOSE EVENT
rl.on('close',()=>{
    console.log('Interface closing....');
    process.exit(0)
})
