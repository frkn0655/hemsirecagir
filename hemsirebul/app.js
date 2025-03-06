function openModal(modalType) {
    if (modalType === 'login') {
        document.getElementById('login-modal').style.display = 'flex';
    } else if (modalType === 'signup') {
        document.getElementById('login-modal').style.display = 'flex';
        document.querySelector('[data-tab="signup"]').click();
    } else if (modalType === 'nurse-signup') {
        document.getElementById('nurse-signup-modal').style.display = 'flex';
    }
}

function closeModal() {
    document.getElementById('login-modal').style.display = 'none';
    document.getElementById('nurse-signup-modal').style.display = 'none';
}
