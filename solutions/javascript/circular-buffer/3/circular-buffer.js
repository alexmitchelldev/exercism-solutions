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

  write(value) {
    if (this.bufferFull()) {
      throw new BufferFullError;
    }

    this._buffer.push(value);
  }

  read() {
    if (this.bufferEmpty()) {
      throw new BufferEmptyError;
    }

    return this._buffer.shift();
  }

  forceWrite(value) {
    while (this._buffer.length >= this.size) {
      this._buffer.shift();
    }

    this.write(value);
  }

  clear() {
    this._buffer = [];
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