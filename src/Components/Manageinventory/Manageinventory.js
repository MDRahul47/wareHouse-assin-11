import React from 'react';

const Manageinventory = () => {
    return (
        <div className='container w-25'>
            <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" placeholder='Enter an Car Name.' id="exampleInputEmail1" aria-describedby="emailHelp"/>

  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Price</label>
    <input type="number" className="form-control" placeholder='Enter an Car Price.' id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Discretion</label>
    <input type="text" placeholder='Enter an Car Discretion.' className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Supplier Name</label>
    <input type="text" placeholder='Enter an Car Discretion.' className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Image</label>
    <input type="text" placeholder='Enter an Car Image Link.' className="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    );
};

export default Manageinventory;
