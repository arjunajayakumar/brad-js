document.getElementById('button').addEventListener('click', loadData)

function loadData() {
  
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // Open
    xhr.open('GET', '59_XHRbjectMethods.txt', true);

    // Optional - Used for spinners/loaders
    xhr.onprogress = function() {
        console.log("Ready State", xhr.readyState);
    }

    xhr.onload = function () {
        console.log('ReadyState', xhr.readyState);
        if (this.status === 200) {
            document.querySelector('.output').innerHTML = `<h1>${this.responseText}</h1>`
        }
    }

    // console.log('ReadyState', xhr.readyState);

    // xhr.onreadystatechange = function() {
    //     console.log('ReadyState', xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }

      xhr.onerror = function () {
          console.log('Request');
      } 
      
      xhr.send();

    // readyState Values
    // 0: request not initialised
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

    // HTTP Statuses
    // 200: 'OK'
    // 403: 'Forbidden'
    // 404: 'Not Found'

}

