`strict mode`;

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
// spendingLimits.jay = 200;
console.log(spendingLimits);
//{jonas: 1500, matilda: 100}

// const limit = spendingLimits[user]? spendingLimits[user]:0;
const getLimit = (limits, user) => limits?.[user] ?? 0;

//* Pure function
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  // let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }

  // const limit = getLimit(user)

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
  // budget.push({ value: -value, description, user: cleanUser });
};
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');
console.log(newBudget1);
(9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
console.log(newBudget2);
//(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}])
console.log(newBudget3);
//(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}])

const checkExpenses2 = function (state, limits) {
  // let lim;
  // if (spendingLimits[entry.user]) {
  //   lim = spendingLimits[entry.user];
  // } else {
  //   lim = 0;
  // }
  // const limit = spendingLimits?.[entry.user]?? 0
  // for (const entry of newBudget3)
  //   if (entry.value < -getLimit(limits, entry.user)) {
  //     entry.flag = 'limit';
  //   }

  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user)
      ? {
          ...entry,
          flag: 'limit',
        }
      : entry;
  });
};

const checkExpenses = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? {
          ...entry,
          flag: 'limit',
        }
      : entry
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(newBudget3);
//(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}])
// console.log(budget);
console.log(finalBudget);
//(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}])

//* Impure
const logBigExpenses = function (state, bigLimit) {
  //   let output = '';
  //   for (const entry of budget) {
  //     // if (entry.value <= -bigLimit) {
  //     //   //* Emojis are 2 chars
  //     //   output += `${entry.description.slice(-2)} / `;
  //     // }
  //
  //     output +=
  //       entry.value <= -bigLimit ? `${entry.description.slice(-2)} /` : '';
  //   }
  //   output = output.slice(0, -2); // Remove last '/ '
  //   console.log(output);
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  //   .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, '');
  console.log(bigExpenses);
  //📱 / 💻
};
logBigExpenses(finalBudget, 500);
//(2) [{…}, {…}]
