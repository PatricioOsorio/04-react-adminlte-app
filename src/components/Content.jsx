const Content = () => {
  return (
    <>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">
                  {' '}
                  Top Navigation <small>Example 3.0</small>
                </h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Layout</a>
                  </li>
                  <li className="breadcrumb-item active">Top Navigation</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* /.content-header */}

        {/* Main content */}
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-8 col-lg-8">
                <div className="card card-primary">
                  <div className="card-header">
                    <h4 className="card-title">
                      {' '}
                      <i className="fas fa-user-tie mr-2"></i> Titulo{' '}
                    </h4>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="">Nombre</label>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="Escriba aqui :)"
                        maxLength={10}
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Apellidos</label>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="Escriba aqui :)"
                      ></input>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="">Edad</label>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="0"
                          step="0.1"
                        ></input>
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="">Calificación</label>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="0"
                          step="0.1"
                        ></input>
                      </div>
                    </div>

                
                    <div className="form-group">
                      <label htmlFor="">Email</label>
                      <input
                        type="email"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="@correo.com"
                      ></input>
                    </div>

                    <div className="form-group"></div>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-primary btn-lg float-right">
                      {' '}
                      Aceptar{' '}
                    </button>
                    <button className="btn btn-secondary">Cancelar</button>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-md-8 col-lg-4">
                <div className="card card-primary">
                  <div className="card-header">
                    <h4 className="card-title">
                      {' '}
                      <i className="fas fa-user-tie mr-2"></i> Titulo{' '}
                    </h4>
                  </div>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="">Nombre</label>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="Escriba aqui :)"
                        maxLength={10}
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Apellidos</label>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="Escriba aqui :)"
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Calificación</label>
                      <input
                        type="number"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="0"
                        step="0.1"
                      ></input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Email</label>
                      <input
                        type="email"
                        name=""
                        id=""
                        className="form-control"
                        placeholder="@correo.com"
                      ></input>
                    </div>

                    <div className="form-group"></div>
                  </div>
                  <div className="card-footer">
                    <button className="btn btn-primary btn-lg float-right">
                      {' '}
                      Aceptar{' '}
                    </button>
                    <button className="btn btn-secondary">Cancelar</button>
                  </div>
                </div>
              </div>
            </div>
            {/* /.row */}
          </div>
        </div>
        {/* /.content */}
      </div>
    </>
  );
};

export default Content;
