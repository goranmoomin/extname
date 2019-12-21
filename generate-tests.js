console.log(`const test = require("ava").default;
const extname = require("./");
`);

let tests = [];

[
    [String.raw`__filename`, String.raw`".js"`],
    [String.raw`""`, String.raw`""`],
    [String.raw`"/path/to/file"`, String.raw`""`],
    [String.raw`"/path/to/file.ext"`, String.raw`".ext"`],
    [String.raw`"/path.to/file.ext"`, String.raw`".ext"`],
    [String.raw`"/path.to/file"`, String.raw`""`],
    [String.raw`"/path.to/.file"`, String.raw`""`],
    [String.raw`"/path.to/.file.ext"`, String.raw`".ext"`],
    [String.raw`"/path/to/f.ext"`, String.raw`".ext"`],
    [String.raw`"/path/to/..ext"`, String.raw`".ext"`],
    [String.raw`"/path/to/.."`, String.raw`""`],
    [String.raw`"file"`, String.raw`""`],
    [String.raw`"file.ext"`, String.raw`".ext"`],
    [String.raw`".file"`, String.raw`""`],
    [String.raw`".file.ext"`, String.raw`".ext"`],
    [String.raw`"/file"`, String.raw`""`],
    [String.raw`"/file.ext"`, String.raw`".ext"`],
    [String.raw`"/.file"`, String.raw`""`],
    [String.raw`"/.file.ext"`, String.raw`".ext"`],
    [String.raw`".path/file.ext"`, String.raw`".ext"`],
    [String.raw`"file.ext.ext"`, String.raw`".ext"`],
    [String.raw`"file."`, String.raw`"."`],
    [String.raw`"."`, String.raw`""`],
    [String.raw`"./"`, String.raw`""`],
    [String.raw`".file.ext"`, String.raw`".ext"`],
    [String.raw`".file"`, String.raw`""`],
    [String.raw`".file."`, String.raw`"."`],
    [String.raw`".file.."`, String.raw`"."`],
    [String.raw`".."`, String.raw`""`],
    [String.raw`"../"`, String.raw`""`],
    [String.raw`"..file.ext"`, String.raw`".ext"`],
    [String.raw`"..file"`, String.raw`".file"`],
    [String.raw`"..file."`, String.raw`"."`],
    [String.raw`"..file.."`, String.raw`"."`],
    [String.raw`"..."`, String.raw`"."`],
    [String.raw`"...ext"`, String.raw`".ext"`],
    [String.raw`"...."`, String.raw`"."`],
    [String.raw`"file.ext/"`, String.raw`".ext"`],
    [String.raw`"file.ext//"`, String.raw`".ext"`],
    [String.raw`"file/"`, String.raw`""`],
    [String.raw`"file//"`, String.raw`""`],
    [String.raw`"file./"`, String.raw`"."`],
    [String.raw`"file.//"`, String.raw`"."`],
    [String.raw`".\\"`, String.raw`""`],
    [String.raw`"..\\"`, String.raw`".\\"`],
    [String.raw`"file.ext\\"`, String.raw`".ext\\"`],
    [String.raw`"file.ext\\\\"`, String.raw`".ext\\\\"`],
    [String.raw`"file\\"`, String.raw`""`],
    [String.raw`"file\\\\"`, String.raw`""`],
    [String.raw`"file.\\"`, String.raw`".\\"`],
    [String.raw`"file.\\\\"`, String.raw`".\\\\"`]
].forEach(([input, expected]) => {
    let testName = `"path: ${input === "__filename" ? "__filename" : input.substring(1, input.length - 1)}"`;
    tests.push(`test(${testName}, t => t.is(extname(${input}), ${expected}));`);
});

// Remove duplicates
(new Set(tests)).forEach(test => console.log(test));
