module.exports = ({ title, content, relativeToRoot }) => `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,
      maximum-scale=1.0, user-scalable=no"/>
    
    <title>${title}</title>

    <link rel="stylesheet" href="https://unpkg.com/mobi.css@2.0.0-alpha.1/dist/mobi.min.css" />
    <link rel="stylesheet" href="https://unpkg.com/mobi-plugin-flexbox/dist/mobi-plugin-flexbox.min.css" />
    <link rel="stylesheet" href="${relativeToRoot}/css/mobi-plugin-container.min.css" />
  </head>
  <body>
    ${content}
  </body>
</html>
`;
