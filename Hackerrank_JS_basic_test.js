class NotesStore {
  constructor(notes = []) {
    this.notes = notes;
  }
  addNote(state, name) {
    let states = ["completed", "active", "others"];
    if (name.length === 0) throw new Error("Name cannot be empty");
    if (!states.includes(state)) throw new Error(`Invalid state ${state}`);
    this.notes.push({ state, name });
  }
  getNotes(state) {
    let states = ["completed", "active", "others"];
    if (!state || !states.includes(state) || state.length === 0)
      throw new Error(`Invalid state ${state}`);
    let filtered = this.notes.filter((note) => note.state === state);
    let result = filtered.map((obj) => {
      return obj.name;
    });
    return result;
  }
}

let test = new NotesStore();

test.addNote("completed", "do sth");
test.addNote("completed", "do sth");
test.addNote("completed", "do sth");
console.log(test.getNotes("completed"));
/////////////////////////////////////////////////////////////////////////////////////////////////////

function weekdaytext(weekdays) {
  return function (int) {
    if (int > weekdays.length - 1 || int < 0)
      throw new Error("Invalid weekday number");
    return weekdays[int];
  };
}

const getText = weekdaytext(["sat", "sun", "mon", "tue", "wed", "thu", "fri"]);
console.log(getText(-1));
