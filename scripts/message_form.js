//функция замены формы обратной связи с успешной отправкой
function sentMessageSuccessfully(form) {

    if (!validate(form)) {
        document.getElementById("feedback_form").style.display = "none";

        let createDivSuccessForm = document.createElement('div');
        createDivSuccessForm.className = 'feedback_form_success';
        let createImgSuccessForm = document.createElement('img');
        createImgSuccessForm.className = 'feedback_success_image';
        let createH1SuccessForm = document.createElement('h1');
        let createH2SuccessForm = document.createElement('h2');

        createH1SuccessForm.innerHTML = "Your message has been sent successfully!";
        createH2SuccessForm.innerHTML = "Expect a response from the support service to the email you specified.";
        createImgSuccessForm.src = "../accets/images/successful_message.png";

        createDivSuccessForm.appendChild(createImgSuccessForm);
        createDivSuccessForm.appendChild(createH1SuccessForm);
        createDivSuccessForm.appendChild(createH2SuccessForm);

        document.getElementById('message_sent').appendChild(createDivSuccessForm);
        document.getElementById("message_sent").style.display = "";
    }
}

function validate(form) {
    let error = false;

    resetError('name_error');
    if (form.name.value.length === 0) {
        error = true;
        showError('name_error', 'Name can\'t be empty');
    } else if (form.name.value.match("/^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/") === null) {
        error = true;
        showError('name_error', 'Name must be greater than 1 digit and not have characters \ /: *? "<> |');
    }

    resetError('email_error');
    if (form.email.value.length === 0) {
        error = true;
        showError('email_error', 'Email can\'t be empty');
    } else if (form.email.value.match("^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$") === null) {
        console.log(form.email.value);
        error = true;
        showError('email_error', 'You entered a wrong email');
    }

    resetError('msg_error');
    if (form.msg.value.length === 0) {
        error = true;
        showError('msg_error', 'Message can\'t be empty');
    }
    return error;
}

function showError(id, errorMessage) {
    let element = document.getElementById(id);
    element.className = 'error_message';
    element.innerHTML = errorMessage;
}

//функция, которая сбрасывает ошибку перед след проверкой
function resetError(id) {
    let element = document.getElementById(id);
    element.className = 'error_empty';
    element.innerHTML = "";
}