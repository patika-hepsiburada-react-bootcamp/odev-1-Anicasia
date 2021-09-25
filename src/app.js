import getData from "./lib/service";

(async () => {
    const user = await getData(1);
    console.log(user)
})();