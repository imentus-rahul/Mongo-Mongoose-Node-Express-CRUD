// sync
export function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// async 1
async function fn1() {
    for (let i = 0; i < 10; i++) {
        console.log("🚀 ~ file: del.js:9 ~ fn1 ~ i", i);
        sleep(1000);
    }
}

// async 2
async function fn2() {
    for (let i = 0; i < 10; i++) {
        console.log("🚀 ~ file: del.js:17 ~ fn2 ~ i", i);
        // sleep(100000).then(console.log("val returned from fn2 API - Balance API"));
        heavyprocess().then(console.log("val returned from fn2 API - Balance API"));
        // this will continue
    }
}

async function main() {
    console.log("🚀 ~ file: del.js:23 ~ main ~ main", main);
    await fn1();
    console.log("🚀 ~ file: del.js:27 ~ main ~ fn1", fn1);
    await fn2();
    console.log("🚀 ~ file: del.js:27 ~ main ~ fn2", fn2);
}

main();

async function heavyprocess() {
    for (let i = 0; i < 10000000; i++) {
        let a = 22 / 7;
        if (i == 10000000 - 1) {
            return i;
        }
    }
}
