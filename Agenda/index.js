


// Remover contato

const removeContact = (id, personDetails) => {

  $.ajax({
    type: "DELETE", 
    url: `http://localhost:3000/contacts/${id}`,
    contentType: "application/json; charset=utf-8",
    data: personDetails,
    error: function() {
        $("h2").html("O servidor não conseguiu processar o pedido");
    },
    success: () => {
      $("#list-tab").empty();
      getContactList();
    } 
});

}

//Capturar via ID no click

const getContact = (id) => {
  $.get(`http://localhost:3000/contacts/${id}`, person => {
    
   const{ id, name, phone, email} = person;

  $("#contact-details").html (` 
    <h4 class="mb-3">${name}</h4>    
                          <div class="mb-1">Celular: ${phone}</div>
                          <div class="mb-4">Email: ${email}</div>
                      </section>
                          <span id="user-actions">
                                  <i  id= "edit" data-toggle="modal" data-backdrop="static" data-target="#contact-window" class="fas fa-user-edit h4"></i>
                                  <i  id="remove" onclick= removeContact('${id}') class="fas fa-trash-alt h4 ml-4"></i>
                          </span>
    `)
 })
  const personDetails = person;
  removeContact(id, personDetails); 
  }



  // Capturar lista existente db
  const getContactList = () =>{

    $.get("http://localhost:3000/contacts", persons => {
    persons.forEach((person) => {
      const{ name, id} = person;


    $("#list-tab").append(` 
      <a class="list-group-item list-group-item-action" data-toggle="list" href="#" role="tab" onclick="getContact('${id}')"> ${name}</a>`)
    });

    const{ name, phone, email} = persons[0];

    $("#contact-details").html (` 
      <h4 class="mb-3">${name}</h4>    
                            <div class="mb-1">Celular: ${phone}</div>
                            <div class="mb-4">Email: ${email}</div>
                        </section>
                            <span id="user-actions">
                                    <i  id= "edit" data-toggle="modal" data-backdrop="static" data-target="#contact-window" class="fas fa-user-edit h4"></i>
                                    <i  id="remove" class="fas fa-trash-alt h4 ml-4"></i>
                            </span>
      `)

    
    $("a.list-group-item:first-child").addClass("active");

   })
  };

  getContactList();

    
//Adicionar novo contato

$('#contact-window').on('shown.bs.modal', () => {
  $('#contact-name').trigger('focus');
  

});

$("button#modify").click( () => {

  const personData = {
    name: $("#contact-name").val(),
    phone: $("#contact-number").val(),
    email: $("#contact-email").val(),
  };
  
  data = JSON.stringify(personData);
  nextID = document.getElementsByClassName('list-group-item').length;
  saveContact(data, nextID);
  $("#contact-data").trigger('reset');
  $("#contact-window").modal('hide')
  } );


const saveContact = (personDetails) =>{
  $.ajax({
    type: "POST", 
    url: "http://localhost:3000/contacts/",
    contentType: "application/json; charset=utf-8",
    data: personDetails,
    error: function() {
        $("h2").html("O servidor não conseguiu processar o pedido");
    },
    success: () => {
      $("#list-tab").empty();
      getContactList();
    } 
});  



/* TODO

VALIDAR FORM
EDITAR

*/

}
