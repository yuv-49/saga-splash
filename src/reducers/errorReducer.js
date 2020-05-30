import { IMAGES } from  '../constants';

const errorReducer = (state = [], action) => {
    switch (action.type) {
        case IMAGES.LOAD_FAIL:
            return action.error;
        case IMAGES.LOAD_SUCCESS:
        case IMAGES.LOAD:
            return null;
        
        default:
            return state;
    }
};

export default errorReducer;
