import { createSlice } from '@reduxjs/toolkit';
import { clearLocalStorage, setAndPersistLocalStorage } from '../../helpers/localStorage.helper';

export const EmptyUserState = {
    id: 0,
    name: '',
    email: '',
    rol:''
};

export const userKey = 'user';

export const userSlice = createSlice({
    name: 'user',
    initialState: localStorage.getItem(userKey) ? JSON.parse(localStorage.getItem(userKey)) : EmptyUserState,
    reducers: {
        createUser: (state, action) => {
            setAndPersistLocalStorage(userKey, action.payload);
            return action.payload;
        },
        updateUser: (state, action) => {
            const userToSave = { ...state, ...action.payload };
            setAndPersistLocalStorage(userKey, userToSave);
            return userToSave;
        },
        resetUser: () => {
            clearLocalStorage(userKey);
            return EmptyUserState;
        },
    },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
