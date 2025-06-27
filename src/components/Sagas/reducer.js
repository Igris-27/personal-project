const initialState =  {
    all: [],
    loading: false,
    error: null,
}
export const userReducer = (state = initialState, action) => {
    switch (action.type){
        case "FETCH_USER_REQUEST":
            return { ...state, loading: true, error: null };
        case "FETCH_USER_SUCCESS":
            return { ...state, loading: false, all: action.payload, error: null };
        case "FETCH_USER_FAILURE":
            return { ...state, loading: false, error: action.payload ?? "Something went wrong" };   
        
        default:
            return state    
    }
    
    }
