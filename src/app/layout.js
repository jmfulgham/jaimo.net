export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8" />
            {/*<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />*/}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>JM Fulgham Fullstack Software Engineer</title>
            <meta name="description" content="JM Fulgham's Portfolio" />
        </head>
        <body>
        <div id="root">{children}</div>
        </body>
        </html>
    )
}
