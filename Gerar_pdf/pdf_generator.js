// script.js
document.getElementById('gerarPdfButton').addEventListener('click', function () {
    const pdf = new jsPDF();
    
    // Coloque aqui o código para criar o conteúdo do PDF, com base nos dados do formulário
    pdf.text('Exemplo de conteúdo para o PDF', 10, 10);
    
    // Salve o PDF ou abra-o em uma nova guia do navegador
    pdf.save('formulario.pdf');
});
