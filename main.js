function load_csv(file_input) {
    let file_reader = new FileReader()
    file_reader.onload = event => {
        console.log(event.target.result)
    }
    file_reader.readAsText(file_input.files[0])
}