const Keypad = ({ exp, setExp }) => {
    const addToExp = (a) => {
        setExp(exp + a);
    }
    const deleteLastChar = () => {
        exp = exp.substring(0, exp.length - 1);
        setExp(exp);
    };
    function evaluateExpression(expression) {
        // Helper function to perform the actual calculation for two numbers and an operator
        function operate(a, b, operator) {
            switch (operator) {
                case '+':
                    return a + b;
                case '-':
                    return a - b;
                case 'x':
                    return a * b;
                case '/':
                    if (b !== 0) {
                        return a / b;
                    } else {
                        // Handle division by zero
                        throw new Error('Division by zero is not allowed');
                    }
                default:
                    // Handle unknown operators
                    throw new Error('Unknown operator: ' + operator);
            }
        }

        // Updated regular expression to handle decimal numbers
        const tokens = expression.match(/(\d+\.\d+|\d+|\+|-|x|\/)/g);

        // Order of operations: Division, Multiplication, Addition, Subtraction
        const operators = ['/','x','+','-'];

        // Iterate through each operator and perform the corresponding operation
        operators.forEach(operator => {
            while (tokens.indexOf(operator) !== -1) {
                const operatorIndex = tokens.indexOf(operator);
                const operand1 = parseFloat(tokens[operatorIndex - 1]);
                const operand2 = parseFloat(tokens[operatorIndex + 1]);
                const result = operate(operand1, operand2, operator);

                // Replace the operands and operator with the result
                tokens.splice(operatorIndex - 1, 3, result.toString());
            }
        });

        // The final result should be the only element in the 'tokens' array
        return parseFloat(tokens[0]);
    }
    
    // Function to handle the "=" button click
    const handleEquals = () => {
        try {
            const result = evaluateExpression(exp);
            setExp(result.toString());
        } catch (error) {
            // Handle errors, e.g., division by zero
            console.error(error.message);
            setExp('Error');
        }
    };
    return ( 
        <div className="keypad">
            <div className="row">
                <button onClick={() => { setExp(""); }}>AC</button>
                <button>+/-</button>
                <button>%</button>
                <button onClick={() => { addToExp("/") }}>/</button>
            </div>
            <div className="row">
                <button onClick={() => { addToExp("7") }}>7</button>
                <button onClick={() => { addToExp("8") }}>8</button>
                <button onClick={() => { addToExp("9") }}>9</button>
                <button onClick={() => { addToExp("x") }}>x</button>
            </div>
            <div className="row">
                <button onClick={() => { addToExp("4") }}>4</button>
                <button onClick={() => { addToExp("5") }}>5</button>
                <button onClick={() => { addToExp("6") }}>6</button>
                <button onClick={() => { addToExp("-") }}>-</button>
            </div>
            <div className="row">
                <button onClick={() => { addToExp("1") }}>1</button>
                <button onClick={() => { addToExp("2") }}>2</button>
                <button onClick={() => { addToExp("3") }}>3</button>
                <button onClick={() => { addToExp("+") }}>+</button>
            </div>
            <div className="row">
                <button onClick={() => { addToExp("0") }}>0</button>
                <button onClick={() => { addToExp(".") }}>.</button>
                <button onClick={() => { deleteLastChar() }}>DEL</button>
                <button onClick = {() => { handleEquals() }}>=</button>
            </div>
        </div>
     );
}
 
export default Keypad;