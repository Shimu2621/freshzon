import React from "react";
import { SiGoogleforms } from "react-icons/si";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useState } from "react";

const BasicInfo = () => {
  const [formInput, setFormInput] = useState(false);
  //destructuring register, handleSubmit and formState into the useForm function
  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm();

  //call onSubmit with arguments which is (data) so whenever form will be submitted
  const onSubmit = (data) => {
    console.log("Form submitted successfully", data);
    setFormInput(true);
  };

  return (
    <div
      style={{
        top: "14%",
        width: 1200,
        height: 100,
        left: "15%",
        position: "absolute",
      }}
      className="basicInfo container p-3 d-flex justify-content-center align-item-end"
    >
      <div className="align-center">
        {/* /* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border shadow p-5 rounded-2"
          style={{ width: 700 }}
          action=""
        >
          <div className="mb-2 d-flex justify-content-between">
            <h2 className="align-center" style={{ fontSize: 30 }}>
              <SiGoogleforms style={{ color: "darkgray" }} />
              Personal Information
            </h2>
            <button
              className="button"
              style={{
                width: 50,
                height: 40,
                color: "black",
                border: "1px solid darkgray",
                fontSize: "14px",
              }}
            >
              EDIT
            </button>
          </div>
          <hr />

          <div className="mb-2">
            <label className="form-label fw-bold">Name:</label>
            {/* register your input into the hook by invoking the "register" function */}
            <input
              {...register("name", {
                required: "Name is required",
                maxLength: { value: 8, message: "Atleast 8 letters" },
              })}
              className="form-control"
              type="text"
              style={{ width: 400 }}
            />
            {/* <p className="py-2 text-danger fw-bold">{errors?.name?.message}</p> */}
          </div>

          <div className="mt-2">
            <label className="form-label fw-bold">Email:</label>
            <input
              {...register("email", { pattern: /^[A-Za-z.@]+$/i })}
              className="form-control"
              type="email"
              style={{ width: 400 }}
            />
            {errors?.email?.type === "pattern" && (
              <span className="py-2 text-danger fw-bold">
                Email is required
              </span>
            )}
          </div>

          {/* <div>
            <label className="form-label fw-bold">Password</label>
            <input
              {...register("pass", {
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
              })}
              className="form-control"
              type="password"
            />
            {errors?.pass?.type === "pattern" && (
              <span className="py-2 text-danger fw-bold">
                password contain must be a uppercase, lowercase,number and
                special character
              </span>
            )}
          </div> */}

          {/* <div>
            <label className="form-label fw-bold">Confirm Password</label>
            <input
              {...register("confirmPass", {
                validate: (data) => {
                  if (watch("pass") !== data) {
                    return "Must be match with password";
                  }
                },
              })}
              className="form-control"
              type="password"
            />
            <p className="py-2 text-danger fw-bold">
              {errors.confirmPass?.message}
            </p>
          </div> */}

          <div className="mt-2">
            <label className="form-label fw-bold">Address:</label>
            <input
              {...register("address")}
              className="form-control"
              type="text"
              style={{ width: 400 }}
            />
          </div>

          <div className="mt-2">
            <label className="form-label fw-bold">Gender:</label>
            <select
              {...register("gender")}
              className="form-select"
              style={{ width: 400 }}
            >
              <option value="0" selected>
                Select
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div className="mb-2">
            <label className="form-label fw-bold">Age:</label>
            <input
              {...register("age", {
                min: { value: 18, message: "Age must be 18+" },
              })}
              className="form-control"
              type="number"
              style={{ width: 400 }}
            />
            <p className="py-2 text-danger fw-bold">{errors.age?.message}</p>
          </div>

          <div className="button">
            <p>
              {formInput && (
                <p className="font-semibold text-green-500 mb-5 flex items-center gap-1">
                  <BsFillCheckSquareFill /> Form has been submitted successfully
                </p>
              )}
            </p>
            <button type="button" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BasicInfo;

//1. use register function add into the useform hook and then add register into the all input field to register them and it's a callback function so its inject all the input
