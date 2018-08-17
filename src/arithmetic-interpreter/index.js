const log = require('../util/Log');
const getArgs = require('../util/getArgs');
const Interpreter = require('./modules/Interpreter');

(()=>{
    const {expression} = getArgs('expression');
    const interpreter = new Interpreter(expression);
    const result = interpreter.expression();

    log.INFO(`Recieved the following expression: ${expression}`);
    log.INFO(`The result is: ${result}`);
    process.exit();
})();