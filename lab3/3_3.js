const ipToNumber = (ip = '127.0.0.1') => {
    const parts = ip.split('.');
    let result = 0;
    for (let i = 0; i < parts.length; i++) {
        const byte = parseInt(parts[i]);
        result = (result << 8) + byte;
    }
    return result;
}

console.log(ipToNumber()); 
