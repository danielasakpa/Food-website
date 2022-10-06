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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="./dist/main.css">
        <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
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
        <script src="bower_components/aos/dist/aos.js"></script> 
      </body>
    </html>`;
};
