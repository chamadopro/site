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
    partnerForm.addEventListener('submit', function(event) {
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

        // Constrói a URL de submissão
        const submissionUrl = `${googleFormUrlPartner}?${partnerNameEntryId}=${encodeURIComponent(name)}&${partnerEmailEntryId}=${encodeURIComponent(email)}&${partnerPhoneEntryId}=${encodeURIComponent(phone)}&${partnerSpecialtyEntryId}=${encodeURIComponent(specialty)}`;

        // Define a ação do formulário para a URL do Google Form
        partnerForm.action = submissionUrl;
        // O target já está definido no HTML como "hidden_iframe"

        // Submete o formulário
        partnerForm.submit();

        // Exibe o alerta e limpa o formulário após um pequeno atraso
        setTimeout(() => {
            showAlert('Obrigado por seu interesse em ser um Parceiro ChamadoPro! Entraremos em contato em breve.', 'Cadastro de Parceiro');
            partnerForm.reset();
        }, 500); // Pequeno atraso para garantir que a submissão comece
    });

    // Lidar com o envio do formulário de Cliente
    const clientForm = document.getElementById('client-form');
    clientForm.addEventListener('submit', function(event) {
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

        // Constrói a URL de submissão
        const submissionUrl = `${googleFormUrlClient}?${clientNameEntryId}=${encodeURIComponent(name)}&${clientEmailEntryId}=${encodeURIComponent(email)}&${clientPhoneEntryId}=${encodeURIComponent(phone)}`;

        // Define a ação do formulário para a URL do Google Form
        clientForm.action = submissionUrl;
        // O target já está definido no HTML como "hidden_iframe"

        // Submete o formulário
        clientForm.submit();

        // Exibe o alerta e limpa o formulário após um pequeno atraso
        setTimeout(() => {
            showAlert('Agradecemos seu interesse! Avisaremos você assim que o ChamadoPro estiver pronto para uso.', 'Cadastro de Cliente');
            clientForm.reset();
        }, 500); // Pequeno atraso para garantir que a submissão comece
    });
});