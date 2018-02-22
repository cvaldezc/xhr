
function getData() {
    // fetch('http://localhost:8080/rslearn/restfull/employee/listallow',
    //     {
    //         method: 'get',
    //         mode: 'cors',
    //         headers: {
    //             'Access-Control-Allow-Origin': '*',
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then( function (response) { return response.json()})
    //     .then( function(data){ console.log(data) });
    const xhr =  new XMLHttpRequest();
    xhr.timeout = 2000;
    xhr.responseType = 'json';
    xhr.open("get", "http://localhost:8080/rslearn/restfull/employee/listallow", true)
    xhr.send();
    return new Promise( function (resolve, reject) {
        xhr.onreadystatechange = function (e){
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status == 200) {
                    console.log("state ready" + xhr.readyState)
                    // console.log(xhr.responseType)
                    resolve(xhr.response)
                }else{
                    reject(new Error("Error in request"))
                }
            }else{
                console.warn("todavia no esta en DONE")
                //reject(new Error("Error fail in the request"))
            }
        }
    })
}

getData()
.then(function (data) {
    console.info(data)
})
.catch(function (err) {
    console.error(err)
});