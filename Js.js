const nightDaySwitch = document.getElementById("nightDaySwitch");
const toggleButton = document.querySelectorAll(".toggleButton");
const blockCard = document.querySelectorAll(".block__card");
const allElement = document.getElementById("all");
const activeElement = document.getElementById("active");
const inactiveElement = document.getElementById("inactive");
const cardRemove = document.querySelectorAll(".card__button__remove button");

// Dark-Light localStorage
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add("light-mode");
}

nightDaySwitch.addEventListener('click', function () {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem('theme', 'light')
    } else (
        localStorage.removeItem('theme')
    )
});


// toggleButton 

toggleButton.forEach(toggleButtonElement => {
    toggleButtonElement.addEventListener('change', function () {
        const card = toggleButtonElement.closest(".block__card")
        if (toggleButtonElement.checked) {
            card.classList.add("active");
        } else {
            card.classList.remove("active");
        }
    });
});

// All-button

allElement.addEventListener('click', function () {
    blockCard.forEach(blockCardElement => {
        blockCardElement.style.display = 'block';
    })
});

// Active-button

activeElement.addEventListener('click', function () {
    blockCard.forEach(blockCardElement => {
        if (!blockCardElement.classList.contains("active")) {
            blockCardElement.style.display = 'none';
        } else {
            blockCardElement.style.display = 'block';
        }
    });
    allElement.style.display = 'inline-block';
    activeElement.style.display = 'inline-block';
});

// Inactive-button

inactiveElement.addEventListener('click', function () {
    blockCard.forEach(blockCardElement => {
        if (blockCardElement.classList.contains("active")) {
            blockCardElement.style.display = 'none';
        } else {
            blockCardElement.style.display = 'block'
        }
    });
    activeElement.style.display = 'inline-block';
});

cardRemove.forEach(cardRemoveElement => {
    cardRemoveElement.addEventListener('click', function () {
        const deletCard = cardRemoveElement.closest(".block__card");
        deletCard.remove();
    });
});
