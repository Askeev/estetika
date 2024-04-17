

// const openModalBtn = document.getElementById('openModalBtn');
// const modal = document.getElementById('my_popup');
// const closeBtn = document.getElementById('close-btn');

// // Обработчик нажатия на кнопку "обсудить проект"
// openModalBtn.addEventListener('click', function() {
//     modal.style.display = 'block'; // Показываем модальное окно
// });

// // Обработчик нажатия на кнопку закрытия модального окна
// closeBtn.addEventListener('click', function() {
//     modal.style.display = 'none'; // Скрываем модальное окно
// });

document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    const modal = document.getElementById('my_popup');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('close-btn');
    const openTeamBtn = document.getElementById('openTeamBtn');
    const openJointBtn = document.getElementById('openJointBtn');
    const timerElement = document.getElementById('timer');
    let timerValue = 10;
    

    function updateTimer () {
        timerElement.textContent = timerValue;
        if (timerValue === 0) {
            window.location='./index.html'
        } else {
            timerValue--;
        }
    }

    const timerInterval = setInterval(updateTimer, 1000)

    openModalBtn.addEventListener('click', function () {
        modal.classList.remove('hidden');
    });

    closeModalBtn.addEventListener('click', function () {
        modal.classList.add('hidden');
    });
    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            modal.classList.add('hidden');
        }
    })
    openTeamBtn.addEventListener('click', function () {
        modal.classList.remove('hidden');
        timerValue = 10;
    });
    openJointBtn.addEventListener('click', function () {
        modal.classList.remove('hidden');
        timerValue = 10;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const modal1 = document.getElementById('my_popup1');
    const openModal1Btn1 = document.getElementById('openModal1Btn1');
    const closeBtn = document.getElementById('close-btn');
    // Function to open the modal
    openModal1Btn1.addEventListener('click', function () {
        modal1.classList.remove('hidden');
    });
    closeBtn.addEventListener('click', function () {
        modal1.classList.add('hidden');
    });
    modal1.addEventListener('click', (e) => {
        if(e.target === modal1) {
            modal1.classList.add('hidden');
        }
    });
    document.addEventListener('click', function(e) {
        if (!modal1.contains(e.target) && e.target !== openModal1Btn1 && e.target !== openJointBtn1) {
            modal1.classList.add('hidden');
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const modalContainer = document.getElementById('modalContainer');
    const modalContents = modalContainer.querySelectorAll('.modal-content');
    const openModalBtns = document.querySelectorAll('.openModalBtn2');

    openModalBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const btnNumber = this.getAttribute('data-number');
            // Hide all modal contents
            modalContents.forEach(function(content) {
                content.style.display = 'none';
            });
            // Show the modal content corresponding to the clicked button
            const modalContent = document.getElementById('modalContent' + btnNumber);
            if (modalContent) {
                modalContent.style.display = 'block';
                modalContainer.style.display = 'block'; // Show the modal container
            }
        });
    });

    // Close the modal when clicking outside of the content
    window.addEventListener('click', function(event) {
        if (event.target === modalContainer) {
            modalContainer.style.display = 'none';
        }
    });
});

