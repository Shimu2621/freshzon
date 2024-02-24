import React, { useState } from "react";
import { TbPasswordUser } from "react-icons/tb";
import { useForm } from "react-hook-form";

const ChangePass = () => {
  const [formInput, setFormInput] = useState(false);
  //destructuring register, handleSubmit and formState into the useForm function

  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Password save successfully", data);
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
      {/* <div className="row"> */}
      <div className="align-center">
        {/* /* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="border shadow p-5 rounded-2"
          style={{ width: 700 }}
          action=""
        >
          <div className="mt-10 d-flex justify-content-between">
            <h2 className="align-center" style={{ fontSize: 28 }}>
              <TbPasswordUser
                size={10}
                style={{
                  color: "ButtonHighlight",
                  borderRadius: "50%",
                  backgroundColor: "darkgray",
                  width: "50px",
                  height: "50px",
                  padding: "6px",
                }}
              />
              Change Password
            </h2>
          </div>
          <hr />

          <div className=" mt-5 mb-3 d-flex justify-content-between align-item-center">
            <label className="form-label fw-bold">Current Password</label>
            <input
              {...register("pass", {
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
              })}
              className="form-control"
              type="password"
              style={{ width: "300px" }}
            />
            {errors?.pass?.type === "pattern" && (
              <span className="py-2 text-danger fw-bold">
                password contain must be a uppercase, lowercase,number and
                special character
              </span>
            )}
          </div>

          <div className="mb-3 d-flex justify-content-between align-item-center">
            <label className="form-label fw-bold">New Password</label>
            <input
              {...register("pass", {
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
              })}
              className="form-control"
              type="password"
              style={{ width: "300px" }}
            />
            {errors?.pass?.type === "pattern" && (
              <span className="py-2 text-danger fw-bold">
                password contain must be a uppercase, lowercase,number and
                special character
              </span>
            )}
          </div>

          <div className="mb-3 d-flex justify-content-between align-item-center m-50">
            <label className="form-label fw-bold">Confirm New Password</label>
            <input
              {...register("confirmPass", {
                validate: (data) => {
                  if (watch("pass") !== data) {
                    return "Must be match with password";
                  }
                },
              })}
              className="form-control text-align-end"
              type="password"
              style={{
                width: "300px",
                height: "38px",
                margin: "0 auto",
                marginLeft: "125px",
              }}
            />
            <p className="py-2 text-danger fw-bold">
              {errors.confirmPass?.message}
            </p>
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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePass;
