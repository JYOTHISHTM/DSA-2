// BUBBLE SORT


// function bubble(arr){
//     let swapped
//     do{
//         swapped =false
//         for(var i=0;i<arr.length;i++){
//             if(arr[i]>arr[i+1]){
//                 let temp=arr[i]
//                 arr[i]=arr[i+1]
//                 arr[i+1]=temp
//                 swapped=true
//             }
//         }
//     }while(swapped)
    

// }
// let arr=[1,5,3,8,6]
// console.log(bubble(arr));
// console.log(arr);

// bubble sort{

// function bubbleSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
//             }
//         }
//     }
//     return arr;
// }


// console.log(bubbleSort([4,2,6,5,7,7,3,2,1,5]));


// }


// 

// INSERTION SORT

// function insertion(arr){
//     for(var i=1;i<arr.length;i++){
//         let currecnt=arr[i]
//         let j=i-1 
//         while(j>=0&&arr[j]>currecnt){
//             arr[j+1]=arr[j]
//             j=j-1 
//         }
//         arr[j+1]=currecnt
//     }
// }

// let arr=[9,6,4,2,7,5]
// insertion(arr)
// console.log(arr);


// SELECTION SORT

// function selectionSort(arr) {
//     let n = arr.length;
  
//     for (let i = 0; i < n - 1; i++) {
//       let minIndex = i;
//       for (let j = i + 1; j < n; j++) {
//         if (arr[j] < arr[minIndex]) {
//           minIndex = j;
//         }
//       }
//       if (minIndex !== i) {
//         [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//       }
//     }
  
//     return arr;
//   }
  
//   let arr = [64, 25, 12, 22, 11];
//   console.log(selectionSort(arr));
  

// QIUCK SORT

// function quick(arr){
//     if(arr.length<2) return arr

//     let left=[]
//     let right=[]
//     let pivot=arr[arr.length-1]
//     for(var i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }return [...quick(left),pivot,...quick(right)]
// }

// let arr=[2,6,4,3,8,1]
// console.log(quick(arr));

// quick sort inplace


// function quickSort(arr, low = 0, high = arr.length - 1) {
//     if (low < high) {
//         // Partition the array and get the pivot index
//         let pivotIndex = partition(arr, low, high);

//         // Recursively sort elements before and after the pivot
//         quickSort(arr, low, pivotIndex - 1);
//         quickSort(arr, pivotIndex + 1, high);
//     }
//     return arr; // Return the sorted array
// }

// function partition(arr, low, high) {
//     let pivot = arr[high]; // Choose the last element as the pivot
//     let i = low - 1; // Index of the smaller element

//     // Rearrange the elements
//     for (let j = low; j < high; j++) {
//         if (arr[j] <= pivot) {
//             i++;
//             [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
//         }
//     }
//     // Place the pivot in the correct position
//     [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
//     return i + 1; // Return the pivot index
// }

// // Example usage
// const arr = [10, 7, 8, 9, 1, 5];
// quickSort(arr);
// console.log("Sorted Array:", arr); // Output: Sorted Array: [ 1, 5, 7, 8, 9, 10 ]


// MERGE SORT


// function merge(arr){
//     if(arr.length<2){
//         return arr
//     }

//     let mid=Math.floor(arr.length/2)
//     let left=arr.slice(0,mid)
//     let right=arr.slice(mid)
//     return mersort(merge(left),merge(right))
// }

// function mersort(left,right){
//     let sortedArray=[]
//     while(left.length&&right.length){
//         if(left[0]<=right[0]){
//             sortedArray.push(left.shift())
//         }else{
//             sortedArray.push(right.shift())
//         }
//     }
//     return [...sortedArray,...left,...right]

// }


// console.log(merge([4,7,5,6,3,2,1]));




