//This is the sample inside mockapi docs. Saving it for reference purpose.

const newTask = {
    content: 'Check out mockapi.io',
    completed: false,
  };
  
  fetch('https://PROJECT_TOKEN.mockapi.io/xyz, {
    method: 'POST',
    headers: {'content-type':'application/json'},
    // Send your data in the request body as JSON
    body: JSON.stringify(newTask)
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(task => {
    console.log(task);
  }).catch(error => {
    // handle error
  })
  