const showAlert = () => {
    alert("메뉴 이름에 와플이름을 넣고 추가버튼을 누르시면 와플이 추가됩니다.")
}

const inputbox = document.getElementById("add-waffle-input");
inputbox.addEventListener('keypress', (e) => { // enter키 눌렀을 때 event 추가
    if (e.key === 'Enter') {
        addWaffle()
    }
})

const addWaffle = () => {
    const waffle = inputbox.value;
    const waffles = document.getElementById("waffles");
    if (waffle === "") { //빈칸이면 alert 생성
        alert("메뉴 이름을 추가해주세요!")
    } else if(waffle.length > 10) { //10글자 넘으면 alert 생성
        alert("메뉴 이름은 10글자를 넘을 수 없습니다.")
    } else { // innerhtml을 이용하여 새로운 div 생성
        waffles.innerHTML += `<div class="waffle">${waffle}</div>`;
        inputbox.value = '';
    }
}

const focusChange = () => { // inputbox로 focus 설정
    inputbox.focus()
}