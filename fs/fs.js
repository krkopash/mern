 import fs, { access } from 'fs';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
//readfile
fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('(READ) File content:', data);
});
//img
fs.readFile('image.png', 'utf8', (err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Image size:', data.length, 'bytes');
})

//write file
fs.writeFile('output.txt', 'hello', 'utf8', (err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("(WRITE) check output.txt file")
} );

//append
console.log("(APPEND) before append:",
    fs.readFileSync('input.txt', 'utf8')    
    
);
fs.appendFile('input.txt', ' DATA ADDED', (err)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log("\nFile Contents of file after append:",
            fs.readFileSync("input.txt", "utf8"));
    }
})

// delete

fs.unlink('delete.txt', function (err) {
  if (err) throw err;
  console.log('(DELETE) File deleted!');
});

// rename
fs.rename('rename.txt', 'new.txt',()=>{
    console.log("(RENAME) rename");
})



//path module
const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);
console.log("(FILEPATH) file path:", __filename);
console.log("(DIR-PATH)dir path",__dirname);
