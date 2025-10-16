function api() {
  console.log("Start API");
  return new Promise((res, rej) => {
    setTimeout(() => {
      rej("Data");
      console.log("API End");
    }, 4000);
  });
}

async function getData() {
  try {
    console.log("Get User Data");

    const data = await api();
    console.log(data);
  } catch (e) {
    console.log("Error", e);
  }
}

getData();
