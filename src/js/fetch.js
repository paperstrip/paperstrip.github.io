
export default function FetchContent(res) {

  return new Promise(function (resolve) {

    const cssPromise = new Promise((resolve) => {
      import(`../scss/modules/${res}.scss`).then(() => {
        console.log("Loaded CSS", res);
        resolve(true);
      }).catch((err) => {
        console.error("Failed to load CSS:", err);
        resolve(false);
      });
    });

    const jsPromise = new Promise((resolve) => {
      import(`./controllers/${res}.js`).then(() => {
        console.log("Loaded JS", res);
        resolve(true);
      }).catch((err) => {
        console.error("Failed to load JS:", err);
        resolve(false);
      });
    });
    Promise.all([cssPromise, jsPromise]).then(() => {
      resolve(true);
    })

  })

}
