function generate(){
    return Math.floor(Math.random()*100);
}
function generaterandomnumberwithdelay(seconds){
    console.log(`Generating a random number after a delay of ${seconds} seconds...`);
    let countdown = 3;
    const countdownInterval = setInterval(() => {
        console.log(`${countdown} seconds remaining...`);
        countdown--;

        if (countdown === 0) {
            clearInterval(countdownInterval);
            const randomNumber = generate();
            console.log(`Random number generated: ${randomNumber}`);
        }
    }, 1000);
}

generaterandomnumberwithdelay(5);
