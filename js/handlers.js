const $ = (elementId) => {
    return document.getElementById(elementId);
};

const showDialog = (templateName) => {
    const modal = $('modal');
    modal.innerHTML = $(templateName).text;
    modal.style.display = 'grid';
};

const closeModal = () => {
    $('modal').style.display = 'none';
};


const showMainMenu = () => {
    $('mainMenu').focus();
};

const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}

const getEventCode = (event) => {
    const eventCode = [];
    if (event.altKey) {
        eventCode.push('Alt');
    }
    if (event.ctrlKey) {
        eventCode.push('Ctrl');
    }
    if (event.shiftKey) {
        eventCode.push('Shift');
    }
    if (!eventCode.includes(event.key)) {
        eventCode.push(event.key);
    }
    return eventCode.join('-');
}

const eventHandler = (eventCode) => {
    console.log(eventCode);
    switch (eventCode) {
        case 'F1':
        case 'funcButtonHelp':
            showDialog('helpTemplate');
            break;
        case 'F2':
        case 'funcButtonUserMn':
            showDialog('userMenuTemplate');
            break;
        case 'F3':
        case 'funcButtonView':
            showDialog('notImplementedTemplate');
            break;
        case 'F4':
        case 'funcButtonEdit':
            showDialog('notImplementedTemplate');
            break;
        case 'F5':
            return false;
        case 'funcButtonCopy':
            showDialog('notImplementedTemplate');
            break;
        case 'F6':
        case 'funcButtonRenMov':
            showDialog('notImplementedTemplate');
            break;
        case 'F7':
        case 'funcButtonMkFold':
            showDialog('notImplementedTemplate');
            break;
        case 'F8':
        case 'Del':
        case 'funcButtonDelete':
            showDialog('deleteTemplate');
            break;
        case 'F9':
        case 'funcButtonConfMn':
            showMainMenu();
            break;
        case 'F10':
        case 'funcButtonQuit':
            showDialog('quitTemplate');
            break;
        case 'F11':
        case 'funcButtonPlugin':
            showDialog('notImplementedTemplate');
            break;
        case 'F12':
            return false;
        case 'funcButtonScreen':
            showDialog('notImplementedTemplate');
            break;
        case 'Alt-Enter':
            toggleFullScreen();
            break
        case 'Escape':
        case 'modal':
            closeModal();
            break;
    }
    return true;
}

window.addEventListener('keydown', (event) => {
    const eventCode = getEventCode(event);
    if (eventHandler(eventCode)) {
        event.preventDefault();
    }
});

window.addEventListener('mousedown', (event) => {
    const targetElementId = event.target.id;
    eventHandler(targetElementId);
});