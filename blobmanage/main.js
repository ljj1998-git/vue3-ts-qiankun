import React from 'react'
import * as ReactDOMClient from 'react-dom/client'

const myDiv = React.createElement('div',{title:'德玛西亚'},'吨吨吨')

const root = ReactDOMClient.createRoot(document.getElementById('app')); 
// Initial render: Render an element to the root. 
root.render(myDiv); 

console.log(55);