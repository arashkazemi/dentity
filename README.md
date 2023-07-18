## Dentity
### A Lightweight Decoder and Encoder for HTML Entities

Dentity is a small library for encoding and decoding HTML entities. It covers
all the W3C defined entities, supports strict and non-strict conversions, and
can work both in browser and node environments, which means that it doesn't use 
DOMParser or similar methods. It is fast and also small. The minified version
is only around 31KB, and smaller than 14KB when gzipped. It is also well tested.


### Installation

The latest source code of Dentity can be found at
[https://github.com/arashkazemi/dentity](https://github.com/arashkazemi/dentity)

To use in other node projects, install Dentity from npm public repository:

        npm install dentity  

and then import it using

        const Dentity = require("dentity");

To use in a webpage, download the source code and extract it. The minified 
script itself is available in the `/dist` directory. 

It is also available via unpkg CDN and can be included in HTML files using

        <script src="https://unpkg.com/dentity/dist/dentity.min.js"></script>


### Usage

To encode a string, use the `encode` function:

        Dentity.encode("hello > < ≠");

which results in

         "hello &gt; &lt; &ne;" 

and similarly you can use `decode` function to do the reverse transform:

        Dentity.decode("hello &gt; &lt; &ne;");

which will give `"hello > < ≠"` back.

The `decode` function takes a second argument `is_strict` which if true causes 
the function to only accept W3C valid encodings and doesn't accept the exceptions 
like `&copy` (without the semicolon at the end). Its default value is false.

A helper function `registerPrototypes` is also available, that would register 
both functions on String.prototype as `encodeHTML` and `decodeHTML` so the above 
examples can be done like:

        "hello > < ≠".encodeHTML()

and 

        "hello &gt; &lt; &ne;".decodeHTML()

which can be very helpful in most situations, but this is not the default behavior
because of the possibility of unwanted consequences like name collisions. So one
should call 

        Dentity.registerPrototypes();

once after importing Dentity in order to use them.

---

Copyright (C) 2023 Arash Kazemi <contact.arash.kazemi@gmail.com>

Dentity project is subject to the terms of BSD-2-Clause License. See the `LICENSE` file for more details.
