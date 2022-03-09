import React from 'react';

const CardsAddBottom = () => {
    return (
        <div>
            <h1 className="alert alert-primary">Add</h1>
            <div className="card-body">
                <form id="frm-add-cardTop">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Title</label>
                                <input required type="text" className="form-control" placeholder="Добавить загаловку" name="name" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Text</label>
                                <input required type="text" className="form-control" placeholder="Добавить текст" name="name" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Link</label>
                                <input required type="text" className="form-control" placeholder="Добавить сылку" name="name" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Image</label>
                                <input required type="file" className="form-control" placeholder="Добавить рисунок" name="file" />
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-success">добавить</button>
                </form>
            </div>

        </div>
    );
}

export default CardsAddBottom;
