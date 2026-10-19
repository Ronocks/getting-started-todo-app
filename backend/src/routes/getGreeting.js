const GREETING = 'Hello Conor!';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
