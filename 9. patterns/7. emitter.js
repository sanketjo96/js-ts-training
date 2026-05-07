class EventEmitter {
    listners = new Map()
    data

    on(label, fn) {
        if (label && typeof fn === 'function') {
            if (this.listners.has(label) && Array.isArray(this.listners.get(label))) {
                this.listners.get(label).push(fn)
            } else {
                this.listners.set(label, [fn])
            }
        }
    }


    emit(label, data) {
        this.data = data
        const listeners = this.listners.get(label);
        if (listeners && Array.isArray(listeners)) {
            listeners.forEach(handler => {
                if (handler) {
                    handler(this.data)
                }
            });
        }
    }


    off(label, fn) {
        const listeners = this.listners.get(label);
        if (listeners && Array.isArray(listeners)) {
            const updatedListners = listeners.filter(handler => handler !== fn);
            this.listners.set(label, updatedListners)
        }

        console.log(this.listners)
    }

}



const emitter = new EventEmitter()

const listener1 = (msg) => console.log('listener 1:', msg)
const listener2 = (msg) => console.log('listener 2:', msg)

emitter.on('data', listener1)
emitter.on('data', listener2)

emitter.emit('data', 'hello')
// listener 1: hello
// listener 2: hello

emitter.off('data', listener1)  // remove specific listener
emitter.emit('data', 'hello1')