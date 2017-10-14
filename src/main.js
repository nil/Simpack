import foo from "./foo";
import "./style.scss";

const output = document.getElementById("output");
output.innerHTML = foo;

if (process.env.NODE_ENV === "development") {
  console.log("You are developing");
} else if (process.env.NODE_ENV === "production") {
  console.log("This message appears after the build");
}
