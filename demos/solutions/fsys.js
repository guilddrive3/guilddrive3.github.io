

function write2file(content) {
    fsys.writeFile("./testWrite.txt", content, function () [ ]);
}
    const returnVal = write2file( Math.max(1, 2, 3));