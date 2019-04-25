//global activeId variable, changed on edit and used to check if an item is being edited
let activeId = "";

/*
function readDetails is used to write to the "details table" once the "details" button is pressed
additionally the qtyTable is give the data-id property to store the document's databaseId
This data-id prop is stored to the global activeId variable once the "edit" button is pressed.
*/
const readDetails = item => {
  $("#categoryTable").text(item.category);
  $("#nameTable").text(item.item);
  $("#typeTable").text(item.type);
  $("#brandTable").text(item.brand);
  $("#qtyTable").text(item.qty);
  $("#qtyTable").attr("data-id", item._id);
};


// activeValues() reads the current values on the forms and creates an object that can sent to the db
const activeValues = () => {
  const formValues = {};
  $.each($("#createUpdateForm").serializeArray(), function() {
    formValues[this.name] = this.value;
  });
  return formValues;
};

/* 
onClick event listener for "details" button, uses an ajax get request 
to obtain current db values and writes to the DOM using readDetails(), see above
*/
$(".itemDetails").on("click", function(event) {
  // preventing default behavior of button on click events
  event.preventDefault();

  // retrieve the item's databaseId from the data-id property of the view button
  const databaseId = $(this).data("id");

  // ajax get request for given id, object response passed along to readDetails function
  $.get(`./api/groceries/${databaseId}`, response => {
    return readDetails(response);
  }).then(function() {

    // animated scroll to details panel, meant for mobile devices
    $("html, body").animate({
      scrollTop: ($("#details_panel").offset().top)
  },600);
  });
});

/*
upon the edit button being clicked it populates the form with the current item details
and stores the item's id in the activeId variable then removes the "data-id" prop.
The values on the details table are passes along to the form for ease of editing.
*/
$("#editButton").on("click", function(event) {
  event.preventDefault();
  activeId = $("#qtyTable").attr("data-id");
  $("#qtyTable").removeAttr("data-id");

  $("#categoryInput").val(`${$("#categoryTable").text()}`);
  $("#nameInput").val(`${$("#nameTable").text()}`);
  $("#typeInput").val(`${$("#typeTable").text()}`);
  $("#brandInput").val(`${$("#brandTable").text()}`);
  $("#qtyInput").val(`${$("#qtyTable").text()}`);
});

/*
On form submit the new input values are used to update an item if activeId is not an empty string
(active.length >0) otherwise the else block will use a post request to create an new object.
*/
$("#createUpdateForm").on("submit", function(event) {
  event.preventDefault();

  // using activeValues() to create input value object
  const inputValues = activeValues();

  // databaseId is defined if activeId is a non empty string.
  const databaseId = activeId.length > 0 ? activeId : undefined;

  // If a databaseId exists the submit button will update the item with an ajax put request
  if (databaseId) {
    $.ajax(`/api/groceries/${databseId}`, {
      type: "PUT",
      data: inputValues
    })
      .then(function() {
        return location.reload();
      })
      .fail(function(err) {
        throw err;
      });
  } else {
    // otherwise, if no databaseId is present then the item will be created
    $.post("/api/groceries/", inputValues, response => {
      console.log(response);
      return location.reload();
    }).fail(function(err) {
      throw err;
    });
  }
});


// onClick event listener for delete button will only run if there is activeId.
$("#delete-btn").on("click", function(event) {
  event.preventDefault();

  const databaseId = activeId.length > 0 ? activeId : undefined;

  if (databaseId) {
    $.ajax(`/api/groceries/${activeId}`, {
      type: "DELETE"
    })
      .then(function() {
        return location.reload();
      })
      .fail(function(err) {
        throw err;
      });
  } else {
    $("#errorMessage").attr("style", "display: block;")
  }
});
