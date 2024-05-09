{
// 4. Implement a generic function called reverseArray that takes an array of any type and returns the reversed version of the array. Test it with different types of arrays (e.g., numbers, strings) to ensure it works correctly.


const reverseArray = <T>(array: T[]): T[] => array.reverse();



// Test with numbers
const numberArr: number[] = [1, 2, 3, 4, 5];
console.log(reverseArray(numberArr)); // Output: [5, 4, 3, 2, 1]

















}