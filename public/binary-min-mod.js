/*! binary.min.js build:0.2.1, production. Copyright(c) 2012 Eric Zhang <eric@ericzhang.com> MIT Licensed */
(function(e) {
    function n() {
        this._pieces = [],
        this._parts = []
    }
    function r(e) {
        this.index = 0,
        this.dataBuffer = e,
        this.dataView = new Uint8Array(this.dataBuffer),
        this.length = this.dataBuffer.byteLength
    }
    function i() {
        this.bufferBuilder = new n
    }
    function s(e) {
        var t = e.charCodeAt(0);
        return t <= 2047 ? "00" : t <= 65535 ? "000" : t <= 2097151 ? "0000" : t <= 67108863 ? "00000" : "000000"
    }
    function o(e) {
        return e.length > 600 ? (new Blob([e])).size : e.replace(/[^\u0000-\u007F]/g, s).length
    }
    function u() {
        this._events = {}
    }
    function l() {
        u.call(this)
    }
    function c(e, t) {
        l.call(this),
        t = f.extend({
            readDelay: 0,
            paused: !1
        }, t),
        this._source = e,
        this._start = 0,
        this._readChunkSize = t.chunkSize || e.size,
        this._readDelay = t.readDelay,
        this.readable = !0,
        this.paused = t.paused,
        this._read()
    }
    function h(e, t, n, r) {
        if (!(this instanceof h))
            return new h(options);
        var i = this;
        l.call(this),
        this.id = t,
        this._socket = e,
        this.writable = !0,
        this.readable = !0,
        this.paused = !1,
        this._closed = !1,
        this._ended = !1,
        n && this._write(1, r, this.id)
    }
    function p(e, t) {
        if (!(this instanceof p))
            return new p(e,t);
        u.call(this);
        var n = this;
        this._options = f.extend({
            chunkSize: 40960
        }, t),
        this.streams = {},
        typeof e == "string" ? (this._nextId = 0,
        this._socket = new WebSocket(e)) : (this._nextId = 1,
        this._socket = e),
        this._socket.binaryType = "arraybuffer",
        this._socket.addEventListener("open", function() {
            n.emit("open")
        }),
        this._socket.addEventListener("error", function(e) {
            var t = Object.keys(n.streams);
            for (var r = 0, i = t.length; r < i; r++)
                n.streams[t[r]]._onError(e);
            n.emit("error", e)
        }),
        this._socket.addEventListener("close", function(e, t) {
            var r = Object.keys(n.streams);
            for (var i = 0, s = r.length; i < s; i++)
                n.streams[r[i]]._onClose();
            n.emit("close", e, t)
        }),
        this._socket.addEventListener("message", function(e, t) {
            f.setZeroTimeout(function() {
                e = e.data;
                try {
                    e = f.unpack(e)
                } catch (t) {
                    return n.emit("error", new Error("Received unparsable message: " + t))
                }
                if (!(e instanceof Array))
                    return n.emit("error", new Error("Received non-array message"));
                if (e.length != 3)
                    return n.emit("error", new Error("Received message with wrong part count: " + e.length));
                if ("number" != typeof e[0])
                    return n.emit("error", new Error("Received message with non-number type: " + e[0]));
                switch (e[0]) {
                case 0:
                    break;
                case 1:
                    var r = e[1]
                      , i = e[2]
                      , s = n._receiveStream(i);
                    n.emit("stream", s, r);
                    break;
                case 2:
                    var o = e[1]
                      , i = e[2]
                      , s = n.streams[i];
                    s ? s._onData(o) : n.emit("error", new Error("Received `data` message for unknown stream: " + i));
                    break;
                case 3:
                    var i = e[2]
                      , s = n.streams[i];
                    s ? s._onPause() : n.emit("error", new Error("Received `pause` message for unknown stream: " + i));
                    break;
                case 4:
                    var i = e[2]
                      , s = n.streams[i];
                    s ? s._onResume() : n.emit("error", new Error("Received `resume` message for unknown stream: " + i));
                    break;
                case 5:
                    var i = e[2]
                      , s = n.streams[i];
                    s ? s._onEnd() : n.emit("error", new Error("Received `end` message for unknown stream: " + i));
                    break;
                case 6:
                    var i = e[2]
                      , s = n.streams[i];
                    s ? s._onClose() : n.emit("error", new Error("Received `close` message for unknown stream: " + i));
                    break;
                default:
                    n.emit("error", new Error("Unrecognized message type received: " + e[0]))
                }
            })
        })
    }
    var t = {};
    t.useBlobBuilder = function() {
        try {
            return new Blob([]),
            !1
        } catch (e) {
            return !0
        }
    }(),
    t.useArrayBufferView = !t.useBlobBuilder && function() {
        try {
            return (new Blob([new Uint8Array([])])).size === 0
        } catch (e) {
            return !0
        }
    }(),
    t.supportsBinaryWebsockets = function() {
        try {
            var e = new WebSocket("wss://null");
            return e.onerror = function() {}
            ,
            typeof e.binaryType != "undefined" ? !0 : !1
        } catch (t) {
            return !1
        }
    }(),
    e.binaryFeatures = t,
    e.BlobBuilder = window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder || window.BlobBuilder,
    n.prototype.append = function(e) {
        typeof e == "number" ? this._pieces.push(e) : (this.flush(),
        this._parts.push(e))
    }
    ,
    n.prototype.flush = function() {
        if (this._pieces.length > 0) {
            var e = new Uint8Array(this._pieces);
            t.useArrayBufferView || (e = e.buffer),
            this._parts.push(e),
            this._pieces = []
        }
    }
    ,
    n.prototype.getBuffer = function() {
        this.flush();
        if (t.useBlobBuilder) {
            var e = new BlobBuilder;
            for (var n = 0, r = this._parts.length; n < r; n++)
                e.append(this._parts[n]);
            return e.getBlob()
        }
        return new Blob(this._parts)
    }
    ,
    e.BinaryPack = {
        unpack: function(e) {
            var t = new r(e);
            return t.unpack()
        },
        pack: function(e) {
            var t = new i;
            t.pack(e);
            var n = t.getBuffer();
            return n
        }
    },
    r.prototype.unpack = function() {
        var e = this.unpack_uint8();
        if (e < 128) {
            var t = e;
            return t
        }
        if ((e ^ 224) < 32) {
            var n = (e ^ 224) - 32;
            return n
        }
        var r;
        if ((r = e ^ 160) <= 15)
            return this.unpack_raw(r);
        if ((r = e ^ 176) <= 15)
            return this.unpack_string(r);
        if ((r = e ^ 144) <= 15)
            return this.unpack_array(r);
        if ((r = e ^ 128) <= 15)
            return this.unpack_map(r);
        switch (e) {
        case 192:
            return null;
        case 193:
            return undefined;
        case 194:
            return !1;
        case 195:
            return !0;
        case 202:
            return this.unpack_float();
        case 203:
            return this.unpack_double();
        case 204:
            return this.unpack_uint8();
        case 205:
            return this.unpack_uint16();
        case 206:
            return this.unpack_uint32();
        case 207:
            return this.unpack_uint64();
        case 208:
            return this.unpack_int8();
        case 209:
            return this.unpack_int16();
        case 210:
            return this.unpack_int32();
        case 211:
            return this.unpack_int64();
        case 212:
            return undefined;
        case 213:
            return undefined;
        case 214:
            return undefined;
        case 215:
            return undefined;
        case 216:
            return r = this.unpack_uint16(),
            this.unpack_string(r);
        case 217:
            return r = this.unpack_uint32(),
            this.unpack_string(r);
        case 218:
            return r = this.unpack_uint16(),
            this.unpack_raw(r);
        case 219:
            return r = this.unpack_uint32(),
            this.unpack_raw(r);
        case 220:
            return r = this.unpack_uint16(),
            this.unpack_array(r);
        case 221:
            return r = this.unpack_uint32(),
            this.unpack_array(r);
        case 222:
            return r = this.unpack_uint16(),
            this.unpack_map(r);
        case 223:
            return r = this.unpack_uint32(),
            this.unpack_map(r)
        }
    }
    ,
    r.prototype.unpack_uint8 = function() {
        var e = this.dataView[this.index] & 255;
        return this.index++,
        e
    }
    ,
    r.prototype.unpack_uint16 = function() {
        var e = this.read(2)
          , t = (e[0] & 255) * 256 + (e[1] & 255);
        return this.index += 2,
        t
    }
    ,
    r.prototype.unpack_uint32 = function() {
        var e = this.read(4)
          , t = ((e[0] * 256 + e[1]) * 256 + e[2]) * 256 + e[3];
        return this.index += 4,
        t
    }
    ,
    r.prototype.unpack_uint64 = function() {
        var e = this.read(8)
          , t = ((((((e[0] * 256 + e[1]) * 256 + e[2]) * 256 + e[3]) * 256 + e[4]) * 256 + e[5]) * 256 + e[6]) * 256 + e[7];
        return this.index += 8,
        t
    }
    ,
    r.prototype.unpack_int8 = function() {
        var e = this.unpack_uint8();
        return e < 128 ? e : e - 256
    }
    ,
    r.prototype.unpack_int16 = function() {
        var e = this.unpack_uint16();
        return e < 32768 ? e : e - 65536
    }
    ,
    r.prototype.unpack_int32 = function() {
        var e = this.unpack_uint32();
        return e < Math.pow(2, 31) ? e : e - Math.pow(2, 32)
    }
    ,
    r.prototype.unpack_int64 = function() {
        var e = this.unpack_uint64();
        return e < Math.pow(2, 63) ? e : e - Math.pow(2, 64)
    }
    ,
    r.prototype.unpack_raw = function(e) {
        if (this.length < this.index + e)
            throw new Error("BinaryPackFailure: index is out of range " + this.index + " " + e + " " + this.length);
        var t = this.dataBuffer.slice(this.index, this.index + e);
        return this.index += e,
        t
    }
    ,
    r.prototype.unpack_string = function(e) {
        var t = this.read(e), n = 0, r = "", i, s;
        while (n < e)
            i = t[n],
            i < 128 ? (r += String.fromCharCode(i),
            n++) : (i ^ 192) < 32 ? (s = (i ^ 192) << 6 | t[n + 1] & 63,
            r += String.fromCharCode(s),
            n += 2) : (s = (i & 15) << 12 | (t[n + 1] & 63) << 6 | t[n + 2] & 63,
            r += String.fromCharCode(s),
            n += 3);
        return this.index += e,
        r
    }
    ,
    r.prototype.unpack_array = function(e) {
        var t = new Array(e);
        for (var n = 0; n < e; n++)
            t[n] = this.unpack();
        return t
    }
    ,
    r.prototype.unpack_map = function(e) {
        var t = {};
        for (var n = 0; n < e; n++) {
            var r = this.unpack()
              , i = this.unpack();
            t[r] = i
        }
        return t
    }
    ,
    r.prototype.unpack_float = function() {
        var e = this.unpack_uint32()
          , t = e >> 31
          , n = (e >> 23 & 255) - 127
          , r = e & 8388607 | 8388608;
        return (t == 0 ? 1 : -1) * r * Math.pow(2, n - 23)
    }
    ,
    r.prototype.unpack_double = function() {
        var e = this.unpack_uint32()
          , t = this.unpack_uint32()
          , n = e >> 31
          , r = (e >> 20 & 2047) - 1023
          , i = e & 1048575 | 1048576
          , s = i * Math.pow(2, r - 20) + t * Math.pow(2, r - 52);
        return (n == 0 ? 1 : -1) * s
    }
    ,
    r.prototype.read = function(e) {
        var t = this.index;
        if (t + e <= this.length)
            return this.dataView.subarray(t, t + e);
        throw new Error("BinaryPackFailure: read index out of range")
    }
    ,
    i.prototype.getBuffer = function() {
        return this.bufferBuilder.getBuffer()
    }
    ,
    i.prototype.pack = function(e) {
        var n = typeof e;
        if (n == "string")
            this.pack_string(e);
        else if (n == "number")
            Math.floor(e) === e ? this.pack_integer(e) : this.pack_double(e);
        else if (n == "boolean")
            e === !0 ? this.bufferBuilder.append(195) : e === !1 && this.bufferBuilder.append(194);
        else if (n == "undefined")
            this.bufferBuilder.append(192);
        else {
            if (n != "object")
                throw new Error('Type "' + n + '" not yet supported');
            if (e === null)
                this.bufferBuilder.append(192);
            else {
                var r = e.constructor;
                if (r == Array)
                    this.pack_array(e);
                else if (r == Blob || r == File)
                    this.pack_bin(e);
                else if (r == ArrayBuffer)
                    t.useArrayBufferView ? this.pack_bin(new Uint8Array(e)) : this.pack_bin(e);
                else if ("BYTES_PER_ELEMENT"in e)
                    t.useArrayBufferView ? this.pack_bin(new Uint8Array(e.buffer)) : this.pack_bin(e.buffer);
                else if (r == Object)
                    this.pack_object(e);
                else if (r == Date)
                    this.pack_string(e.toString());
                else {
                    if (typeof e.toBinaryPack != "function")
                        throw new Error('Type "' + r.toString() + '" not yet supported');
                    this.bufferBuilder.append(e.toBinaryPack())
                }
            }
        }
        this.bufferBuilder.flush()
    }
    ,
    i.prototype.pack_bin = function(e) {
        var t = e.length || e.byteLength || e.size;
        if (t <= 15)
            this.pack_uint8(160 + t);
        else if (t <= 65535)
            this.bufferBuilder.append(218),
            this.pack_uint16(t);
        else {
            if (!(t <= 4294967295))
                throw new Error("Invalid length");
            this.bufferBuilder.append(219),
            this.pack_uint32(t)
        }
        this.bufferBuilder.append(e)
    }
    ,
    i.prototype.pack_string = function(e) {
        var t = o(e);
        if (t <= 15)
            this.pack_uint8(176 + t);
        else if (t <= 65535)
            this.bufferBuilder.append(216),
            this.pack_uint16(t);
        else {
            if (!(t <= 4294967295))
                throw new Error("Invalid length");
            this.bufferBuilder.append(217),
            this.pack_uint32(t)
        }
        this.bufferBuilder.append(e)
    }
    ,
    i.prototype.pack_array = function(e) {
        var t = e.length;
        if (t <= 15)
            this.pack_uint8(144 + t);
        else if (t <= 65535)
            this.bufferBuilder.append(220),
            this.pack_uint16(t);
        else {
            if (!(t <= 4294967295))
                throw new Error("Invalid length");
            this.bufferBuilder.append(221),
            this.pack_uint32(t)
        }
        for (var n = 0; n < t; n++)
            this.pack(e[n])
    }
    ,
    i.prototype.pack_integer = function(e) {
        if (-32 <= e && e <= 127)
            this.bufferBuilder.append(e & 255);
        else if (0 <= e && e <= 255)
            this.bufferBuilder.append(204),
            this.pack_uint8(e);
        else if (-128 <= e && e <= 127)
            this.bufferBuilder.append(208),
            this.pack_int8(e);
        else if (0 <= e && e <= 65535)
            this.bufferBuilder.append(205),
            this.pack_uint16(e);
        else if (-32768 <= e && e <= 32767)
            this.bufferBuilder.append(209),
            this.pack_int16(e);
        else if (0 <= e && e <= 4294967295)
            this.bufferBuilder.append(206),
            this.pack_uint32(e);
        else if (-2147483648 <= e && e <= 2147483647)
            this.bufferBuilder.append(210),
            this.pack_int32(e);
        else if (-0x8000000000000000 <= e && e <= 0x8000000000000000)
            this.bufferBuilder.append(211),
            this.pack_int64(e);
        else {
            if (!(0 <= e && e <= 0x10000000000000000))
                throw new Error("Invalid integer");
            this.bufferBuilder.append(207),
            this.pack_uint64(e)
        }
    }
    ,
    i.prototype.pack_double = function(e) {
        var t = 0;
        e < 0 && (t = 1,
        e = -e);
        var n = Math.floor(Math.log(e) / Math.LN2)
          , r = e / Math.pow(2, n) - 1
          , i = Math.floor(r * Math.pow(2, 52))
          , s = Math.pow(2, 32)
          , o = t << 31 | n + 1023 << 20 | i / s & 1048575
          , u = i % s;
        this.bufferBuilder.append(203),
        this.pack_int32(o),
        this.pack_int32(u)
    }
    ,
    i.prototype.pack_object = function(e) {
        var t = Object.keys(e)
          , n = t.length;
        if (n <= 15)
            this.pack_uint8(128 + n);
        else if (n <= 65535)
            this.bufferBuilder.append(222),
            this.pack_uint16(n);
        else {
            if (!(n <= 4294967295))
                throw new Error("Invalid length");
            this.bufferBuilder.append(223),
            this.pack_uint32(n)
        }
        for (var r in e)
            e.hasOwnProperty(r) && (this.pack(r),
            this.pack(e[r]))
    }
    ,
    i.prototype.pack_uint8 = function(e) {
        this.bufferBuilder.append(e)
    }
    ,
    i.prototype.pack_uint16 = function(e) {
        this.bufferBuilder.append(e >> 8),
        this.bufferBuilder.append(e & 255)
    }
    ,
    i.prototype.pack_uint32 = function(e) {
        var t = e & 4294967295;
        this.bufferBuilder.append((t & 4278190080) >>> 24),
        this.bufferBuilder.append((t & 16711680) >>> 16),
        this.bufferBuilder.append((t & 65280) >>> 8),
        this.bufferBuilder.append(t & 255)
    }
    ,
    i.prototype.pack_uint64 = function(e) {
        var t = e / Math.pow(2, 32)
          , n = e % Math.pow(2, 32);
        this.bufferBuilder.append((t & 4278190080) >>> 24),
        this.bufferBuilder.append((t & 16711680) >>> 16),
        this.bufferBuilder.append((t & 65280) >>> 8),
        this.bufferBuilder.append(t & 255),
        this.bufferBuilder.append((n & 4278190080) >>> 24),
        this.bufferBuilder.append((n & 16711680) >>> 16),
        this.bufferBuilder.append((n & 65280) >>> 8),
        this.bufferBuilder.append(n & 255)
    }
    ,
    i.prototype.pack_int8 = function(e) {
        this.bufferBuilder.append(e & 255)
    }
    ,
    i.prototype.pack_int16 = function(e) {
        this.bufferBuilder.append((e & 65280) >> 8),
        this.bufferBuilder.append(e & 255)
    }
    ,
    i.prototype.pack_int32 = function(e) {
        this.bufferBuilder.append(e >>> 24 & 255),
        this.bufferBuilder.append((e & 16711680) >>> 16),
        this.bufferBuilder.append((e & 65280) >>> 8),
        this.bufferBuilder.append(e & 255)
    }
    ,
    i.prototype.pack_int64 = function(e) {
        var t = Math.floor(e / Math.pow(2, 32))
          , n = e % Math.pow(2, 32);
        this.bufferBuilder.append((t & 4278190080) >>> 24),
        this.bufferBuilder.append((t & 16711680) >>> 16),
        this.bufferBuilder.append((t & 65280) >>> 8),
        this.bufferBuilder.append(t & 255),
        this.bufferBuilder.append((n & 4278190080) >>> 24),
        this.bufferBuilder.append((n & 16711680) >>> 16),
        this.bufferBuilder.append((n & 65280) >>> 8),
        this.bufferBuilder.append(n & 255)
    }
    ;
    var a = Array.isArray;
    u.prototype.addListener = function(e, t, n, r) {
        if ("function" != typeof t)
            throw new Error("addListener only takes instances of Function");
        this.emit("newListener", e, typeof t.listener == "function" ? t.listener : t),
        this._events[e] ? a(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t
    }
    ,
    u.prototype.on = u.prototype.addListener,
    u.prototype.once = function(e, t, n) {
        function i() {
            r.removeListener(e, i),
            t.apply(this, arguments)
        }
        if ("function" != typeof t)
            throw new Error(".once only takes instances of Function");
        var r = this;
        return i.listener = t,
        r.on(e, i),
        this
    }
    ,
    u.prototype.removeListener = function(e, t, n) {
        if ("function" != typeof t)
            throw new Error("removeListener only takes instances of Function");
        if (!this._events[e])
            return this;
        var r = this._events[e];
        if (a(r)) {
            var i = -1;
            for (var s = 0, o = r.length; s < o; s++)
                if (r[s] === t || r[s].listener && r[s].listener === t) {
                    i = s;
                    break
                }
            if (i < 0)
                return this;
            r.splice(i, 1),
            r.length == 0 && delete this._events[e]
        } else
            (r === t || r.listener && r.listener === t) && delete this._events[e];
        return this
    }
    ,
    u.prototype.off = u.prototype.removeListener,
    u.prototype.removeAllListeners = function(e) {
        return arguments.length === 0 ? (this._events = {},
        this) : (e && this._events && this._events[e] && (this._events[e] = null),
        this)
    }
    ,
    u.prototype.listeners = function(e) {
        return this._events[e] || (this._events[e] = []),
        a(this._events[e]) || (this._events[e] = [this._events[e]]),
        this._events[e]
    }
    ,
    u.prototype.emit = function(e) {
        var e = arguments[0]
          , t = this._events[e];
        if (!t)
            return !1;
        if (typeof t == "function") {
            switch (arguments.length) {
            case 1:
                t.call(this);
                break;
            case 2:
                t.call(this, arguments[1]);
                break;
            case 3:
                t.call(this, arguments[1], arguments[2]);
                break;
            default:
                var n = arguments.length
                  , r = new Array(n - 1);
                for (var i = 1; i < n; i++)
                    r[i - 1] = arguments[i];
                t.apply(this, r)
            }
            return !0
        }
        if (a(t)) {
            var n = arguments.length
              , r = new Array(n - 1);
            for (var i = 1; i < n; i++)
                r[i - 1] = arguments[i];
            var s = t.slice();
            for (var i = 0, n = s.length; i < n; i++)
                s[i].apply(this, r);
            return !0
        }
        return !1
    }
    ;
    var f = {
        inherits: function(e, t) {
            e.super_ = t,
            e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        },
        extend: function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        },
        pack: BinaryPack.pack,
        unpack: BinaryPack.unpack,
        setZeroTimeout: function(e) {
            function r(r) {
                t.push(r),
                e.postMessage(n, "*")
            }
            function i(r) {
                r.source == e && r.data == n && (r.stopPropagation && r.stopPropagation(),
                t.length && t.shift()())
            }
            var t = []
              , n = "zero-timeout-message";
            return e.addEventListener ? e.addEventListener("message", i, !0) : e.attachEvent && e.attachEvent("onmessage", i),
            r
        }(this)
    };
    f.inherits(l, u),
    l.prototype.pipe = function(e, t) {
        function r(t) {
            e.writable && !1 === e.write(t) && n.pause && n.pause()
        }
        function i() {
            n.readable && n.resume && n.resume()
        }
        function o() {
            if (s)
                return;
            s = !0,
            e.end()
        }
        function u() {
            if (s)
                return;
            s = !0,
            e.destroy()
        }
        function a(e) {
            f();
            if (this.listeners("error").length === 0)
                throw e
        }
        function f() {
            n.removeListener("data", r),
            e.removeListener("drain", i),
            n.removeListener("end", o),
            n.removeListener("close", u),
            n.removeListener("error", a),
            e.removeListener("error", a),
            n.removeListener("end", f),
            n.removeListener("close", f),
            e.removeListener("end", f),
            e.removeListener("close", f)
        }
        var n = this;
        n.on("data", r),
        e.on("drain", i),
        !e._isStdio && (!t || t.end !== !1) && (n.on("end", o),
        n.on("close", u));
        var s = !1;
        return n.on("error", a),
        e.on("error", a),
        n.on("end", f),
        n.on("close", f),
        e.on("end", f),
        e.on("close", f),
        e.emit("pipe", n),
        e
    }
    ,
    f.inherits(c, l),
    c.prototype.pause = function() {
        this.paused = !0
    }
    ,
    c.prototype.resume = function() {
        this.paused = !1,
        this._read()
    }
    ,
    c.prototype.destroy = function() {
        this.readable = !1,
        clearTimeout(this._timeoutId)
    }
    ,
    c.prototype._read = function() {
        function t() {
            e._emitReadChunk()
        }
        var e = this
          , n = this._readDelay;
        n !== 0 ? this._timeoutId = setTimeout(t, n) : f.setZeroTimeout(t)
    }
    ,
    c.prototype._emitReadChunk = function() {
        if (this.paused || !this.readable)
            return;
        var e = Math.min(this._source.size - this._start, this._readChunkSize);
        if (e === 0) {
            this.readable = !1,
            this.emit("end");
            return
        }
        var t = this._start + e
          , n = (this._source.slice || this._source.webkitSlice || this._source.mozSlice).call(this._source, this._start, t);
        this._start = t,
        this._read(),
        this.emit("data", n)
    }
    ,
    e.BlobReadStream = c,
    f.inherits(h, l),
    h.prototype._onDrain = function() {
        this.paused || this.emit("drain")
    }
    ,
    h.prototype._onClose = function() {
        if (this._closed)
            return;
        this.readable = !1,
        this.writable = !1,
        this._closed = !0,
        this.emit("close")
    }
    ,
    h.prototype._onError = function(e) {
        this.readable = !1,
        this.writable = !1,
        this.emit("error", e)
    }
    ,
    h.prototype._onPause = function() {
        this.paused = !0,
        this.emit("pause")
    }
    ,
    h.prototype._onResume = function() {
        this.paused = !1,
        this.emit("resume"),
        this.emit("drain")
    }
    ,
    h.prototype._write = function(e, t, n) {
        if (this._socket.readyState !== this._socket.constructor.OPEN)
            return !1;
        var r = f.pack([e, t, n]);
        return this._socket.send(r) !== !1
    }
    ,
    h.prototype.write = function(e) {
        if (this.writable) {
            var t = this._write(2, e, this.id);
            return !this.paused && t
        }
        throw new Error("Stream is not writable")
    }
    ,
    h.prototype.end = function() {
        this._ended = !0,
        this.readable = !1,
        this._write(5, null, this.id)
    }
    ,
    h.prototype.destroy = h.prototype.destroySoon = function() {
        this._onClose(),
        this._write(6, null, this.id)
    }
    ,
    h.prototype._onEnd = function() {
        if (this._ended)
            return;
        this._ended = !0,
        this.readable = !1,
        this.emit("end")
    }
    ,
    h.prototype._onData = function(e) {
        this.emit("data", e)
    }
    ,
    h.prototype.pause = function() {
        this._onPause(),
        this._write(3, null, this.id)
    }
    ,
    h.prototype.resume = function() {
        this._onResume(),
        this._write(4, null, this.id)
    }
    ,
    f.inherits(p, u),
    p.prototype.send = function(e, n) {
        var r = this.createStream(n);
        if (e instanceof l)
            e.pipe(r);
        else if (f.isNode === !0)
            Buffer.isBuffer(e) ? (new BufferReadStream(e,{
                chunkSize: this._options.chunkSize
            })).pipe(r) : r.write(e);
        else if (f.isNode !== !0)
            if (e.constructor == Blob || e.constructor == File)
                (new c(e,{
                    chunkSize: this._options.chunkSize
                })).pipe(r);
            else if (e.constructor == ArrayBuffer) {
                var i;
                t.useArrayBufferView && (e = new Uint8Array(e));
                if (t.useBlobBuilder) {
                    var s = new BlobBuilder;
                    s.append(e),
                    i = s.getBlob()
                } else
                    i = new Blob([e]);
                (new c(i,{
                    chunkSize: this._options.chunkSize
                })).pipe(r)
            } else if (typeof e == "object" && "BYTES_PER_ELEMENT"in e) {
                var i;
                t.useArrayBufferView || (e = e.buffer);
                if (t.useBlobBuilder) {
                    var s = new BlobBuilder;
                    s.append(e),
                    i = s.getBlob()
                } else
                    i = new Blob([e]);
                (new c(i,{
                    chunkSize: this._options.chunkSize
                })).pipe(r)
            } else
                r.write(e);
        return r
    }
    ,
    p.prototype._receiveStream = function(e) {
        var t = this
          , n = new h(this._socket,e,!1);
        return n.on("close", function() {
            delete t.streams[e]
        }),
        this.streams[e] = n,
        n
    }
    ,
    p.prototype.createStream = function(e) {
        if (this._socket.readyState !== WebSocket.OPEN)
            throw new Error("Client is not yet connected or has closed");
        var t = this
          , n = this._nextId;
        this._nextId += 2;
        var r = new h(this._socket,n,!0,e);
        return r.on("close", function() {
            delete t.streams[n]
        }),
        this.streams[n] = r,
        r
    }
    ,
    p.prototype.close = p.prototype.destroy = function() {
        this._socket.close()
    }
    ,
    e.BinaryClient = p
}
)(this)
