exports.getName = (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Name Display</title>
        </head>
        <body>
            <h1>
                Moroni Gois
            </h1>
        </body>
        </html>
    `);
};