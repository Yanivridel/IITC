function initDB() {
    const user =
        {
            id: Date.now() + 1,
            firstName: "Yaniv",
            lastName: "Ridel",
            pin: "1234",
            balance: 1000,
            lastTrans: [
                {
                    action:"deposit",
                    amount: 1000
                }
            ]
        };
        if(getLocal("user").length===0) setLocal("user", user);
}

const getLocal = (key) => JSON.parse(localStorage.getItem(key)) || [];
const setLocal = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const clearStorage = () => localStorage.clear();
// clearStorage();
export { initDB, getLocal, setLocal, clearStorage };