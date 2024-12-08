const introspector = (iface) => {
    const result = [];
    for (let key in iface) {
      if (typeof iface[key] === 'function') {
        const numArgs = iface[key].length;
        result.push([key, numArgs]);
      }
    }
    return result;
  };


const iface = {
    m1: x => [x],
    m2: function (x, y) {
      return [x, y];
    },
    m3(x, y, z) {
      return [x, y, z];
    }
  };
  
  console.log(introspector(iface));
