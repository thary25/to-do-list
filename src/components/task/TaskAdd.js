import classes from "./TaskAdd.module.css";

export default function TaskAdd() {
  return (
    <>
      <form className={classes.form}>
        <input type="text" name="name" id="name" placeholder="Add Item" />
        <button>Add</button>
      </form>
    </>
  );
}
