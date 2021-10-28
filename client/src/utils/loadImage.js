function unbindEvents(image) {
  image.onload = null;
  image.onerror = null;
  image.onabort = null;

  try {
    delete image.src;
  } catch (e) {
    // Safari's strict mode throws, ignore
  }
}

export default (url) => {
  const image = new Image();

  return new Promise((resolve, reject) => {
    const loaded = (event) => {
      unbindEvents(image);
      resolve(event.target || event.srcElement);
    };

    const errored = (error) => {
      unbindEvents(image);
      reject(error);
    };

    image.onload = loaded;
    image.onerror = errored;
    image.onabort = errored;

    image.src = url;
  });
};
