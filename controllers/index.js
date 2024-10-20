async function handleHelloWorld(req, res) {
    return res.json({ msg: "Hello World" });
}
module.exports = {
    handleHelloWorld,
};
