# browser-extname
A Node.js [`path.extname`](https://nodejs.org/dist/latest/docs/api/path.html#path_path_extname_path) re-implementation to use from the browser or webworkers.

## API
### `extname(path)`

* `path`: [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
* Returns: [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

`extname()` returns the extension of the `path`, from the last occurrence of the `.` (period) character to end of string in the last portion of the path.
If there is no `.` in the last portion of the path, or if there are no `.` characters other than the first character of the basename of path, an empty string is returned.

A [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) is thrown if path is not a string.

## Usage

``` javascript
const extname = require("browser-extname");

extname('index.html');
// Returns: '.html'

extname('index.coffee.md');
// Returns: '.md'

extname('index.');
// Returns: '.'

extname('index');
// Returns: ''

extname('.index');
// Returns: ''

extname('.index.md');
// Returns: '.md'
```
