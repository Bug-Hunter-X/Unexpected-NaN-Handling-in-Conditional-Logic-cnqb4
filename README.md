# Unexpected NaN Handling in JavaScript Conditional Logic

This repository demonstrates a common JavaScript pitfall involving loose comparison (==) and the handling of NaN (Not a Number).

The `bug.js` file contains a function that attempts to categorize numbers based on whether they are null, negative, or positive.  However, the function's behavior is undefined when provided with NaN.

The `bugSolution.js` file provides a corrected version that uses strict equality (===) and explicitly checks for NaN to handle the edge case correctly.

This example highlights the importance of using strict equality when performing comparisons in JavaScript, particularly when dealing with special values like NaN.