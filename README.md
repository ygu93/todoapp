# TodoApp

[Live Link](https://yue-todo-app.herokuapp.com/)

This data grid is created using vanilla JavaScript, HTML and CSS with build tools such as Webpack and Babel to allow use of ES6 syntax.

This takes the json in the data.json in the format and creates a data grid with the keys as columns and the values as rows.
```
{
  "1": { "Name": "Europe",
       "Plan": 10525200,
       "Forecast": 12700200,
       "BestCase": [12700200, 11700400],
       "Commit":[12700200, 11700400],
       "MonthlyPlan":12700200,
       "Comments":"Second smallest continent in the world"},
}
```

Rendering methods are located in datagrid.js while the major actions such as show/hide columns, sort by column name and more/less are located in the datagrid-actions file.

## Unimplemented Features
While fonts and size of grid cells are responsive using vw and vh units, further work could be done towards responsive design by changing the design of the grid upon breakpoints using media queries.
