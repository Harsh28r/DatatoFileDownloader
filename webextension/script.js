const $data = document.getElementById('data')
const $fileName = document.getElementById('fileName')
document.body.addEventListener('click', (e) => {
  if (e.target === $data) {
    $data.setAttribute('contenteditable', 'true')
  } else {
    $data.setAttribute('contenteditable', 'false')
  }
})
function download (exportType) {
  const fileName = $fileName.value
  const data = JSON.parse($data.innerText)
  window.exportFromJSON({ data, fileName, exportType })
}