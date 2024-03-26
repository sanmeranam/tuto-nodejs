const fs = require('fs');

const readFile = (path) => {
    return new Promise((success, failure) => {
        try {
            const dd = fs.readFileSync(path, 'utf8');
            success(dd);
        } catch (error) {
            failure(error);
        }
        // fs.readFile(path, 'utf8', (err, data) => {
        //     if (err) failure(err);
        //     success(data);
        // });
    })
}


const writeFile = (path, data) => {
    return new Promise((success, failure) => {
        fs.writeFile(path, data, (err) => {
            if (err) failure(err);
            success('File written successfully');
        });
    }
    )
}


const useState = (def) => {
    let val = def;
    const setVal = (newVal) => {
        console.log('Setting new value: ', newVal);
        val = newVal;
    }
    return [val, setVal]
}



const initApp = async () => {
    console.log('App is initializing...');
    const [a,setA] = useState(4)
    console.log(a);
    setA(5);
    console.log(a);

    // console.log('App is initializing...');
    // const data = await readFile('/Users/santanu.sahu/Documents/tapan/node-project/test/app.txt');
    // console.log(data);
}



initApp();
