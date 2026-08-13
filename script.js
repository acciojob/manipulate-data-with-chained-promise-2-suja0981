//your JS code here. If required.
const output = document.getElementById("output");

  const processArray = () => {
    const arr = [1, 2, 3, 4];

    // Initial Promise: 3 seconds
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(arr);
      }, 3000);
    })
      .then((numbers) => {
        const evenNumbers = numbers.filter((num) => num % 2 === 0);

        // First transformation: 1 second delay
        return new Promise((resolve) => {
          setTimeout(() => {
            output.textContent = `[${evenNumbers.join(", ")}]`;
            resolve(evenNumbers);
          }, 1000);
        });
      })
      .then((evenNumbers) => {
        const doubledNumbers = evenNumbers.map((num) => num * 2);

        // Second transformation: 2 seconds delay
        return new Promise((resolve) => {
          setTimeout(() => {
            output.textContent = `[${doubledNumbers.join(", ")}]`;
            resolve(doubledNumbers);
          }, 2000);
        });
      });
  };
processArray();