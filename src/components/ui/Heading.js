import classes from "./Heading.module.css";

export function HeadingH3({ children }) {
  return <h3 className={classes.headingSmall}>{children}</h3>;
}
