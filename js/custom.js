// BEGIN CUSTOM JAVASCRIPT/jQuery HERE

$(".note-enter").click(function() {
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

    //Loop through the parseNotes array to display the notes below the note submission
    for (var i = 0; i < parseNotes.length; i++) {
      var note = parseNotes[i];
      var tmpl = document.getElementById('note-display').content.cloneNode(true);
      tmpl.querySelector('.noteDisplay').innerText = parseNotes.text;
      parseNotes.appendChild(tmpl);
    }
});
