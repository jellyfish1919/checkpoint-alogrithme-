
// 3. Fibonacci Sequence (Recursion)
function fibonacciRecursive(n) {
    if (n <= 1) {
        return n; // Base case
    } else {
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
}
// 4. Palindrome Checker (Recursion)
function checkPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    if (cleanedStr.length <= 1) {
        return true; // Base case
    } else if (cleanedStr[0] === cleanedStr[cleanedStr.length - 1]) {
        return checkPalindrome(cleanedStr.slice(1, -1));
    } else {
        return false; // Characters don't match
    }
}

// 5. Power Function (Recursion)
function calculatePower(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * calculatePower(base, exponent - 1);
    }
}