// BEGIN CUSTOM JAVASCRIPT/jQuery HERE

//Load the existing notes on start
$( document ).ready(function() {

  var i = 0;

  //Loop through notes and display in rows
  for(i = 0; i < localStorage.length; i++) {
    $(".note-container").append('<div class="row note-wrap" id="note-wrap-'+i+'"><div class="row note"><div class="col-xs-offset-1 col-sm-offset-1 col-xs-9 col-sm-10"><p class="notes note-text" id="notes-'+i+'">'+localStorage.getItem("notes-"+i)+'</p></div><div class="col-xs-2 col-sm-1 text-right"><input type="button" class="note-delete btn" id="note-delete-'+i+'" onclick="noteDelete();" value="X"></input></div></div></div>');
  }

  //Add a new note to the list
  function notePush() {

    if ( $("#note-content").val() != "" ) {
      localStorage.setItem( "notes-" + i, $("#note-content").val());
      $(".note-container").append('<div class="row note-wrap" id="note-wrap-'+i+'"><div class="row note"><div class="col-xs-offset-1 col-sm-offset-1 col-xs-9 col-sm-10"><p class="notes note-text" id="notes-'+i+'">'+localStorage.getItem("notes-"+i)+'</p></div><div class="col-xs-2 col-sm-1 text-right"><input type="button" class="note-delete btn" id="note-delete-'+i+'" onclick="noteDelete();" value="X"></input></div></div></div>');
      $(".note-wrap-" + i).css('display', 'none');
      $(".note-wrap-" + i).slideDown('slow');
      $("#note-content").val("");
      i++;
    }
      // //Get value from text input
      // var note = JSON.stringify($("#note-content").val()),
      //
      // notes = localStorage.getItem('note');
      //
      // notes = notes ? JSON.parse(notes) : [];
      //
      // //Push note(s) into notes array
      // notes.push(note);
      //
      // //Stringify the notes
      // localStorage.setItem("note", JSON.stringify(notes));
      // console.log("The data was saved.");
      //
      // //Parse the notes to create an array
      // var parseNotes = JSON.parse(localStorage.getItem('note'));
      // var i = parseNotes.length - 1;
      // console.log(i);
      //
      // //Append the notes in rows
      // $(".note-container").append('<div class="row note-wrap" id="note-wrap-'+i+'"><div class="row note"><div class="col-xs-offset-1 col-sm-offset-1 col-xs-9 col-sm-10"><p class="notes note-text" id="notes-'+i+'">'+note+'</p></div><div class="col-xs-2 col-sm-1 text-right"><input type="button" class="note-delete btn" id="note-delete-'+i+'" onclick="noteDelete();" value="X"></input></div></div></div>');
      // $('.note-wrap-' + i).css('display', 'none');
      // $('.note-wrap-' + i).slideDown('slow');
      //
      // //Reset input value
      // $('#note-content').val("");
      //
      // i++;
  };

  // Remove a note
  $(document).on("click", ".note-delete", function() {
    localStorage.removeItem($(this).parent().attr("id"));
    $(this).parent().slideUp('slow', function() {
      $(this).remove();
    });
    // This part resets all the IDs
    for( i = 0; i < localStorage.length; i++) {
      if( !localStorage.getItem("task-"+ i)) {
        localStorage.setItem("task-"+ i, localStorage.getItem('task-' + (i + 1) )); // Moves the id up a level
        localStorage.removeItem("task-"+ (i + 1) );  // Removes the id 1 up from the deleted item
      }
    }
  });
});
