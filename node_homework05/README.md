# Node.js Homework - HTTP Server & Error Handling

### Task 1 - Authorization Header Check

    -	Created HTTP server using http module
    -	Checked req.headers.authorization
    -	Returned:
    -	401 if header missing
    -	200 if header present
    -	Tested using curl

### Task 2 - Server Error Logging

    -	Used try-catch to simulate server error
    -	Logged errors to errors.log using fs.appendFile
    -	Added timestamp to logs (additional)
    -	Returned HTTP 500 with message “Internal Server Error”

### Task 3 - PUT and DELETE Handling

    -	Checked req.method
    -	Returned:
    -	200 for PUT
    -	200 for DELETE
    -	405 for unsupported methods
    -	Set Content-Type to text/plain
