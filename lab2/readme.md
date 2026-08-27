# File System of Nodejs
It allows JS code running outside the browser and interact directly to Operating system.

### await can be used with any promise in async function. that async function will also be accessed by await keyword
## Common operations on file/folder
- Reading and writing files -> readfile(), writefile(), appendfile()
- Directory Management -> mkdir(), rmdir(), readdir()
- Metadata/informastion -> stat(), lstat(), fstart()
- Watching for changes -> watch(), watchfile(), unwatchfile()
- Streaming large files -> createReadStream(), createWriteStream()
- File Operations -> rename(), truncate(), unlink(), link(), syslink()
## CRUD 
 - C = create(new file)
 - R = Retrieve (read file)
 - U = Update
 - D = delete

 Any Api can be of 4 types 
 1 git -> 
 2 post-> create
 3 put and patch -> update
 4 delete -> Delete

 api can be response by server with staus code and json data
 api generally start with Api/version
 eg. /api/v1/products
 /api/v2/products/2145
 /api//v1/users
 /api//v1/users/mohan
 /api/v1/products?s=mobile

 by default browser can check only get request
 to check other three req type lile foot patch or delete ,we req frontend or 3rd party api tester like postman
 ,thunderclient ,eco api