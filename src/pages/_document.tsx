import Document, { Html, Head, Main, NextScript} from 'next/document';
import React from 'react';

class MyDocument extends Document {
    return () {
        return (
            <Html lang='vi'>
                <Head/>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument;