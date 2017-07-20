import { combineReducers } from "redux";
import postsReducer from "./reducer_posts";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth_reducer";
//fetch all client
const rootReducer = combineReducers({
	form: formReducer,
	auth: authReducer,
	posts: postsReducer
});

export default rootReducer;