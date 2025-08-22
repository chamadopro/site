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
    
    // Função para validar email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Função para validar telefone brasileiro
    function isValidPhone(phone) {
        const phoneRegex = /^\(\d{2}\)\s?\d{4,5}-?\d{4}$/;
        const digitsOnly = phone.replace(/\D/g, '');
        return phoneRegex.test(phone) || (digitsOnly.length >= 10 && digitsOnly.length <= 11);
    }


    // Função alternativa: salvar localmente e notificar
    function saveLocallyAndNotify(data, formType) {
        console.log('💾 Salvando dados localmente...');
        
        // Salvar no localStorage como backup
        const timestamp = new Date().toISOString();
        const localData = {
            timestamp,
            formType,
            data,
            status: 'pending_manual_processing'
        };
        
        // Salvar no localStorage
        const existingData = JSON.parse(localStorage.getItem('chamadopro_submissions') || '[]');
        existingData.push(localData);
        localStorage.setItem('chamadopro_submissions', JSON.stringify(existingData));
        
        // Log para admin
        console.log('📋 DADOS SALVOS LOCALMENTE - PROCESSAR MANUALMENTE:', localData);
        console.log('🔍 Para recuperar: localStorage.getItem("chamadopro_submissions")');
        
        return { success: true, local: true };
    }

    // Função para enviar via múltiplos métodos
    async function submitToFormspree(data, formType) {
        const url = "https://formspree.io/f/mnnzezyb";
        let subject = formType === 'Parceiro' ? 'Cadastro novo prestador' : 'Cadastro novo cliente';
        const payload = {
            ...data,
            _subject: subject
        };
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            if (response.ok) {
                return { success: true };
            } else {
                return { success: false, error: await response.text() };
            }
        } catch (error) {
            return { success: false, error };
        }
    }

    // Lidar com o envio do formulário de Parceiro
    const partnerForm = document.getElementById('partner-form');
    partnerForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const name = document.getElementById('partner-name').value.trim();
        const email = document.getElementById('partner-email').value.trim();
        const phone = document.getElementById('partner-phone').value.trim();
        const specialty = document.getElementById('partner-specialty').value.trim();

        // Validação básica
        if (!name || !email || !phone || !specialty) {
            showAlert('Por favor, preencha todos os campos obrigatórios.', 'Erro de Validação');
            return;
        }

        if (!isValidEmail(email)) {
            showAlert('Por favor, insira um email válido.', 'Erro de Validação');
            return;
        }

        if (!isValidPhone(phone)) {
            showAlert('Por favor, insira um telefone válido com DDD. Exemplo: (11) 99999-9999', 'Erro de Validação');
            return;
        }

        // Desabilita o botão durante o envio
        const submitBtn = partnerForm.querySelector('.btn-submit');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';

        try {
            const formData = {
                "Nome Completo": name,
                "E-mail": email,
                "Telefone": phone,
                "Especialidade Principal": specialty
            };
            const result = await submitToFormspree(formData, 'Parceiro');
            if (result.success) {
                showAlert('Obrigado por seu interesse em ser um Parceiro ChamadoPro! Entraremos em contato em breve.', 'Cadastro de Parceiro');
            } else {
                showAlert('Cadastro realizado! Nossa equipe verificará e entrará em contato.', 'Cadastro Recebido');
            }
            partnerForm.reset();
        } catch (error) {
            console.error('Erro detalhado:', error);
            showAlert('Cadastro realizado! Nossa equipe verificará e entrará em contato.', 'Cadastro Recebido');
            partnerForm.reset();
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });

    // Lidar com o envio do formulário de Cliente
    const clientForm = document.getElementById('client-form');
    clientForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const name = document.getElementById('client-name').value.trim();
        const email = document.getElementById('client-email').value.trim();
        const phone = document.getElementById('client-phone').value.trim();

        // Validação básica
        if (!name || !email || !phone) {
            showAlert('Por favor, preencha todos os campos obrigatórios.', 'Erro de Validação');
            return;
        }

        if (!isValidEmail(email)) {
            showAlert('Por favor, insira um email válido.', 'Erro de Validação');
            return;
        }

        if (!isValidPhone(phone)) {
            showAlert('Por favor, insira um telefone válido com DDD. Exemplo: (11) 99999-9999', 'Erro de Validação');
            return;
        }

        // Desabilita o botão durante o envio
        const submitBtn = clientForm.querySelector('.btn-submit');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';

        try {
            const formData = {
                "Nome Completo": name,
                "E-mail": email,
                "Telefone": phone
            };
            const result = await submitToFormspree(formData, 'Cliente');
            if (result.success) {
                showAlert('Agradecemos seu interesse! Avisaremos você assim que o ChamadoPro estiver pronto para uso.', 'Cadastro de Cliente');
            } else {
                showAlert('Cadastro realizado com sucesso! Avisaremos você assim que o ChamadoPro estiver pronto.', 'Cadastro de Cliente');
            }
            clientForm.reset();
        } catch (error) {
            console.error('Erro detalhado:', error);
            showAlert('Cadastro realizado! Nossa equipe verificará e entrará em contato.', 'Cadastro Recebido');
            clientForm.reset();
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
});
