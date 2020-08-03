const LOCAL_STORAGE_KEY = '__storage';

export const intitialUserData = {
    firstName: '',
    lastName: '',
    personalNumber: '',
    adress: '',
    city: '',
    postNumber: '',
    phoneNumber: '',
    email: '',
    img: 'https://motsandco.com/wp-content/uploads/avatar-2-300x300.png',
};

export const saveDataToLocalStorage = (data) => {
    localStorage[LOCAL_STORAGE_KEY] = JSON.stringify(data);
};

export const initialValues = (() => {
    try {
        return JSON.parse(localStorage[LOCAL_STORAGE_KEY])
    } catch (e) {
        return intitialUserData;
    }
})();

