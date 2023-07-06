const uploadFileToBunny = async (file) => {
  // console.log("🚀 ~ file: api_bunny.js ~ line 9 ~ uploadFileToBunny ~ file", file)

  var fileName = file.name;
  // fileReader.readAsDataURL(fileName)
  const formData = new FormData();
  const blob = new Blob([file]);
  formData.append("selectedFile", file);
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/octet-stream",
      AccessKey: "1ca501c0-07d7-4b83-9ceecb64faa1-1602-4461",
    },
    body: blob,
  };

  return await fetch(
    "https://sg.storage.bunnycdn.com/topnhacai/" + fileName,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((err) => console.error(err));
};
const getListImageBunny = async () => {
  let header = new Headers();
  header.append("Accept", "*/*");
  header.append("AccessKey", "1ca501c0-07d7-4b83-9ceecb64faa1-1602-4461");
  let options = {
    method: "GET",
    headers: header,
  };

  return await fetch("https://sg.storage.bunnycdn.com/topnhacai/", options)
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));
};
const deleteImageBunny = async (fileName) => {
  const options = {
    method: "DELETE",
    headers: {
      Accept: "*/*",
      AccessKey: "1ca501c0-07d7-4b83-9ceecb64faa1-1602-4461",
    },
  };

  return await fetch(
    "https://sg.storage.bunnycdn.com/topnhacai/" + fileName,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));
};
export { uploadFileToBunny, getListImageBunny, deleteImageBunny };
