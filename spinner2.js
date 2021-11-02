output = [ '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r/   ', '\r-   ', '\r\\   ', '\r|' ];

for (let i in output) {
  if (i < output.length - 1) {
    setTimeout(() => {
      process.stdout.write(output[i]);
    }, 100 + (200 * i));
  } else {
    setTimeout(() => {
      console.log(output[i]);
    }, 100 + (200 * i));
  }
}