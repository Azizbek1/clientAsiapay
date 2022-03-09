import api from '../api';


export const showItem = (item) => dispatch => {
  dispatch({
    type: 'SHOW_ITEM',
    payload: item,
  });
};

export const admin = (name, password) => async (dispatch) => {
  const res = await api.post(`login`, { name, password });
  dispatch({
    type: 'ADMIN_LOGIN',
    payload: res.data,
  });

};

export const logOutAdmin = () => (dispatch) => {
  dispatch({
    type: 'ADMIN_LOGIN',
    payload: {
      token: '',
      user: '',
    },
  });
};


// --- SLIDER ---
export const getSliderList = () => async (dispatch) => {
  const res = await api.get(`slider/list`);
  dispatch({
    type: 'GET_SLIDER_LIST',
    payload: res.data,
  });
};


export const postSlider = (post, token) => async (dispatch) => {
  console.log(post);
  const res = await api.post(`slider/create`, post, {
    headers: { Authorization: token },
  });
  dispatch({
    type: 'POST_SLIDER',
    payload: res.data,
    message: res.data.message,
  });
};

export const updateItemSlider = (post) => (dispatch) => {
  dispatch({
    type: 'UPDATE_ITEM_SLIDER',
    payload: post,
  });
};

export const updateSlider = (_id, post, token) => async (dispatch) => {
  const res = await api.put(`slider/update/${_id}`, post, {
    headers: { Authorization: token },
  });
  dispatch({
    type: 'UPDATE_SLIDER',
    payload: res.data,
    res: res,
  });
};

export const deleteSlider = (id, token) => async (dispatch) => {
  const res = await api.delete(`slider/delete/${id}`, {
    headers: { Authorization: token },
  });
  dispatch({
    type: 'SLIDER_DELETE',
    payload: res.data,
    message: res.data.message,
  });
};


// --- MENU ---

export const getMenuList = () => async (dispatch) => {
  const res = await api.get(`menu/list`);
  dispatch({
    type: 'GET_MENU_LIST',
    payload: res.data,
  });
};
// , {
//     headers:{Authorization: token}
// }
export const postMenu = (menu, token) => async (dispatch) => {
  const res = await api.post(`menu/create`, menu, {
    headers: { Authorization: token },
  });
  dispatch({
    type: 'POST_MENU',
    payload: res.data,
    message: res.data.message,
  });
};

export const updateListMenu = (menu) => (dispatch) => {
  dispatch({
    type: 'UPDATE_LIST_MENU',
    payload: menu,
  });
};

export const updateMenu = (_id, menu, token) => async (dispatch) => {
  const res = await api.put(`menu/edit/${_id}`, menu, {
    headers: { Authorization: token },
  });
  dispatch({
    type: 'UPDATE_MENU',
    message: res,

  });
};

export const deleteMenu = (id, token) => async (dispatch) => {
  const res = await api.get(`menu/delete/${id}`, {
    headers: { Authorization: token },
  });
  dispatch({
    type: 'MENU_DELETE',
    payload: res.data,
    message: res.data.message,
  });
};


// ----- CARD TOP -----

export const createCardTop = (card, token) => async (dispatch) => {
  const res = await api.post(`card/create`, card, {
    headers: { Authorization: token },
  });
  dispatch({
    type: 'CARD_CREATE',
    payload: res.data,
    res: res,
    message: res.data.message,
  });
};

export const getCards = () => async (dispatch) => {
  const res = await api.get(`card/list`);
  dispatch({
    type: 'GET_CARDS',
    payload: res.data,
  });
};

export const editCard = (card) => async (dispatch) => {
  dispatch({
    type: 'EDIT_CARDS',
    payload: card,
  });
};

export const updateCard = (_id, card, token) => async (dispatch) => {
  const res = await api.put(`card/update/${_id}`, card, {
    headers: { Authorization: token },
  });
  dispatch({
    type: 'UPDATE_CARD',
    res: res,
  });
};

