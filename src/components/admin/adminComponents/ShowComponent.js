import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


const ShowComponent = (props) => {
console.log(props)


  return (
    <div className='container'>
      {
        props.show.map((item, idx) => {
          return(
            <div 
              key={idx}
              className="card" 
              // style={{width: '36rem'}}
              >
              {
                item.image_path && <img src={`http://localhost:5000/${item.image_path}`} className="card-img-top" alt="..." />
              }
              <div className="card-body">
                {
                  item.title && <h5 className="card-title">Заголовок: {item.title} </h5> 
                }
                {
                  item.name && <p className="card-text">Название: {item.name} </p>
                }
                {
                  item.title_top && <p className="card-text">Вверхный заголовок: {item.title_top} </p>
                }
                {
                  item.text && <p className="card-text">Текст: {item.text} </p>
                }
                {
                  item.slug && <p className="card-text">Ссылка: <a href={item.slug} target="_blank" rel='noreferrer' >{item.slug}</a> </p>
                }
                <Link to={props.path} className="btn btn-primary">Назад</Link>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    show: state.showComponent
  }
}

export default connect(mapStateToProps, {})(ShowComponent)
