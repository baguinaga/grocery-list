# Changelog 

## Development

- 0.1.0 Prototype
>Working 'wireframe' prototype without functioning database. Moved groceries.json into `./routes/index.js` for testing purposes. No styling.

- 0.2.0 Functional Back-End
>Completed database CRUD methods and Groceries Schema. Adds the ability to render the current grocery list to handlebars index. This will be used to enable looping the active list.

- 0.2.1 Modified Schema and db reset functionality
>Modified Schema to make the combined index of `"name", "type", "brand"` fields unique. Added seeds.json and created controller methods allowing for easier reset of development db (testing purposes). 

- 0.2.2 HTML/SCSS changes 
>Modified page layout to add svg icons alongside `<li>` elements. Changed grocery items into `<a>` tags to aid in accessibility. Each link will, in the future, make an ajax call to server retrieving item details. Added minor styling.

- 0.3.0 Working Details Buttons
>Client-side "read" capabilities are completed with the addition of "Details" button.

- 0.3.1 Added SCSS styling
>Added styling to page. Project is still missing a form component to edit list entries.