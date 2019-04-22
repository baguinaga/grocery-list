// manipulating DOM elements by class
// accepts an object and sets the txt attribute of the table cells, 
// additionally stores _id as a property of the quantity <tb> 

const readDetails = item => {
  $("#categoryTable").text(item.category);
  $("#nameTable").text(item.item);
  $("#typeTable").text(item.type);
  $("#brandTable").text(item.brand);
  $("#qtyTable").text(item.qty);
  $("#qtyTable").attr("data-id", item._id);
};

$(".itemDetails").on("click", function(event) {
  // preventing default behavior of button on click events
  event.preventDefault();

  // storing id, from the data-id attr which is created on render
  const id = $(this).data("id");

  // ajax get request for given id, object response passed along to updateDetails function
  $.get(`./api/groceries/${id}`, response => {
    return readDetails(response);
  });
});

//upon the edit button being clicked it populates the form with the current item details
//and gains the items _data as an attr, the data-atrr of #qtyTable is removed
//and the values of the form are populated. 

$("#editButton").on("click", function(event) {
  event.preventDefault();
  const displayedId = $("#qtyTable").data("id");
  $("#qtyTable").removeAttr("data-id");

  $("#editButton").data("id", displayedId)
  $("#categoryInput").val(`${$("#categoryTable").text()}`);
  $("#nameInput").val(`${$("#nameTable").text()}`);
  $("#typeInput").val(`${$("#typeTable").text()}`);
  $("#brandInput").val(`${$("#brandTable").text()}`);
  $("#qtyInput").val(`${$("#qtyTable").text()}`);
});

// if the edit button has been clicked it will have an _id bound to it, otherwise the submit button performs a post, rather than a put request. The page is reloaded, upon which the edit button loses the data-id attr.

$("#editUpdateForm").on("submit", function(event) {
  event.preventDefault();

  //storing form inputs as an object by iterating through serializeArray
  const inputValues = {};
  $.each($("#editUpdateForm").serializeArray(), function() {
    inputValues[this.name] = this.value;
  });

  // storing data-id attr if it exists
  const editId = $("#editButton").data("id")
    ? $("#editButton").data("id")
    : undefined;
  console.log(editId);

  // using old ajax method for put request
  if (editId) {
    $.ajax(`/api/groceries/${editId}`, {
      type: "PUT",
      data: inputValues
    }).then(function() {
      return location.reload();
    });
  } else {
    console.log("something");
    // ajax call to update item details
    $.post("/api/groceries/", inputValues, response => {
      return location.reload();
    }).fail(err => {
      throw err;
    });
  }
});
