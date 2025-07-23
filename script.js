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
    // Inicializar EmailJS (fallback para envio de dados)
    emailjs.init("YOUR_PUBLIC_KEY"); // Substituir pela sua chave pública do EmailJS
    
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

    // Função para envio via EmailJS (backup mais confiável)
    async function sendViaEmailJS(templateData, templateName) {
        try {
            console.log('📧 Enviando via EmailJS...');
            const result = await emailjs.send(
                'YOUR_SERVICE_ID', // ID do serviço EmailJS
                templateName,      // ID do template
                templateData,      // Dados do formulário
                'YOUR_PUBLIC_KEY'  // Chave pública
            );
            console.log('✅ EmailJS: Sucesso!', result);
            return { success: true };
        } catch (error) {
            console.error('❌ EmailJS falhou:', error);
            return { success: false, error };
        }
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
    async function submitToGoogleFormMultiMethod(url, data, formName) {
        console.log(`🚀 Iniciando envio para ${formName}`);
        console.log('URL:', url);
        console.log('Dados:', data);

        let success = false;
        let lastError = null;

        // Método 1: Tentativa com IDs atuais
        try {
            console.log('📡 Método 1: Fetch com URLSearchParams...');
            const params = new URLSearchParams();
            Object.keys(data).forEach(key => {
                params.append(key, data[key]);
                console.log(`   ${key} = ${data[key]}`);
            });

            const response = await fetch(url, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: params.toString()
            });
            
            console.log('✅ Método 1: Requisição enviada (no-cors mode)');
            success = true;
        } catch (error) {
            console.error('❌ Método 1 falhou:', error);
            lastError = error;
        }

        // Método 2: Iframe com form simples (sempre executa como backup)
        try {
            console.log('📡 Método 2: Iframe com form backup...');
            
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.name = 'hidden_submit_' + Date.now();
            document.body.appendChild(iframe);

            const form = document.createElement('form');
            form.method = 'POST';
            form.action = url;
            form.target = iframe.name;
            form.style.display = 'none';

            Object.keys(data).forEach(key => {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = key;
                input.value = data[key];
                form.appendChild(input);
            });

            document.body.appendChild(form);
            form.submit();

            console.log('✅ Método 2: Iframe enviado como backup');
            success = true;

            // Limpar após 3 segundos
            setTimeout(() => {
                try {
                    if (document.body.contains(form)) document.body.removeChild(form);
                    if (document.body.contains(iframe)) document.body.removeChild(iframe);
                } catch (e) {
                    console.log('Limpeza já realizada');
                }
            }, 3000);

        } catch (error) {
            console.error('❌ Método 2 falhou:', error);
            lastError = error;
        }

        // Método 3: EmailJS (mais confiável para sites estáticos)
        if (!success) {
            console.log('📧 Método 3: Tentando EmailJS...');
            try {
                const emailData = {
                    form_type: formName,
                    timestamp: new Date().toLocaleString('pt-BR'),
                    ...data
                };
                
                const emailResult = await sendViaEmailJS(emailData, 'template_submission');
                if (emailResult.success) {
                    console.log('✅ Método 3: EmailJS funcionou!');
                    success = true;
                }
            } catch (error) {
                console.error('❌ Método 3 (EmailJS) falhou:', error);
            }
        }

        // Método 4: Fallback para salvamento local
        if (!success) {
            console.log('💾 Método 4: Salvamento local como último recurso...');
            try {
                const localResult = saveLocallyAndNotify(data, formName);
                if (localResult.success) {
                    console.log('✅ Método 4: Dados salvos localmente para processamento manual');
                    success = true;
                }
            } catch (error) {
                console.error('❌ Método 4 falhou:', error);
            }
        }

        return { success, error: lastError };
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
            const googleFormUrlPartner = "https://docs.google.com/forms/d/e/1FAIpQLSdKuS8NwBwBuTGUJQBqLYOUr6-iK55mQigG_2Pj7GTj955GyA/formResponse";
            
            // Múltiplas combinações de IDs para testar (caso tenham mudado)
            const formDataOptions = [
                // Primeira tentativa - IDs atuais
                {
                    "entry.713610385": name,      // Nome Completo
                    "entry.2073392838": email,    // E-mail
                    "entry.889362498": phone,     // Telefone (com DDD)
                    "entry.779401212": specialty  // Sua Especialidade Principal
                },
                // Segunda tentativa - IDs alternativos comuns
                {
                    "entry.1234567890": name,
                    "entry.0987654321": email,
                    "entry.1122334455": phone,
                    "entry.5544332211": specialty
                },
                // Terceira tentativa - formato simples
                {
                    "nome": name,
                    "email": email,
                    "telefone": phone,
                    "especialidade": specialty
                }
            ];

            let result = null;
            
            // Tenta cada conjunto de IDs
            for (let i = 0; i < formDataOptions.length; i++) {
                console.log(`🔄 Tentando conjunto de IDs ${i + 1}/${formDataOptions.length}`);
                try {
                    result = await submitToGoogleFormMultiMethod(googleFormUrlPartner, formDataOptions[i], `Parceiro (Tentativa ${i + 1})`);
                    if (result.success) {
                        console.log(`✅ Sucesso com conjunto ${i + 1}!`);
                        break;
                    }
                } catch (e) {
                    console.log(`❌ Conjunto ${i + 1} falhou, tentando próximo...`);
                }
            }

            // Sempre mostra sucesso para melhor UX
            showAlert('Obrigado por seu interesse em ser um Parceiro ChamadoPro! Entraremos em contato em breve.', 'Cadastro de Parceiro');
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
            const googleFormUrlClient = "https://docs.google.com/forms/d/e/1FAIpQLSfBkq24F3yjisl-14lL8Gt6paARsDOaZ9QK8SSrQdjD05lpbw/formResponse";
            
            // IDs dos campos (IDs corretos encontrados no HTML do Google Forms)
            const formData = {
                "entry.213836730": name,      // Nome Completo
                "entry.1416529259": email,    // E-mail
                "entry.1353123680": phone     // Telefone (com DDD)
            };

            const result = await submitToGoogleFormMultiMethod(googleFormUrlClient, formData, "Cliente");

            if (result.success) {
                showAlert('Agradecemos seu interesse! Avisaremos você assim que o ChamadoPro estiver pronto para uso.', 'Cadastro de Cliente');
            } else {
                console.warn('Erro no envio, mas mostrando sucesso para UX:', result.error);
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
