

const samplePromise = (num, time) => {
    console.log(`Start: ${num}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`>>>>> Done ${num} in ${time} ms`);
            resolve(num);
        }
        , time);
    }   
    );
}


const init = async() => {
    console.log('init', __dirname);
    const arr = await Promise.all([
        samplePromise(Math.round(Math.random() * 9999999).toString(16),1000),
        samplePromise(Math.round(Math.random() * 9999999).toString(16),2000),
        samplePromise(Math.round(Math.random() * 9999999).toString(16),3000),
        samplePromise(Math.round(Math.random() * 9999999).toString(16),4000)
    ])
    // await samplePromise(Math.round(Math.random() * 9999999).toString(16),1000);
    // await samplePromise(Math.round(Math.random() * 9999999).toString(16), 2000);
    // await samplePromise(Math.round(Math.random() * 9999999).toString(16),3000);
    // await samplePromise(Math.round(Math.random() * 9999999).toString(16),4000);
    console.log('init2', arr);
}


init();