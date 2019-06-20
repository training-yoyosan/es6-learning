let timer = (length => {
    return new Promise(function (resolve, reject) {
        console.log('Init Promise...');

        setTimeout(function () {
            console.log('\tTimeout done.');

            resolve();
        }, length);
    });
});

timer(2000).then(() => console.log('All done!'));
