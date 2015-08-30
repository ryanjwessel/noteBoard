// BEGIN CUSTOM JAVASCRIPT/jQuery HERE

function notePush() {
    //Get value from text input
    var note = JSON.stringify({ text : $("#note-content").val() }),

    notes = localStorage.getItem('note');

    notes = notes ? JSON.parse(notes) : [];

    //Push note(s) into notes array
    notes.push(note);

    //Stringify the notes
    localStorage.setItem("note", JSON.stringify(notes));
    console.log("The data was saved.");

    //Parse the notes to create an array
    var parseNotes = JSON.parse(localStorage.getItem('note'));
    console.log(parseNotes);

    $('.note-show').text(localStorage.note);

    // //Loop through the parseNotes array to display the notes below the note submission
    //   var noteText = parseNotes.text;
    //   var tmpl = $('#note-display').content;
    //   var noteContent = $('span');
    //   noteContent.textContent = noteText;
    //   $('.notes-container').append(
    //     document.importNode(tmpl, true)
    //   );

      // var noteTemplate = document.querySelector('#note-show');
      // var clone = document.importNode(tmpl.content, true);
      // noteTemplate[0].appendChild(clone);
};

// <button onclick="useIt()">Use me</button>
// <div id="container"></div>
// <script>
//   function useIt() {
//     var content = document.querySelector('template').content;
//     // Update something in the template DOM.
//     var span = content.querySelector('span');
//     span.textContent = parseInt(span.textContent) + 1;
//     document.querySelector('#container').appendChild(
//         document.importNode(content, true));
//   }
// </script>
//
// <template>
//   <div>Template used: <span>0</span></div>
//   <script>alert('Thanks!')</script>
// </template>

//   <tbody>
//     <!-- existing data could optionally be included here -->
//   </tbody>
//
// <template id="productrow">
//   <tr>
//     <td class="record"></td>
//     <td></td>
//   </tr>
// </template>
//
// // Instantiate the table with the existing HTML tbody and the row with the template
//   var t = document.querySelector('#productrow'),
//   td = t.content.querySelectorAll("td");
//   td[0].textContent = "1235646565";
//   td[1].textContent = "Stuff";
//
//   // Clone the new row and insert it into the table
//   var tb = document.getElementsByTagName("tbody");
//   var clone = document.importNode(t.content, true);
//   tb[0].appendChild(clone);
//
//   // Create a new row
//   td[0].textContent = "0384928528";
//   td[1].textContent = "Acme Kidney Beans";
//
//   // Clone the new row and insert it into the table
//   var clone2 = document.importNode(t.content, true);
//   tb[0].appendChild(clone2);
//
