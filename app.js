
    function IDE() {
        const code = document.getElementById('editor').value;
        const output = document.getElementById('output');


        output.contentDocument.open();
        output.contentDocument.write(code);
        output.contentDocument.close();
    }