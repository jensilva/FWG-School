
  
  $('#contact-window').on('shown.bs.modal', () => {
    $('#myInput').trigger('focus')
  })

  // Capturar lista existente db

  $.get("http://localhost:3000/contacts", persons => {
    persons.forEach((person) => {
      const{ name, id} = person;


    $("#list-tab").append(` 
      <a class="list-group-item list-group-item-action" data-toggle="list" href="#list-home" role="tab" onclick="getContact('${id}')"> ${name}</a>`)
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

   //Capturar via ID no click

   const getContact = (id) => {
    $.get(`http://localhost:3000/contacts/${id}`, person => {

      const{ name, phone, email} = person;

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
   })
    }





