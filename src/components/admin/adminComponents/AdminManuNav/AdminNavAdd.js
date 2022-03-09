import React, { useState } from 'react';
import { connect } from 'react-redux';
import {postMenu} from '../../../../actions'


const initialstate = {
  name: '',
  
}

const AdminNavAdd = (props) => {


  const [formData, setFormData] = useState(initialstate)


  console.log(formData)

  




  const submit = (e) => {
    
      e.preventDefault()
      props.postMenu(formData, props.token) 

      
      setFormData(initialstate)
  }
  console.log(props);



  

  return(
    <div>
            <h3 className="text-center">Добавить меню</h3>
            <div className="card-body">
                <form id="frm-add-cardTop" onSubmit={submit}>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>название</label>
                                <input 
                                    required 
                                    value={formData.name}
                                    onChange={(e)=>  setFormData( {...formData, name: e.target.value} )}
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Добавить название" 
                                    name="name" />
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-success" type='submit'>добавить</button>
                </form>
            </div>
        </div>
  )
}

const mapStateToProps = (state) => {
  return {
      menu: state.menuList.list,
      token: state.token,
      message: state.postMenu,
  }
}

export default connect(mapStateToProps, {postMenu})(AdminNavAdd);

