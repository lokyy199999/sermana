# sermana

A simple JavaScript package for manipulating dates and times.

## Installation

You can install sermana via npm:

```bash
npm install sermana
```

## Usage

```javascript
const sermana = require('sermana');

// Get the current week number
const currentWeek = sermana.getCurrentWeekNumber();
console.log('Current week number:', currentWeek);

// Get the start date of the current week
const startDate = sermana.getStartOfWeek();
console.log('Start date of current week:', startDate.toDateString());

// Get the end date of the current week
const endDate = sermana.getEndOfWeek();
console.log('End date of current week:', endDate.toDateString());
```

## API

### `getCurrentWeekNumber()`

Returns the current week number.

### `getStartOfWeek()`

Returns the start date of the current week.

### `getEndOfWeek()`

Returns the end date of the current week.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
