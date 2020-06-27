class EasyHTTP {

    // Make an HTTP GET Request
    async get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    // Make HTTP POST request
    // post(url) {
    //     return new Promise((resolve, reject) => {
    //         fetch(url, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-type': 'application/json'
    //             },
    //             body: JSON.stringify(data)

    //         })
    //             .then(res => res.json())
    //             .then(data => resolve(data))
    //             .catch(err => reject(err));
    //     });
    // }


    // Make aa HTTP PUT Request
    // put(url, data) {
    //     return new Promise((resolve, reject) => {
    //         fetch(url, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         })
    //             .then(res => res.json())
    //             .then(data => resolve(data))
    //             .catch(err => reject(err));

    //     });
    // }

    // Make an HTTP Delete
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(() => resolve('Resource deleted'))
            .catch(err => reject(err));

        });
    }

}

