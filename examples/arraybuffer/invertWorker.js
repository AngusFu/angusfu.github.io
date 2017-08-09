onmessage = function (e) {
  const data = e.data;
  for (var i = 0; i < data.length; i += 4) {
    data[i]     = 225 - data[i];     // red
    data[i + 1] = 225 - data[i + 1]; // green
    data[i + 2] = 225 - data[i + 2]; // blue
  }  
  postMessage(data);
}
