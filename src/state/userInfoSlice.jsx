import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
    name: 'user_information',
    initialState: {
        patient_id: null,
        first_name: '',
        middle_name: '',
        last_name: '',
        age: null,
        sex: '',
        dob: '',
        primary_address: null,
        secondary_address: null,
        state: '',
        city: '',
        pin_code: null,
        gmail: '',
        phone_no: '',
        token: '',
    },
    reducers: {
        setUserDetail: (state, action) => {
            const { patient_id, first_name, middle_name, last_name, age, sex, dob, primary_address, secondary_address, state: userState, city, pin_code, gmail, phone_no, token } = action.payload;

            // Update the state with the user details
            state.patient_id = patient_id;
            state.first_name = first_name;
            state.middle_name = middle_name;
            state.last_name = last_name;
            state.age = age;
            state.sex = sex;
            state.dob = dob;
            state.primary_address = primary_address;
            state.secondary_address = secondary_address;
            state.state = userState;
            state.city = city;
            state.pin_code = pin_code;
            state.gmail = gmail;
            state.phone_no = phone_no;
            state.token = token;
        },
        clearUserDetail: (state) => {
            // Optional: clear user details if needed
            state.patient_id = null;
            state.first_name = '';
            state.middle_name = '';
            state.last_name = '';
            state.age = null;
            state.sex = '';
            state.dob = '';
            state.primary_address = null;
            state.secondary_address = null;
            state.state = '';
            state.city = '';
            state.pin_code = null;
            state.gmail = '';
            state.phone_no = '';
            state.token = '';
        }
    }
});

// Export actions for use in components
export const { setUserDetail, clearUserDetail } = userInfoSlice.actions;

// Export reducer for store configuration
export default userInfoSlice.reducer;
