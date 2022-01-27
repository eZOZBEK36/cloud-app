import thunk from 'redux-thunk'
import { appReducer } from './reducers/appReducer'
import { fileReducer } from './reducers/fileReducer'
import { userReducer } from './reducers/userReducer'
import { uploadReducer } from './reducers/uploadReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'

const rootStore = combineReducers({
	app: appReducer,
	user: userReducer,
	files: fileReducer,
	upload: uploadReducer,
})

const store = createStore(
	rootStore,
	composeWithDevTools(applyMiddleware(thunk)),
)

export { store }
