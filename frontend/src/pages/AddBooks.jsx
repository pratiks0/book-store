import React from "react";

const AddBooks = () => {
  return (
    <div className="bg-dark d-flex justify-content-center align-items-center border-bottom border-top" style={{ minHeight: "91.5vh" }}>
        <div className="container p-4">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label text-white">
          Book Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter Book Name"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label text-white">
          Author
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter Author Name"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label text-white">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter Description"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label text-white">
          Image
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter the URL"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label text-white">
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter the Prize"
        />
      </div>
      <button className="btn btn-success">Submit</button>
      </div>
    </div>
  );
};

export default AddBooks;
