import {applyMiddleware, combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { 
    clickSideBarReducer, showComponent, admin, adminAuth, token,
    sliderList, menuList, 
    postMenu, deleteMenu, 
    updateMenu ,updateListMenu, 
    statusPostSlider, statusDeleteSilder,
    reducerItemSlider, statusUpdateSilder,
    createCard, getAllCards, deleteCardStatus,
    editCard, updateCardStatus, createBlogTitle,
    blogTitleList, blogTitleDelete, blogTitleEdit,
    blogTitleUpdate, createBlogCard, getBlogCards,
    deleteBlogCards, editBlogCards, updateBlogCards,
    createVacancy, getVacancyList, deleteVacancy,
    editVacancy, updateVacancy,
    } from './AdminReducer'



const rootReducer = combineReducers({
    clickSideBarReducer,
    showComponent,
    admin,
    token,
    adminAuth,
    sliderList,
    menuList,
    postMenu,
    deleteMenu,
    updateMenu,
    updateListMenu,
    statusPostSlider,
    statusDeleteSilder,
    reducerItemSlider,
    statusUpdateSilder,
    createCard,
    getAllCards,
    deleteCardStatus,
    editCard,
    updateCardStatus,
    createBlogTitle,
    blogTitleList,
    blogTitleDelete,
    blogTitleEdit,
    blogTitleUpdate,
    createBlogCard,
    getBlogCards,
    deleteBlogCards,
    editBlogCards,
    updateBlogCards,
    createVacancy,
    getVacancyList,
    deleteVacancy,
    editVacancy,
    updateVacancy,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))