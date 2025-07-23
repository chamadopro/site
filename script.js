// Função para mostrar o modal de alerta personalizado
function showAlert(message, title = 'Aviso') {
    document.getElementById('custom-alert-title').textContent = title;
    document.getElementById('custom-alert-message').textContent = message;
    document.getElementById('custom-alert-modal').style.display = 'flex';
}

// Função para fechar o modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    // Lidar com o envio do formulário de Parceiro
    const partnerForm = document.getElementById('partner-form');
    partnerForm.addEventListener('submit', async function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const name = document.getElementById('partner-name').value;
        const email = document.getElementById('partner-email').value;
        const phone = document.getElementById('partner-phone').value;
        const specialty = document.getElementById('partner-specialty').value;

        // URL de submissão do Google Form para Parceiros (CONFIRMADO)
        const googleFormUrlPartner = "https://docs.google.com/forms/d/e/1FAIpQLSdKuS8NwBwBuTGUJQBqLYOUr6-iK55mQigG_2Pj7GTj955GyA/formResponse";
        
        // IDs CORRETOS E CONFIRMADOS PARA O FORMULÁRIO "PROFISSIONAL PARCEIRO"
        const partnerNameEntryId = "entry.1740924083"; 
        const partnerEmailEntryId = "entry.1118182909";     
        const partnerPhoneEntryId = "entry.1593026330";   
        const partnerSpecialtyEntryId = "entry.1017042502"; 

        // Cria um objeto FormData para os dados
        const formData = new FormData();
        formData.append(partnerNameEntryId, name);
        formData.append(partnerEmailEntryId, email);
        formData.append(partnerPhoneEntryId, phone);
        formData.append(partnerSpecialtyEntryId, specialty);

        try {
            const response = await fetch(googleFormUrlPartner, {
                method: 'POST', // É importante que seja POST
                mode: 'no-cors', // Essencial para submissões para Google Forms via Fetch
                body: formData // Envia os dados como FormData
            });

            // Como usamos 'no-cors', não podemos ler a resposta diretamente.
            // Apenas verificamos se a requisição foi feita sem erros de rede.
            // A success/failure da gravação na planilha ainda dependerá dos IDs corretos.
            
            showAlert('Obrigado por seu interesse em ser um Parceiro ChamadoPro! Entraremos em contato em breve.', 'Cadastro de Parceiro');
            partnerForm.reset();

        } catch (error) {
            console.error('Erro ao enviar formulário de Parceiro:', error);
            showAlert('Ocorreu um erro ao enviar seu cadastro. Por favor, tente novamente.', 'Erro no Envio');
        }
    });

    // Lidar com o envio do formulário de Cliente
    const clientForm = document.getElementById('client-form');
    clientForm.addEventListener('submit', async function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const name = document.getElementById('client-name').value;
        const email = document.getElementById('client-email').value;
        const phone = document.getElementById('client-phone').value;

        // URL de submissão do Google Form para Clientes (CONFIRMADO)
        const googleFormUrlClient = "https://docs.google.com/forms/d/e/1FAIpQLSeunpGKPPL_xarc7qfwVv8eaZVP0IdXffuRgW3hzyo2Yc8Afg/formResponse";
        
        // IDs CORRETOS E CONFIRMADOS PARA O FORMULÁRIO "CLIENTE"
        const clientNameEntryId = "entry.972365287"; 
        const clientEmailEntryId = "entry.354736504";     
        const clientPhoneEntryId = "entry.245879301";   

        // Cria um objeto FormData para os dados
        const formData = new FormData();
        formData.append(clientNameEntryId, name);
        formData.append(clientEmailEntryId, email);
        formData.append(clientPhoneEntryId, phone);

        try {
            const response = await fetch(googleFormUrlClient, {
                method: 'POST',
                mode: 'no-cors',
                body: formData
            });

            showAlert('Agradecemos seu interesse! Avisaremos você assim que o ChamadoPro estiver pronto para uso.', 'Cadastro de Cliente');
            clientForm.reset();

        } catch (error) {
            console.error('Erro ao enviar formulário de Cliente:', error);
            showAlert('Ocorreu um erro ao enviar seu cadastro. Por favor, tente novamente.', 'Erro no Envio');
        }
    });
});
