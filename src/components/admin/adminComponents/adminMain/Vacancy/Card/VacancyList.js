import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import notify from '../../../../../hooks/notify';
import {getVacancyList, deleteVacancy, editVacancy, showItem, } from '../../../../../../actions'

const VacancyList = (props) => {
    const navigate = useNavigate()


    console.log(props)

    useEffect(() => {
        props.getVacancyList()
    }, [])

    const deleteItem = (item) => {
        if (window.confirm(`Вы хотите удалить это ${item.title}?`)) {
            props.deleteVacancy(item._id, props.token)
            props.getVacancyList()

            notify(props.res)

        }
        
    }

    const edit = (item) => {
        props.editVacancy(item)
        navigate('/admin/vacancy/card/edit')
    }

    const show = (item) => {
        props.showItem([item])
        navigate('/admin/vacancy/card/show')
    }




    return (
        <div>
            <h3 className="text-center">Список</h3>
            <div className="card-body">
                <table  className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>index</th>
                            <th>Заголовок</th>
                            <th>Текст</th>
                            <th>Ссылка</th>
                            <th>Вверхный заголовок</th>
                            <th>действие</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            props.list && props.list.map((item, idx) => {
                                return(
                                    <tr key={idx}>
                                        <th>{idx}</th>
                                        <th>{item.title}</th>
                                        <th>{item.text}</th>
                                        <th>{item.slug}</th>
                                        <th>{item.title_top}</th>
                                        <th>
                                            <div className='f-flex align-content-between '>
                                                <button className="btn btn-danger mr-2 mb-2" onClick={()=>deleteItem(item)}>Удалить</button>
                                                <button className="btn btn-success mr-2 mb-2" onClick={()=> edit(item)} >Редактировать</button>
                                                <button className="btn btn-primary" onClick={()=> show(item)} >Показывать</button>
                                            </div>
                                        </th>

                                    </tr>
                                )
                            })
                        }
                        
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>index</th>
                            <th>Заголовок</th>
                            <th>Текст</th>
                            <th>Ссылка</th>
                            <th>Вверхный заголовок</th>
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
        list: state.getVacancyList,
        res: state.deleteVacancy,
        token: state.token
        
    }
}

export default connect(mapStateToProps, {getVacancyList, deleteVacancy, editVacancy, showItem})(VacancyList);
