# JavaScript Null vs. Undefined Check Error

This repository demonstrates a subtle yet common error in JavaScript related to how null and undefined values are handled, specifically when checking for their presence and attempting to access properties.

The `bug.js` file shows code that uses loose equality (`==`) to check for null, which fails to catch undefined values.  This leads to a `TypeError` when trying to access the `length` property of an undefined variable.

The `bugSolution.js` file presents a corrected version that uses strict equality (`===`) or the nullish coalescing operator (`??`) for accurate null and undefined checks.

This example highlights the importance of using the appropriate equality operator and understanding the nuances of null and undefined in JavaScript to avoid runtime errors.