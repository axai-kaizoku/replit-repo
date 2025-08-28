/**
 *
 * Patterns:
  —------------------------------------------------
  How to approach:

  1. No. of lines = no. of rows = no. of times outer loop will run.
  2. Identify for every row no. 
    * how many cols are there
    * Type of element in col
  3. What do you need to print
  Note: Try to find the formula relating rows & cols

 */

function patternTwo(n) {
  for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j <= i; j++) {
      row += "*"
    }
    console.log(row)
  }
}

function pattern1(n) {
  for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j < n; j++) {
      row += "* "
    }
    console.log(row)
  }
}

function pattern3(n) {
  for (let i = 1; i <= n; i++) {
    let row = ""
    for (let j = 1; j <= i; j++) {
      row += `${j} `
    }
    console.log(row)
  }
}

function pattern4(n) {
  for (let i = 1; i <= n; i++) {
    let row = ""
    for (let j = 1; j <= i; j++) {
      row += `${i} `
    }
    console.log(row)
  }
}

function pattern5(n) {
  for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j < n - i; j++) {
      row += `* `
    }
    console.log(row)
  }
}

function pattern6(n) {
  for (let i = 0; i <= n; i++) {
    let row = ""
    for (let j = 1; j <= n - i; j++) {
      row += `${j} `
    }
    console.log(row)
  }
}

function pattern7(n) {
  for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j < n - i; j++) {
      row += ` `
    }

    for (let j = 0; j <= i * 2; j++) {
      row += `*`
    }
    console.log(row)
  }
}

function pattern8(n) {
  for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j < i; j++) {
      row += ` `
    }

    for (let j = 0; j <= n - i * 2 + 1; j++) {
      row += `*`
    }
    console.log(row)
  }
}

function pattern9(n) {
  for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j < n - i; j++) {
      row += ` `
    }

    for (let j = 0; j <= i * 2; j++) {
      row += `*`
    }
    console.log(row)
  }

  for (let i = n - 2; i >= 0; i--) {
    let row = ""
    for (let j = 0; j <= n - i - 1; j++) {
      row += ` `
    }

    for (let j = 0; j < 2 * i + 1; j++) {
      row += `*`
    }
    console.log(row)
  }
}

function pattern14(n) {
  for (let i = 0; i < n; i++) {
    let row = ""

    for (let j = 0; j <= i; j++) {
      row += `${String.fromCharCode(65 + i)} `
    }

    console.log(row)
  }
}
