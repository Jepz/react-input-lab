import Services from "./index";

const services = Services();

services.user.register("jesper", "1234");

const user = services.user.getUser();

console.log(user);
