const fs = require('fs')

fs.readFile('./telicon-list.json', 'utf8', (err, jsonString) => {
  if (err) {
    console.log('File read failed:', err)
    return
  }
  let jsonFileContent = jsonString
  jsonFileContent = jsonFileContent
    .replaceAll('icons/svg/', '')
    .replaceAll('.svg', '')

  fs.writeFile('./telicon-list.json', jsonFileContent, (err) => {
    if (err) {
      console.log('Error writing file', err)
    } else {
      console.log('Successfully wrote file')
    }
  })
})
