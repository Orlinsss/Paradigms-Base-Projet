 function CreateTab (table) {
     // créer header -> une ligne  et columns (date, capteur, valeur), stocké dans var table.

const table = document.createElement("table");
divTable.appendChild(table);
table.innerHTML = `
    <thead>
      <tr>
        <th>date</th>
        <th>capteur</th>
        <th>valeur</th>
      </tr>
    </thead>
    `;

return table;
 };

 