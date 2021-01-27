function getDataFromInternet(errCb, cb) {
  setTimeout(() => {
    // errCb('This is error')
    cb('This is the data from internet')
  }, 100);
}

console.log(getDataFromInternet((err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
}));

function getDataPromise(url) {
  return new Promise((resolve, reject) => {
    // reject('This is error')
    resolve("This is the data from url: " + url)
  })
}

getDataPromise("youtube.com")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  })

getDataPromise("google.com")
  .then((result) => {
    console.log(result);
    return getDataPromise('tokopedia.com')
  })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  })