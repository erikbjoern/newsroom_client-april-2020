import JtockAuth from "j-tockauth";

const auth = new JtockAuth({
  host: "https://dailynewssense-api.herokuapp.com/api",
  debug: false,
});
export default auth;
