// =============================== Step 2: Logical AND (&&) - Real Example===============================

// Variables
let age = 19;           // student's age
let feePaid = true;     // fee status


let canEnterExam = (age >= 18) && feePaid;

console.log("Can the student enter the exam?", canEnterExam);


// ===============================Step 3: Logical OR (||) - Real Example ===============================

// Variables
let emailCorrect = false;      // is email correct?
let phoneCorrect = true;       // is phone number correct?

// Check if user can login
let canLogin = emailCorrect || phoneCorrect;

console.log("Can the user login?", canLogin);


// true → login allowed (either email OR phone is correct)
// false → login not allowed (both incorrect)


// ===============================Step 4: Logical NOT (!) - Real Example  ===============================

// Variable
let isBlocked = false;   // user blocked status

// Check if user can access
let canAccess = !isBlocked;

console.log("Can the user access the website?", canAccess);


// true → access allowed (isBlocked = false)
// false → access denied (isBlocked = true)



// ===============================Step 5: Combine Logical Operators ===============================

// Variables
let isLoggedIn = true;   // user logged in?
let isPremium = false;   // is user a premium member?
let hasCoupon = true;    // does user have a coupon?

// Check if user gets special discount
// Condition: Logged in AND (Premium OR has Coupon)

let getDiscount = isLoggedIn && (isPremium || hasCoupon);

console.log("Does the user get special discount?", getDiscount);

// true → discount granted (user logged in AND either premium OR has coupon)
// false → discount not granted (either not logged in OR neither premium nor has coupon)

