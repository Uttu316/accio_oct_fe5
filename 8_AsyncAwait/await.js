function api() {
  console.log("Start API");
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Data");
      console.log("API End");
    }, 4000);
  });
}

async function getData() {
  console.log("Get User Data");

  const data = await api();
  console.log(data);
}

getData();
