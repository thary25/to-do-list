import { useRef } from "react";
import classes from "./TaskAdd.module.css";

export default function TaskAdd({ action }) {
  const ref = useRef();
  return (
    <>
      <form className={classes.form}>
        <input
          ref={ref}
          type="text"
          name="name"
          id="name"
          placeholder="Add Item"
        />
        <button
          type="button"
          onClick={() => action(ref.current.value, "12/01/2025")}
        >
          Add
        </button>
      </form>
    </>
  );
}
