export default ({ markup, css }) => {
  return `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        >
        <title>MERN Skeleton</title>
        ${css}
        <link href="https://www.dafontfree.net/embed/cHJhZ21hdGljYS1leHRyYWJvbGQmZGF0YS80Ni9wLzYyODM3L3ByZzg1Lm90Zg" rel="stylesheet" type="text/css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="./dist/main.css">
        <style>
            a{
              text-decoration: none;
              color: #061d95
            }
        </style>
      </head>
      <body style="margin:0">
        <div id="root">${markup}</div>
        <script type="text/javascript" src="/dist/bundle.js"></script>
      </body>
    </html>`;
};
