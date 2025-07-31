class CircularBuffer {
  constructor(size) {
    this.size = size;
    this._buffer = [];
    this.elementIndex = 0;
  }

  bufferEmpty () {
    return this._buffer.length === 0;
  }

  bufferFull () {
    return this._buffer.length === this.size;
  }

  write(value, force = false) {
    if (this.bufferFull() && !force) {
      throw new BufferFullError;
    }

    this.elementIndex++;
    const element = {
      value: value,
      index: this.elementIndex
    }

    this.sortBuffer();
    
    if (!force) {
      this._buffer.push(element);
    } else {
      this._buffer[0] = element;
    }
  }

  read() {
    if (this.bufferEmpty()) {
      throw new BufferEmptyError;
    }

    this.sortBuffer();

    return this._buffer.shift().value;
  }

  forceWrite(value) {
    if (!this.bufferFull()) {
      this.write(value);
    } else {
      this.write(value, true);
    }
  }

  clear() {
    this.sortBuffer();

    this._buffer.shift();
  }

  sortBuffer () {
    this._buffer.sort((a,b) => { return a.index - b.index });
  }
}

export default CircularBuffer;

export class BufferFullError extends Error {
  constructor() {
    super();
  }
}

export class BufferEmptyError extends Error {
  constructor() {
    super();
  }
}