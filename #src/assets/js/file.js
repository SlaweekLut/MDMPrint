let files = document.querySelectorAll('.files')
let inputsFile = document.querySelectorAll('.file-input')

inputsFile.forEach(function(item, index) {
  item.addEventListener('change', event => onFileSelected(event, index))
})


function onFileSelected(event, index) {
  let selectedFile = event.target.files;

  for (let i = 0; i < selectedFile.length; i++) {
    const element = selectedFile[i];
    let uploadFile = document.createElement('div')
    let imgFile = document.createElement('img')
    let textFile = document.createElement('p')
    let loadFile = document.createElement('div')
    loadFile.classList.add('file-load')
    uploadFile.classList.add('file')
    imgFile.classList.add('file__img')
    textFile.classList.add('file__text', 'font-lg', 'font-weight-medium')
    uploadFile.appendChild(imgFile)
    uploadFile.appendChild(textFile)
    uploadFile.appendChild(loadFile)
    imgFile.style.opacity = 0
    let xhr = new XMLHttpRequest();

    xhr.upload.onprogress = function (event) {
      val = Math.ceil(event.loaded / (event.total / 160))
      prcn = Math.ceil(event.loaded / (event.total / 100))
      loadFile.innerHTML = 
          `
          <p class='file-load__precent font-lg font-weight-medium'>${prcn}%</p>
          <svg width="50" height="50" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" ></circle>
            <circle cx="25" cy="25" r="20" style="stroke-dasharray: ${val},160"></circle>
          </svg > 
          `
    };

    textFile.innerText = element.name
    let reader = new FileReader();
    reader.onload = function (element) {
      if (element.target.result.indexOf('image') != -1) {
        imgFile.src = element.target.result;
      }
      else imgFile.src = '/assets/img/upload-document.svg'
    };
    xhr.onloadend = function (element) {
      imgFile.style.opacity = 1
      uploadFile.removeChild(loadFile)
    }
    xhr.open("POST", "");
    xhr.send(element);

    reader.readAsDataURL(element);
    files[index].appendChild(uploadFile)
  }
}