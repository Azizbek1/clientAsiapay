import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {} from '../../../../actions' 


const UserList = (props) => {
  const  navigate = useNavigate()
  
  console.log(props)

  useEffect(() => {
    props.getMenuList()

      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  


  const deleteItem = (item) => {
    // props.deleteMenu(item._id)
    // props.getMenuList()
    
  }

  const show = (item) => {
      // props.showItem([item])
      //   navigate('/admin/navbar/show')
  }

  const edit = (menu) => {
      // console.log(menu);
      // props.updateListMenu(menu)
      // navigate('/admin/navbar/edit')

  }



  return (
      <div>
          <h1 className="slider slider-purple">Список</h1>
          <div className="card-body">
              <table  className="table table-bordered table-hover">
                  <thead>
                      <tr>
                            <th>index</th>
                            <th>Название</th>
                            <th>действие</th>
                      </tr>
                  </thead>
                  <tbody>


                      {
                          props.list ? props.list.map((item, idx) => {
                            return(
                                <tr key={idx}>
                                    <th>{idx}</th>
                                    <th>{item.name}</th>
                                    <th>
                                      <div className='f-flex align-content-between '>
                                        <button className="btn btn-danger mr-2" onClick={()=>deleteItem(item)}>Удалить</button>
                                        <button className="btn btn-success mr-2" onClick={()=> edit(item)} >Редактировать</button>
                                        <button className="btn btn-primary" onClick={()=> show(item)} >Показывать</button>
                                      </div>
                                    </th>

                                </tr>
                            )
                          }) : 
                            <tr>
                              <th>не найден</th>
                            </tr>

                      }
                  </tbody>
                  <tfoot>
                      <tr>
                        <th>index</th>
                        <th>Название</th>
                        <th>действие</th>
                      </tr>
                  </tfoot>
              </table>
          </div>
      </div>
  );
}

const mapStateToProps = (state) => {
  return{
      state: state,
      list: state.menuList,
      message: state.deleteMenu,
  }
}

export default connect(mapStateToProps, {})(UserList);

