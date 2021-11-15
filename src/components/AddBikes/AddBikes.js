import React from "react";
import "./AddBikes.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddBikes = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://lit-wildwood-08261.herokuapp.com/bikes", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };
  return (
    <div className="add_bikes">
      <h2>Add bikes</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Name" />

        <input {...register("brand")} placeholder="Brand" />
        <input type="number" {...register("price")} placeholder="Price" />
        <textarea {...register("description")} placeholder="Description" />
        <input {...register("img")} placeholder="Image url" />

        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddBikes;