export const deleteCard = (_id, token) => async (dispatch) => {
  const res = await api.get(`card/delete/${_id}`, {
    headers: { Authorization: token },
  });
  dispatch({
    type: 'DELETE_CARD',
    res: res,
  });
};


// ---- Blog title ----

export const createBlogTitle = (title, token) => async (dispatch) => {
  const res = await api.post(`blog/create/title`, title, {
    headers: { Authorization: token },
  });
  dispatch({
    type: 'BLOG_TITLE_CREATE',
    payload: res.data,
    res: res,
  });
};

export const getBlogTitle = () => async (dispatch) => {
  const res = await api.get(`blog/list/title`);
  dispatch({
    type: 'BLOG_TITLE_LIST',
    payload: res.data,
  });
};

export const editBlogTitle = (blog) => async (dispatch) => {
  dispatch({
    type: 'BLOG_TITLE_EDIT',
    payload: blog,
  });
};

export const updateBlogTitle = (_id, blog, token) => async (dispatch) => {
  const res = await api.put(`blog/edit/title/${_id}`, blog, {
    headers: { Authorization: token },
  });
  dispatch({
    type: 'BLOG_TITLE_UPDATE',
    res: res,
  });
};

export const deleteBlogTitle = (_id, token) => async (dispatch) => {
  const res = await api.delete(`blog/delete/title/${_id}`, {
    headers: { Authorization: token },
  });
  dispatch({
    type: 'BLOG_TITLE_DELETE',
    payload: res.data,
    res,
  });
};


// ---- blog card ----


export const createBlogCard = (card, token) => async (dispatch) => {
  const res = await api.post(`blog/create/card`, card, {
    headers: { Authorization: token },
  });
  dispatch({
    type: 'CREATE_BLOG_CARD',
    res: res,
  });
};

export const listBlogCard = () => async (dispatch) => {
  const res = await api.get(`blog/list/card`);
  dispatch({
    type: 'GET_BLOG_CARD',
    payload: res.data,
  });
};

export const editBlogCard = (card) => async (dispatch) => {
  dispatch({
    type: 'EDIT_BLOG_CARD',
    payload: card,
  });
};

export const updateBlogCard = (_id, card, token) => async (dispatch) => {
  const res = await api.put(`blog/update/card/${_id}`, card, {
    headers: { Authorization: token },
  });
  dispatch({
    type: 'UPDATE_BLOG_CARD',
    res: res,
  });
};

export const deleteBlogCard = (_id, token) => async (dispatch) => {
  const res = await api.delete(`blog/delete/card/${_id}`, {
    headers: { Authorization: token },
  });
  dispatch({
    type: 'DELETE_BLOG_CARD',
    res: res,
  });
};


// -----vacancy----

export const createVacancy = (vacancy, token) => async (dispatch) => {
  const res = await api.post(`vakanci/create`, vacancy, {
    headers: { Authorization: token },
  });
  dispatch({
    type: 'VACANCY_CREATE',
    payload: res,
  });
};

export const getVacancyList = () => async (dispatch) => {
  const res = await api.get(`vakanci/list`);
  dispatch({
    type: 'VACANCY_LIST',
    payload: res.data,
  });
};

export const editVacancy = (vacancy) => async (dispatch) => {
  dispatch({
    type: 'VACANCY_EDIT',
    payload: vacancy,
  });
};

export const updateVacancy = (_id, vacancy, token) => async (dispatch) => {
  const res = await api.put(`vakanci/update/${_id}`, vacancy, {
    headers: { Authorization: token },
  });
  dispatch({
    type: 'VACANCY_UPDATE',
    payload: res,
  });
};

export const deleteVacancy = (_id, token) => async (dispatch) => {
  const res = await api.get(`vakanci/delete/${_id}`, {
    headers: { Authorization: token },
  });
  dispatch({
    type: 'VACANCY_DELETE',
    payload: res,
  });
};


// ---- users --- 

 




