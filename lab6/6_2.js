const pipe = (...fns) => {
    const handlers = [];

    const composed = (x) => {
        for (const f of fns) {
            if (typeof f !== 'function') {
                const error = new Error('All arguments must be functions');
                handlers.forEach((handler) => handler(error));
                return undefined;
            }
            try {
                x = f(x);
            } catch (error) {
                handlers.forEach((handler) => handler(error));
                return undefined;
            }
        }
        return x;
    };

    composed.on = (event, handler) => {
        if (event === 'error') {
            handlers.push(handler);
        }
    };

    return composed;
};

const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

const f = pipe(inc, twice, 7, cube);
f.on('error', (e) => console.error('Error that was captured:', e.message));
const x = f(5);


console.log(x); 