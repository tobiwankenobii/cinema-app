const initialState = { list: [] };

export default (state = initialState, action) => {
    if (action.type) return state;
};
