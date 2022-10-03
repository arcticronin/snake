import init, {greet} from "snake";

init().then(_ => {
    greet("mario");
    console.log("ok");
})