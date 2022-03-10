const uniqid = require("uniqid");
const fs = require("fs");

const readData = (path) => {
  return JSON.parse(fs.readFileSync(path));
};

const writeData = (filename, item) => {
  fs.writeFileSync(filename, JSON.stringify(item), "utf8", (err) => {
      if (err) {
          console.log("there has been an error in writing the data: ", err);
      }
  });
  console.log(`changes ${item} saved to file ${filename}.`)
};

const newID = () => {
    return uniqid();
}

const createNew = (path, data) => {
  const readList = readData(path);
  const newItem = {
    id: newID(),
    ...data,
  };
  // console.log(readList.people);
  console.log(newItem);
  readList.people.push(newItem);
  writeData(path, readList);
  return readList;
};

const getDataById = (arr, id) => {
  const dataSet = readData(arr);
  const currData = dataSet.find((chunk) => chunk.id === id);
  return currData;
};

const updateDataById = (id, arr, updateValues) => {
    const updatedData = arr.map((chunk) => {
        arr.id === id ? {...chunk, ...updateValues} : student
    })
    writeData(arr, updatedData)
    return updatedData;
}

const deleteDataById = (id, arr) => {
    const dataAfterDeletion = arr.filter(
        (chunk) => chunk.id !== id
    );
    writeData(arr, dataAfterDeletion);
    return dataAfterDeletion;
}
module.exports = {
    readData,
    writeData,
    newID,
    createNew,
    getDataById,
    updateDataById,
    deleteDataById
}