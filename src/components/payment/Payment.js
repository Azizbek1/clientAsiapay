import { MDBBtn, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import beeline from "../../images/beeline.png"
import "./payment.scss";
const Payment = () => {
    const [basicModal, setBasicModal] = useState(false);

    const toggleShow = () => setBasicModal(!basicModal);

    return (
        <div className="payment">
            <div className="container">
                <h2>Оплата</h2>
                <p>Любой картой Online</p>
                <div className="payment__category">
                    <div className="payment__text">
                        <span className="payment__text-all">
                            <span className="payment__text-title">Мобильные операторы</span>
                            <span className="payment__text-number">20</span>
                        </span>
                        <a className="payment__text-slug" href="javascript(void)">Ещё</a>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-sm-4 col-6">
                            <MDBBtn className="payment__btn"  onClick={toggleShow}>
                                <div className="payment__cards">
                                    <span>
                                        <img src={beeline} alt="png" />
                                    </span>
                                </div>
                            </MDBBtn>
                            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='1'>
                                <MDBModalDialog>
                                    <MDBModalContent>
                                        <MDBModalHeader>
                                            <MDBModalTitle>Modal title</MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                        </MDBModalHeader>
                                        <MDBModalBody>...</MDBModalBody>

                                        <MDBModalFooter>
                                            <MDBBtn color='secondary' onClick={toggleShow}>
                                                Close
                                            </MDBBtn>
                                            <MDBBtn>Save changes</MDBBtn>
                                        </MDBModalFooter>
                                    </MDBModalContent>
                                </MDBModalDialog>
                            </MDBModal>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6">
                            <MDBBtn className="payment__btn"  onClick={toggleShow}>
                                <div className="payment__cards">
                                    <span>
                                        <img src={beeline} alt="png" />
                                    </span>
                                </div>
                            </MDBBtn>
                            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                                <MDBModalDialog>
                                    <MDBModalContent>
                                        <MDBModalHeader>
                                            <MDBModalTitle>Modal title</MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                        </MDBModalHeader>
                                        <MDBModalBody>...</MDBModalBody>

                                        <MDBModalFooter>
                                            <MDBBtn color='secondary' onClick={toggleShow}>
                                                Close
                                            </MDBBtn>
                                            <MDBBtn>Save changes</MDBBtn>
                                        </MDBModalFooter>
                                    </MDBModalContent>
                                </MDBModalDialog>
                            </MDBModal>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6">
                            <MDBBtn className="payment__btn"  onClick={toggleShow}>
                                <div className="payment__cards">
                                    <span>
                                        <img src={beeline} alt="png" />
                                    </span>
                                </div>
                            </MDBBtn>
                            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                                <MDBModalDialog>
                                    <MDBModalContent>
                                        <MDBModalHeader>
                                            <MDBModalTitle>Modal title</MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                        </MDBModalHeader>
                                        <MDBModalBody>...</MDBModalBody>

                                        <MDBModalFooter>
                                            <MDBBtn color='secondary' onClick={toggleShow}>
                                                Close
                                            </MDBBtn>
                                            <MDBBtn>Save changes</MDBBtn>
                                        </MDBModalFooter>
                                    </MDBModalContent>
                                </MDBModalDialog>
                            </MDBModal>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6">
                            <MDBBtn className="payment__btn"  onClick={toggleShow}>
                                <div className="payment__cards">
                                    <span>
                                        <img src={beeline} alt="png" />
                                    </span>
                                </div>
                            </MDBBtn>
                            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                                <MDBModalDialog>
                                    <MDBModalContent>
                                        <MDBModalHeader>
                                            <MDBModalTitle>Modal title</MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                        </MDBModalHeader>
                                        <MDBModalBody>...</MDBModalBody>

                                        <MDBModalFooter>
                                            <MDBBtn color='secondary' onClick={toggleShow}>
                                                Close
                                            </MDBBtn>
                                            <MDBBtn>Save changes</MDBBtn>
                                        </MDBModalFooter>
                                    </MDBModalContent>
                                </MDBModalDialog>
                            </MDBModal>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6">
                            <MDBBtn className="payment__btn"  onClick={toggleShow}>
                                <div className="payment__cards">
                                    <span>
                                        <img src={beeline} alt="png" />
                                    </span>
                                </div>
                            </MDBBtn>
                            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                                <MDBModalDialog>
                                    <MDBModalContent>
                                        <MDBModalHeader>
                                            <MDBModalTitle>Modal title</MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                        </MDBModalHeader>
                                        <MDBModalBody>...</MDBModalBody>

                                        <MDBModalFooter>
                                            <MDBBtn color='secondary' onClick={toggleShow}>
                                                Close
                                            </MDBBtn>
                                            <MDBBtn>Save changes</MDBBtn>
                                        </MDBModalFooter>
                                    </MDBModalContent>
                                </MDBModalDialog>
                            </MDBModal>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6">
                            <MDBBtn className="payment__btn"  onClick={toggleShow}>
                                <div className="payment__cards">
                                    <span>
                                        <img src={beeline} alt="png" />
                                    </span>
                                </div>
                            </MDBBtn>
                            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                                <MDBModalDialog>
                                    <MDBModalContent>
                                        <MDBModalHeader>
                                            <MDBModalTitle>Modal title</MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                        </MDBModalHeader>
                                        <MDBModalBody>...</MDBModalBody>

                                        <MDBModalFooter>
                                            <MDBBtn color='secondary' onClick={toggleShow}>
                                                Close
                                            </MDBBtn>
                                            <MDBBtn>Save changes</MDBBtn>
                                        </MDBModalFooter>
                                    </MDBModalContent>
                                </MDBModalDialog>
                            </MDBModal>
                        </div>
                     

                    </div>
                </div>
                <div className="payment__category">
                    <div className="payment__text">
                        <span className="payment__text-all">
                            <span className="payment__text-title">Мобильные операторы</span>
                            <span className="payment__text-number">20</span>
                        </span>
                        <a className="payment__text-slug" href="javascript(void)">Ещё</a>
                    </div>
                    <div className="row">
                        <div className="col-md-2 col-sm-4 col-6">
                            <MDBBtn className="payment__btn"  onClick={toggleShow}>
                                <div className="payment__cards">
                                    <span>
                                        <img src={beeline} alt="png" />
                                    </span>
                                </div>
                            </MDBBtn>
                            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='1'>
                                <MDBModalDialog>
                                    <MDBModalContent>
                                        <MDBModalHeader>
                                            <MDBModalTitle>Modal title</MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                        </MDBModalHeader>
                                        <MDBModalBody>...</MDBModalBody>

                                        <MDBModalFooter>
                                            <MDBBtn color='secondary' onClick={toggleShow}>
                                                Close
                                            </MDBBtn>
                                            <MDBBtn>Save changes</MDBBtn>
                                        </MDBModalFooter>
                                    </MDBModalContent>
                                </MDBModalDialog>
                            </MDBModal>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6">
                            <MDBBtn className="payment__btn"  onClick={toggleShow}>
                                <div className="payment__cards">
                                    <span>
                                        <img src={beeline} alt="png" />
                                    </span>
                                </div>
                            </MDBBtn>
                            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                                <MDBModalDialog>
                                    <MDBModalContent>
                                        <MDBModalHeader>
                                            <MDBModalTitle>Modal title</MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                        </MDBModalHeader>
                                        <MDBModalBody>...</MDBModalBody>

                                        <MDBModalFooter>
                                            <MDBBtn color='secondary' onClick={toggleShow}>
                                                Close
                                            </MDBBtn>
                                            <MDBBtn>Save changes</MDBBtn>
                                        </MDBModalFooter>
                                    </MDBModalContent>
                                </MDBModalDialog>
                            </MDBModal>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6">
                            <MDBBtn className="payment__btn"  onClick={toggleShow}>
                                <div className="payment__cards">
                                    <span>
                                        <img src={beeline} alt="png" />
                                    </span>
                                </div>
                            </MDBBtn>
                            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                                <MDBModalDialog>
                                    <MDBModalContent>
                                        <MDBModalHeader>
                                            <MDBModalTitle>Modal title</MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                        </MDBModalHeader>
                                        <MDBModalBody>...</MDBModalBody>

                                        <MDBModalFooter>
                                            <MDBBtn color='secondary' onClick={toggleShow}>
                                                Close
                                            </MDBBtn>
                                            <MDBBtn>Save changes</MDBBtn>
                                        </MDBModalFooter>
                                    </MDBModalContent>
                                </MDBModalDialog>
                            </MDBModal>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6">
                            <MDBBtn className="payment__btn"  onClick={toggleShow}>
                                <div className="payment__cards">
                                    <span>
                                        <img src={beeline} alt="png" />
                                    </span>
                                </div>
                            </MDBBtn>
                            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                                <MDBModalDialog>
                                    <MDBModalContent>
                                        <MDBModalHeader>
                                            <MDBModalTitle>Modal title</MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                        </MDBModalHeader>
                                        <MDBModalBody>...</MDBModalBody>

                                        <MDBModalFooter>
                                            <MDBBtn color='secondary' onClick={toggleShow}>
                                                Close
                                            </MDBBtn>
                                            <MDBBtn>Save changes</MDBBtn>
                                        </MDBModalFooter>
                                    </MDBModalContent>
                                </MDBModalDialog>
                            </MDBModal>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6">
                            <MDBBtn className="payment__btn"  onClick={toggleShow}>
                                <div className="payment__cards">
                                    <span>
                                        <img src={beeline} alt="png" />
                                    </span>
                                </div>
                            </MDBBtn>
                            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                                <MDBModalDialog>
                                    <MDBModalContent>
                                        <MDBModalHeader>
                                            <MDBModalTitle>Modal title</MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                        </MDBModalHeader>
                                        <MDBModalBody>...</MDBModalBody>

                                        <MDBModalFooter>
                                            <MDBBtn color='secondary' onClick={toggleShow}>
                                                Close
                                            </MDBBtn>
                                            <MDBBtn>Save changes</MDBBtn>
                                        </MDBModalFooter>
                                    </MDBModalContent>
                                </MDBModalDialog>
                            </MDBModal>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6">
                            <MDBBtn className="payment__btn"  onClick={toggleShow}>
                                <div className="payment__cards">
                                    <span>
                                        <img src={beeline} alt="png" />
                                    </span>
                                </div>
                            </MDBBtn>
                            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                                <MDBModalDialog>
                                    <MDBModalContent>
                                        <MDBModalHeader>
                                            <MDBModalTitle>Modal title</MDBModalTitle>
                                            <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                                        </MDBModalHeader>
                                        <MDBModalBody>...</MDBModalBody>

                                        <MDBModalFooter>
                                            <MDBBtn color='secondary' onClick={toggleShow}>
                                                Close
                                            </MDBBtn>
                                            <MDBBtn>Save changes</MDBBtn>
                                        </MDBModalFooter>
                                    </MDBModalContent>
                                </MDBModalDialog>
                            </MDBModal>
                        </div>
                     

                    </div>
                </div>

              


            </div>
        </div >
    );
}

export default Payment;
