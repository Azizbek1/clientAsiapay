const initialState = false

export const clickSideBarReducer = (state=initialState, action) =>{
  switch (action.type){
    case "SET_CLICK":
      return action.payload
      default:
        return state
  }
}

// ----- show components ----
export const showComponent = (state=[], action) =>{
  switch (action.type){
    case "SHOW_ITEM":
      return action.payload
      default:
        return state
  }
}



// ----- admin ----
export const admin = (state=[], action) => {
  switch(action.type){
    case "ADMIN_LOGIN":
      return action.payload
    default: 
      return state
  }
}

export const token = (state=[], action) => {
  switch(action.type){
    case "ADMIN_LOGIN":
      return action.payload.token
    default: 
      return state
  }
}

export const adminAuth = (state=false, action) => {
  switch(action.type){
    case "ADMIN_LOGIN":
      return action.payload.user.role === 1 ? true : false
    default: 
      return state
  }
}

//-----

export const sliderList = (state=[], action) =>{
  switch (action.type){
    case "GET_SLIDER_LIST":
      return action.payload
      default:
        return state
  }
}

export const statusPostSlider = (state=[], action) =>{
  switch (action.type){
    case "POST_SLIDER":
      return action.message
      default:
        return state
  }
}

export const reducerItemSlider = (state=[], action) =>{
  switch (action.type){
    case "UPDATE_ITEM_SLIDER":
      return action.payload
      default:
        return state
  }
}

export const statusUpdateSilder = (state=[], action) =>{
  switch(action.type){
    case "UPDATE_SLIDER":
      return action.res
      default: 
      return state
  }
}


export const statusDeleteSilder = (state=[], action) =>{
  switch(action.type){
    case "SLIDER_DELETE":
      return action.message
      default: 
      return state
  }
}




// ---- menu ----

export const menuList = (state=[], action) =>{
  switch (action.type){
    case "GET_MENU_LIST":
      return action.payload
      default:
        return state
  }
}

export const postMenu = (state={}, action) =>{
  switch (action.type){
    case "POST_MENU":
      return action.message
      default:
        return state
  }
}

export const updateListMenu = (state={}, action) =>{
  switch (action.type){
    case "UPDATE_LIST_MENU":
      return action.payload
      default:
        return state
  }
}

export const updateMenu = (state={}, action) =>{
  switch (action.type){
    case "UPDATE_MENU":
      return action.message
      default:
        return state
  }
}


export const deleteMenu = (state={}, action) =>{
  switch (action.type){
    case "MENU_DELETE":
      return action.message
      default:
        return state
  }
}



// ----card-----

export const createCard = (state=[], action) => {
  switch(action.type){
    case "CARD_CREATE":
      return action.res;
      default: return state
  }
}

export const getAllCards = (state=[], action) => {
  switch(action.type) {
    case "GET_CARDS" :
      return action.payload;
      default : return state
  }
}

export const editCard = (state=[], action) => {
  switch(action.type) {
    case "EDIT_CARDS" :
      return action.payload;
      default : return state
  }
}


export const updateCardStatus = (state=[], action) => {
  switch(action.type) {
    case "UPDATE_CARD" :
      return action.res;
      default : return state
  }
}



export const deleteCardStatus = (state=[], action) => {
  switch(action.type) {
    case "DELETE_CARD" :
      return action.res;
      default : return state
  }
}

// ----- blog title --- 
export const createBlogTitle = (state=[], action) => {
  switch(action.type) {
    case "BLOG_TITLE_CREATE" :
      return action.res;
      default : return state
  }
}

export const blogTitleList = (state=[], action) => {
  switch(action.type) {
    case "BLOG_TITLE_LIST" :
      return action.payload;
      default : return state
  }
}

export const blogTitleEdit = (state=[], action) => {
  switch(action.type) {
    case "BLOG_TITLE_EDIT" :
      return action.payload;
      default : return state
  }
}

export const blogTitleUpdate = (state=[], action) => {
  switch(action.type) {
    case "BLOG_TITLE_UPDATE" :
      return action.res;
      default : return state
  }
}


export const blogTitleDelete = (state=[], action) => {
  switch(action.type) {
    case "BLOG_TITLE_DELETE" :
      return action.res;
      default : return state
  }
}


// ---- blog card ----


export const createBlogCard = (state=[], action) => {
  switch(action.type){
    case "CREATE_BLOG_CARD":
      return action.res;
      default : return state
  }
}

export const getBlogCards = (state=[], action) => {
  switch(action.type){
    case "GET_BLOG_CARD":
      return action.payload;
      default : return state
  }
}

export const editBlogCards = (state=[], action) => {
  switch(action.type){
    case "EDIT_BLOG_CARD":
      return action.payload;
      default : return state
  }
}

export const updateBlogCards = (state=[], action) => {
  switch(action.type){
    case "UPDATE_BLOG_CARD":
      return action.res;
      default : return state
  }
}


export const deleteBlogCards = (state=[], action) => {
  switch(action.type){
    case "DELETE_BLOG_CARD":
      return action.res;
      default : return state
  }
}



// ----- vacancy ----

export const createVacancy = (state=[], action) => {
  switch(action.type){
    case "VACANCY_CREATE":
      return action.payload;
      default : return state
  }
}

export const getVacancyList = (state=[], action) => {
  switch(action.type){
    case "VACANCY_LIST":
      return action.payload;
      default : return state
  }
}

export const editVacancy = (state=[], action) => {
  switch(action.type){
    case "VACANCY_EDIT":
      return action.payload;
      default : return state
  }
}

export const updateVacancy = (state=[], action) => {
  switch(action.type){
    case "VACANCY_UPDATE":
      return action.payload;
      default : return state
  }
}


export const deleteVacancy = (state=[], action) => {
  switch(action.type){
    case "VACANCY_DELETE":
      return action.payload;
      default : return state
  }
}












