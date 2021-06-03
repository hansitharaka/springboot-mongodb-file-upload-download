'use strict'

let uploadForm = document.querySelector("#fileUploadForm");
let uploadFormInput = document.querySelector("#fileUploadInput");
let downloadFile = document.querySelector("#downloadFileUrl");

function uploadFile(file) {
    let formData = new FormData();
    formData.append("file", file);

    let req = new XMLHttpRequest();
    req.open("POST", "http://localhost:8080/file/upload")

    req.onload = function () {
        console.log(req.responseText);

        let response = req.responseText;

        if (response !== null) {
            let downloadUrl = "http://localhost:8080/file/download/" + response;

            downloadFile.innerHTML = '<p>File Upoaded Successfully. <br/> <a href="' + downloadUrl + '" target="_self">Download File</a></p>';
            downloadFile.style.display = "block";
        } else {
            alert("Error Occured! No file returned");
        }
    }

    req.send(formData);
}

uploadForm.addEventListener('submit', function (event) {
    const files = uploadFormInput.files;

    if (files.length !== 0 ) {
        uploadFile(files[0]);
        event.preventDefault();
    } else {
        alert('Please select a file')
    }

}, true);